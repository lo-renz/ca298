import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllCohorts() {
    const [cohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
            .then(response => response.json())
            .then(data => {
                setCohorts(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])

    const displayCohorts = () => {
        const filteredCohorts = cohorts.filter(cohort =>
            cohort.id.toLowerCase().includes(searchText.toLowerCase()) ||
            cohort.name.toLowerCase().includes(searchText.toLowerCase())
        )

        return (
            filteredCohorts.map(cohort =>
                <div key={cohort.id}>
                    <h2>{cohort.name}</h2>
                    <p>ID: {cohort.id}</p>
                    <Link to={`/cohort/${cohort.id}`}>
                        <button>View Students</button>
                    </Link>
                    <br />
                    <Link to={`/cohort/${cohort.id}/modules`}>
                        <button>View Modules</button>
                    </Link>
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
                    placeholder="Search Cohort"
                    onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayCohorts()}
                </ul>
            </MainLayout>
        )
    }
    else {
        return (
            <MainLayout>
                <img src="loading.gif" alt="loading"></img>
            </MainLayout>
        )
    }
}

export default AllCohorts;
