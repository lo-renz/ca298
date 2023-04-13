import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function CohortModules() {
    const { cohortCode } = useParams();
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/?delivered_to=${cohortCode}`)
            .then(response => response.json())
            .then(data => {
                setModules(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error));
    });

    const displayModules = () => {
        return (
            modules.map(module =>
                <div key={module.code}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{module.full_name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                Code: {module.code}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                    <br />
                </div>
            )
        )
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <h3>Modules delivered to {cohortCode}</h3>
                {displayModules()}

                <Button variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/cohorts">Back</Link>
                </Button>
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <img src="loading.gif" alt="loading"></img>
            </MainLayout>
        )
    }
}

export default CohortModules;