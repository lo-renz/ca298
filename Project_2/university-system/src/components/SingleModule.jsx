import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function SingleModule() {
    const { moduleCode } = useParams();
    const [module, setModule] = useState({});
    const [cohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/module/${moduleCode}`)
            .then(response => response.json())
            .then(data => {
                setModule(data)
                setIsLoaded(true)

                const promises = data.delivered_to.map(endpoint => {
                    return fetch(endpoint)
                        .then(response => response.json())
                })

                Promise.all(promises)
                    .then(cohortsData => setCohorts(cohortsData))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error))
    });

    if (isLoaded) {
        return (
            <MainLayout>
                <h3>Module Information:</h3>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{module.full_name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Code: {module.code}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            CA Split: {module.ca_split}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

                <br />

                <h4>Cohorts:</h4>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{module.full_name}</Card.Header>
                    <ListGroup variant="flush">
                        {cohorts.map(cohort => (
                            <ListGroup.Item>
                                {cohort.name}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
                <br />
                <Button variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/modules">Back</Link>
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

export default SingleModule;