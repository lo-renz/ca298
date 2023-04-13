import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function SingleDegree() {
    const { degreeCode } = useParams();
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [cohorts, setCohorts] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/degree/${degreeCode}`)
            .then(response => response.json())
            .then(data => {
                setName(data.full_name)
                setCode(data.shortcode)
            })
            .catch(error => console.log(error))

        fetch(`http://127.0.0.1:8000/api/cohort/?degree=${degreeCode}`)
            .then(response => response.json())
            .then(data => {
                setCohorts(data)
            })
            .catch(error => console.log(error))
    });

    const displayDegree = () => {
        return (
            <div>
                <h3>Degree Information:</h3>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            Shortcode: {code}
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        )
    }

    const displayCohorts = () => {
        return (
            cohorts.map(cohort =>
                <div>
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
                    <br />
                </div>
            )
        )
    }

    return (
        <MainLayout>
            <ul>
                {displayDegree()}
                <br></br>
                <h4>Cohorts:</h4>
                {displayCohorts()}

                <Button variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to="/degrees">Back</Link>
                </Button>
            </ul>
        </MainLayout>
    )
}

export default SingleDegree;