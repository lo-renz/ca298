import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
            <Form.Select value={degree} onChange={(e) => setDegree(e.target.value)}>
                <option value="">Select a degree</option>
                {degrees.map((degree) => (
                    <option key={degree.shortcode} value={`http://127.0.0.1:8000/api/degree/${degree.shortcode}/`}>
                        {degree.full_name}
                    </option>
                ))}
            </Form.Select>
        );
    };

    return (
        <MainLayout>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCohortId">
                        <Form.Label>Cohort ID</Form.Label>
                        <Form.Control
                            type="text"
                            value={cohortId}
                            placeholder="Enter Cohort ID"
                            onChange={(e) => setCohortId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label>Cohort Year</Form.Label>
                        <Form.Control
                            type="number"
                            value={year}
                            placeholder="Enter Cohort Year"
                            onChange={(e) => setYear(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridDegree">

                        <Form.Label>Degree</Form.Label>
                        {displayDegrees()}
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

export default CreateCohort;