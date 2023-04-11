import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CohortModules() {
    const { cohortCode } = useParams();
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohortCode}`)
            .then(response => response.json())
            .then(data => {
                setModules(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error));
    }, []);

    const displayModules = () => {
        return (
            modules.map(elem =>
                <div key={elem.code}>
                    <h2>{elem.full_name} ({elem.code})</h2>
                    <hr />
                </div>
            )
        )
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <h2>Modules delivered to {cohortCode}</h2>
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

export default CohortModules;