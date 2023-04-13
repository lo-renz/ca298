import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleCohort() {
    const { cohortCode } = useParams();
    const [cohort, setCohort] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cohort/${cohortCode}`)
            .then(response => response.json())
            .then(data => {
                setCohort(data)
            })
            .catch(error => console.log(error))

        fetch(`http://127.0.0.1:8000/api/student/?cohort=${cohortCode}`)
            .then(response => response.json())
            .then(data => {
                setStudents(data)
            })
            .catch(error => console.log(error))
    })

    const displayCohort = () => {
        return (
            <div>
                <li>{cohort.id}</li>
                <li>{cohort.year}</li>
                <li>{cohort.name}</li>
            </div>
        )
    }

    const displayStudents = () => {
        return (
            students.map(elem =>
                <div>
                    <li>{elem.student_id}</li>
                    <li>{elem.first_name}</li>
                    <li>{elem.last_name}</li>
                    <li>{elem.email}</li>
                    <br></br>
                </div>
            )
        )
    }

    return (
        <MainLayout>
            <ul>
                {displayCohort()}
                <br></br>
                {displayStudents()}
                <button><Link to="/degrees">Back</Link></button>
            </ul>
        </MainLayout>
    )
}

export default SingleCohort;