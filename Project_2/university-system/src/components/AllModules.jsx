import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function AllModules() {
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/module/")
            .then(response => response.json())
            .then(data => {
                // For each module, make an additional HTTP request to retrieve the data for each cohort
                const promises = data.map(module => {
                    const cohortPromises = module.delivered_to.map(endpoint => fetch(endpoint));
                    return Promise.all(cohortPromises)
                        .then(responses => Promise.all(responses.map(res => res.json())))
                        .then(cohorts => ({
                            ...module,
                            delivered_to: cohorts.map(cohort => ({ endpoint: cohort.url, name: cohort.name }))
                        }));
                })

                Promise.all(promises)
                    .then(modulesWithCohorts => {
                        setModules(modulesWithCohorts);
                        setIsLoaded(true);
                    })
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }, []);

    const displayModules = () => {
        const filteredModules = modules.filter(module =>
            module.code.toLowerCase().includes(searchText.toLowerCase()) ||
            module.full_name.toLowerCase().includes(searchText.toLowerCase())
        )

        return (
            filteredModules.map(elem =>
                <div key={elem.code}>
                    <h2>{elem.full_name}</h2>
                    <p>Shortcode: {elem.code}</p>
                    <p>CA Split: {elem.ca_split}</p>
                    <p>Delivered to:</p>
                    <ul>
                        {elem.delivered_to.map(cohort =>
                            <li key={cohort.endpoint}>
                                <a href={cohort.endpoint}>{cohort.name}</a>
                            </li>
                        )}
                    </ul>
                    <hr />
                </div>
            )
        )
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <input
                type="text"
                value={searchText}
                placeholder="Search Module"
                onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayModules()}
                </ul>
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <img src="loading.gif" alt="loading"></img>
            </MainLayout>
        )
    }
}

export default AllModules;
