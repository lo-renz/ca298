import MainLayout from "../layout/MainLayout";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SingleDegree({degreeCode}) {
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [cohorts, setCohorts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/degree/" + degreeCode)
        .then(response => response.json())
        .then(data => {
            setName(data.full_name)
            setCode(data.shortcode)
        })
        .catch(error => console.log(error))

        fetch("http://127.0.0.1:8000/api/cohort/?degree=" + degreeCode)
        .then(response => response.json())
        .then(data => {
            setCohorts(data)
        })
        .catch(error => console.log(error))
    })

    const displayDegree = () => {
        return (
            <div>
                <li>{name}</li>
                <li>{code}</li>
            </div>
        )
    }

    const displayCohorts = () => {
        return (
            cohorts.map(elem =>
                <div>
                    <li>{elem.id}</li>
                    <li>{elem.year}</li>
                    <li>{elem.name}</li>
                    <br></br>
                </div>
            )
        )
    }

    return (
        <MainLayout>
            <ul>
                {displayDegree()}
                <br></br>
                {displayCohorts()}
                <button><Link to="/degrees">Back</Link></button>
            </ul>
        </MainLayout>
    )
}

export default SingleDegree;