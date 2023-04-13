import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function CreateCohort() {
    const [cohortId, setCohortId] = useState("");
    const [year, setYear] = useState(0);
    const [degree, setDegree] = useState("");
    const [degrees, setDegrees] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/degree/")
            .then((response) => response.json())
            .then((data) => setDegrees(data))
            .catch((error) => console.log(error))
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/cohort/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id": cohortId,
                "year": year,
                "degree": degree,
            }),
        });

        const data = await response.json();
        console.log(data);

        setCohortId("");
        setYear("");
        setDegree("");
        setMessage("Cohort created successfully");
    };

    const displayDegrees = () => {
        return (
            <select value={degree} onChange={(e) => setDegree(e.target.value)}>
                <option value="">Select a degree</option>
                {degrees.map((degree) => (
                    <option key={degree.shortcode} value={`http://127.0.0.1:8000/api/degree/${degree.shortcode}/`}>
                        {degree.full_name}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <label>ID</label>
                <input
                    type="text"
                    value={cohortId}
                    placeholder="Enter cohort ID"
                    onChange={(e) => setCohortId(e.target.value)}
                />

                <label>Year</label>
                <input
                    type="number"
                    value={year}
                    placeholder="Enter year"
                    onChange={(e) => setYear(e.target.value)}
                />

                <label>Degree</label>
                {displayDegrees()}

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    );
}

export default CreateCohort;