import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleModule() {
    const { moduleCode } = useParams();
    const [module, setModule] = useState({});
    const [cohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/${moduleCode}`)
            .then(response => response.json())
            .then(data => {
                setModule(data)
                setIsLoaded(true)

                const promises = data.delivered_to.map(endpoint => {
                    return fetch(endpoint)
                        .then(response => response.json())
                })

                Promise.all(promises)
                    .then(cohortsData => setCohorts(cohortsData))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error))
    });

    if (isLoaded) {
        return (
            <MainLayout>
                <h2>{module.full_name} ({module.code})</h2>
                <p>CA Split: {module.ca_split}</p>
                <h3>Cohorts:</h3>
                <ul>
                    {cohorts.map(cohort => (
                        <li key={cohort.code}>{cohort.name}</li>
                    ))}
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

export default SingleModule;