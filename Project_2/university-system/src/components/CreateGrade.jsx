import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
                    <Form.Group as={Col} controlId="formGridModule">
                        <Form.Label>Module</Form.Label>
                        <Form.Control
                            type="text"
                            value={module}
                            placeholder="Enter Module Code"
                            onChange={(e) => setModule(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridCaMark">
                        <Form.Label>CA Mark</Form.Label>
                        <Form.Control
                            type="number"
                            value={caMark}
                            placeholder="Enter CA Mark"
                            onChange={(e) => setCAMark(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridExamMark">
                        <Form.Label>Exam Mark</Form.Label>
                        <Form.Control
                            type="number"
                            value={examMark}
                            placeholder="Enter Exam Mark"
                            onChange={(e) => setExamMark(e.target.value)}
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

                <Row>
                    <Form.Group as={Col} controlId="formGridStudent">
                        <Form.Label>Student</Form.Label>
                        <Form.Control
                            type="text"
                            value={student}
                            placeholder="Enter Student ID"
                            onChange={(e) => setStudent(e.target.value)}
                        />
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

export default CreateGrade;