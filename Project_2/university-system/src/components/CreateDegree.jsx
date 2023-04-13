import MainLayout from "../layout/MainLayout";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CreateDegree() {
    const [fullName, setFullName] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/degree/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "full_name": fullName,
                "shortcode": shortCode,
            }),
        });

        const data = await response.json();
        console.log(data);

        setFullName("");
        setShortCode("");
        setMessage("Degree created successfully");
    }

    return (
        <MainLayout>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Degree Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={fullName}
                            placeholder="Enter Degree Name"
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridShortcode">
                        <Form.Label>Degree Shortcode</Form.Label>
                        <Form.Control
                            type="text"
                            value={shortCode}
                            placeholder="Enter Degree Shortcode"
                            onChange={(e) => setShortCode(e.target.value)}
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

export default CreateDegree;