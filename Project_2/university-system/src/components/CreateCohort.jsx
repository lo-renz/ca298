import MainLayout from "../layout/MainLayout";

import { useState, useEffect } from "react";

function CreateCohort() {
    const [cohortId, setCohortId] = useState("");
    const [year, setYear] = useState(0);
    const [degree, setDegree] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [degrees, setDegrees] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
        .then(response => response.json())
        .then(data => {setDegrees(data)})
        .catch(error => console.log(error))
    }, [])

    let handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8000/api/cohort/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": cohortId,
                "year": year,
                "degree": degree,
                "name": name,
            }),
        });
        setCohortId("");
        setYear(0);
        setDegree("");
        setName("");
        setMessage("Cohort created successfully");
    }

    const displayDegrees = () => {
        return degrees.map(elem => (
            <option key={elem.shortcode} value={degree}>
                {elem.full_name}
            </option>
        ))
    }

    const handleSelect = e => {
    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <labe>ID</labe>
                <input
                    type="text"
                    value={cohortId}
                    placeholder="Enter cohort ID"
                    onChange={(e) => setCohortId(e.target.value)}
                />

                <label>Year</label>
                <input
                    type="text"
                    value={year}
                    placeholder="Enter year"
                    onChange={(e) => setYear(e.target.value)}
                />

                <label>Degree</label>
                <select name="degree" onChange={handleSelect}

                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    placeholder="Enter cohort name"
                    onChange={(e) => setName(e.target.value)}
                />
 
                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    );
}

export default CreateCohort;