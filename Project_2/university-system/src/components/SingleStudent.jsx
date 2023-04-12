import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function SingleStudent() {
    const [student, setStudent] = useState("");
    const [studentId, setStudentId] = useState("");
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState("");

    const handleInputChange = (event) => {
        setStudentId(event.target.value);
    };

    const handleButtonClick = () => {
        fetch(`http://127.0.0.1:8000/api/student/${studentId}`)
            .then((response) => response.json())
            .then((data) => {
                setStudent(data);
                setIsLoaded(true);
                fetchGrades();
            })
            .catch((error) => console.log(error));
    };

    const fetchGrades = () => {
        fetch(`http://127.0.0.1:8000/api/grade/?student=${studentId}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setModules(data)
            })
            .catch(error => console.log(error))
    }

    const displayInfo = () => {
        return (
            <div>
                <h2>Modules:</h2>
                <ul>
                    {modules.map(item => <li key={item.id}><b>{item.module.split("/")[5]}</b> Grade: {item.total_grade}</li>)}
                </ul>
            </div>
        );
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <h2>Enter student ID:</h2>
                <input type="text" value={studentId} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Submit</button>

                <h2>{student.first_name} {student.last_name}</h2>
                <ul>
                    <li>ID: {student.student_id}</li>
                </ul>

                {displayInfo()}
            </MainLayout>
        );
    } else {
        return (
            <MainLayout>
                <h2>Enter student ID:</h2>
                <input type="text" value={studentId} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Submit</button>
            </MainLayout>
        );
    }
}

export default SingleStudent;
