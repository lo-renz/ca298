import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
            <Form.Select value={cohort} onChange={(e) => setCohort(e.target.value)}>
                <option value="">Select a cohort</option>
                {cohorts.map((cohort) => (
                    <option key={cohort.id} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}>
                        {cohort.id}
                    </option>
                ))}
            </Form.Select>
        );
    };

    return (
        <MainLayout>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridId">
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control
                            type="text"
                            value={studentId}
                            placeholder="Enter Student ID"
                            onChange={(e) => setStudentId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridFName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={fName}
                            placeholder="Enter First Name"
                            onChange={(e) => setFName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridLName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={lName}
                            placeholder="Enter Last Name"
                            onChange={(e) => setLName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridCohorts">

                        <Form.Label>Cohorts</Form.Label>
                        {displayCohorts()}
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </Form>
        </MainLayout>
    );
}

export default CreateStudent;