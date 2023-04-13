import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function CreateModule() {
    const [moduleCode, setModuleCode] = useState("");
    const [moduleName, setModuleName] = useState("");
    const [deliveredTo, setDeliveredTo] = useState("");
    const [caSplit, setCaSplit] = useState("");
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

        const response = await fetch("http://127.0.0.1:8000/api/module/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": moduleCode,
                "full_name": moduleName,
                "delivered_to": [deliveredTo],
                "ca_split": caSplit,
            }),
        });

        const data = await response.json();
        console.log(data);

        setModuleCode("");
        setModuleName("");
        setDeliveredTo([]);
        setCaSplit("");
        setMessage("Module created successfully");
    };


    const displayCohorts = () => {
        return (
            <Form.Select value={deliveredTo} onChange={(e) => setDeliveredTo(e.target.value)}>
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
                    <Form.Group as={Col} controlId="formGridCode">
                        <Form.Label>Module Code</Form.Label>
                        <Form.Control
                            type="text"
                            value={moduleCode}
                            placeholder="Enter Module Code"
                            onChange={(e) => setModuleCode(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            value={moduleName}
                            placeholder="Enter Module Name"
                            onChange={(e) => setModuleName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridDeliveredTo">

                        <Form.Label>Delivered To</Form.Label>
                        {displayCohorts()}
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} controlId="formGridCaSplit">
                        <Form.Label>CA Split</Form.Label>
                        <Form.Control
                            type="number"
                            value={caSplit}
                            placeholder="Enter CA Split"
                            onChange={(e) => setCaSplit(e.target.value)}
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

export default CreateModule;