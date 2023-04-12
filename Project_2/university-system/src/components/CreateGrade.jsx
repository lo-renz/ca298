import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function CreateGrade() {
    const [module, setModule] = useState("");
    const [caMark, setCAMark] = useState(0);
    const [examMark, setExamMark] = useState(0);
    const [cohort, setCohort] = useState("");
    const [cohorts, setCohorts] = useState([]);
    const [student, setStudent] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
            .then(response => response.json())
            .then(data => setCohorts(data))
            .catch(error => console.log(error))
    })

    let handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/grade/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "module": `http://127.0.0.1:8000/api/module/${module}/`,
                "ca_mark": caMark,
                "exam_mark": examMark,
                "cohort": cohort,
                "student": `http://127.0.0.1:8000/api/student/${student}/`,
            }),
        });

        const data = await response.json();
        console.log(data);

        setModule("");
        setCAMark(0);
        setExamMark(0);
        setCohort("");
        setStudent("");
        setMessage("Grade created successfully");
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
                <label>Module</label>
                <input
                    type="text"
                    value={module}
                    placeholder="Enter module code"
                    onChange={(e) => setModule(e.target.value)}
                />

                <label>CA Mark</label>
                <input
                    type="number"
                    value={caMark}
                    placeholder="CA Mark"
                    onChange={(e) => setCAMark(e.target.value)}
                />

                <label>Exam Mark</label>
                <input
                    type="number"
                    value={examMark}
                    placeholder="Exam Mark"
                    onChange={(e) => setExamMark(e.target.value)}
                />

                <label>Cohort</label>
                {displayCohorts()}

                <label>Student</label>
                <input
                    type="text"
                    value={student}
                    placeholder="Enter student id"
                    onChange={(e) => setStudent(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    )
}

export default CreateGrade;