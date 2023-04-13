import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function CreateStudent() {
    const [studentId, setStudentId] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [cohort, setCohort] = useState("");
    const [cohorts, setCohorts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
            .then((response) => response.json())
            .then((data) => setCohorts(data))
            .catch((error) => console.log(error))
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/student/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "student_id": studentId,
                "first_name": fName,
                "last_name": lName,
                "cohort": cohort,
            }),
        });

        const data = await response.json();
        console.log(data);

        setStudentId("");
        setFName("");
        setLName("");
        setCohort([]);
        setMessage("Student created successfully");
    };


    const displayCohorts = () => {
        return (
            <select value={cohort} onChange={(e) => setCohort(e.target.value)}>
                <option value="">Select a cohort</option>
                {cohorts.map((cohort) => (
                    <option key={cohort.id} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}>
                        {cohort.id}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <label>Student ID</label>
                <input
                    type="text"
                    value={studentId}
                    placeholder="Enter student id"
                    onChange={(e) => setStudentId(e.target.value)}
                />

                <label>First Name</label>
                <input
                    type="text"
                    value={fName}
                    placeholder="Enter first name"
                    onChange={(e) => setFName(e.target.value)}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    value={lName}
                    placeholder="Enter last name"
                    onChange={(e) => setLName(e.target.value)}
                />

                <label>Cohort</label>
                {displayCohorts()}


                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    );
}

export default CreateStudent;