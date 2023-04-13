import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AllCohorts() {
    const [cohorts, setCohorts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
            .then(response => response.json())
            .then(data => {
                setCohorts(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])

    const displayCohorts = () => {
        const filteredCohorts = cohorts.filter(cohort =>
            cohort.id.toLowerCase().includes(searchText.toLowerCase()) ||
            cohort.name.toLowerCase().includes(searchText.toLowerCase())
        )

        return (
            filteredCohorts.map(cohort =>
                <div key={cohort.id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{cohort.name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                ID: {cohort.id}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <br />

                    <Button variant="primary">
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={`/cohort/${cohort.id}`}>View Details</Link>
                    </Button>{' '}
                    <Button variant="primary">
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={`/cohort/${cohort.id}/modules`}>View Modules</Link>
                    </Button>
                    <br /><hr />
                </div>
            )
        )
    }

    if (isLoaded) {
        return (
            <MainLayout>
                <Form.Control
                    type="search"
                    value={searchText}
                    placeholder="Search Cohort"
                    onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayCohorts()}
                </ul>
            </MainLayout>
        )
    }
    else {
        return (
            <MainLayout>
                <img src="loading.gif" alt="loading"></img>
            </MainLayout>
        )
    }
}

export default AllCohorts;