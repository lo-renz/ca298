import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

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
                <h3>Cohort Information:</h3>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{cohort.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            ID: {cohort.id}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Year: {cohort.year}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    }

    const displayStudents = () => {
        return (
            students.map(student =>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{student.first_name} {student.last_name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                Student ID: {student.student_id}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Email: {student.email}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <br />
                </div>
            )
        )
    }

    return (
        <MainLayout>
            <ul>
                {displayCohort()}
                <br></br>
                <h3>Students:</h3>
                {displayStudents()}
                <Button variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/cohorts">Back</Link>
                </Button>
            </ul>
        </MainLayout>
    )
}

export default SingleCohort;