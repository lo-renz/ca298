import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
            .then(response => response.json())
            .then(data => {
                setStudent(data);
                setIsLoaded(true);
                fetchGrades();
            })
            .catch(error => console.log(error));
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
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Modules:</Card.Header>
                    <ListGroup variant="flush">
                        {modules.map(item =>
                            <ListGroup.Item>
                                <b>{item.module.split("/")[5]}</b><br />
                                Grade: {item.total_grade}
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                </Card>
            </div>
        );
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">ID:</InputGroup.Text>
                    <Form.Control
                        type="text"
                        value={studentId}
                        onChange={handleInputChange}
                        placeholder="Enter Student ID"
                        aria-label="Enter Student ID"
                        aria-describedby="basic-addon2"
                    />
                    <Button style={{ outline: "none" }} variant="secondary" onClick={handleButtonClick}>Submit</Button>
                </InputGroup>
                <br />

                <Card style={{ width: '18rem' }}>
                    <Card.Header>{student.first_name} {student.last_name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            ID: {student.student_id}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Cohort: {student.cohort.split("/")[5]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Email: {student.email}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
                <br />

                {displayInfo()}
            </MainLayout>
        );
    } else {
        return (
            <MainLayout>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">ID:</InputGroup.Text>
                    <Form.Control
                        type="text"
                        value={studentId}
                        onChange={handleInputChange}
                        placeholder="Enter Student ID"
                        aria-label="Enter Student ID"
                        aria-describedby="basic-addon2"
                    />
                    <Button style={{ outline: "none" }} variant="secondary" onClick={handleButtonClick}>Submit</Button>
                </InputGroup>
            </MainLayout>
        );
    }
}

export default SingleStudent;