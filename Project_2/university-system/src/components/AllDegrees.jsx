import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SingleDegree from "./SingleDegree";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AllDegrees() {
    const [degrees, setDegrees] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/degree/")
            .then(response => response.json())
            .then(data => {
                setDegrees(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, [])

    const displayDegrees = () => {
        const filteredDegrees = degrees.filter(degree =>
            degree.full_name.toLowerCase().includes(searchText.toLowerCase()) ||
            degree.shortcode.toLowerCase().includes(searchText.toLowerCase())
        )

        return (
            filteredDegrees.map(degree =>
                <div key={degree.shortcode}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{degree.full_name}</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                Shortcode: {degree.shortcode}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <br />

                    <Button variant="primary">
                        <Link style={{ color: 'white', textDecoration: 'none' }} to={`/degree/${degree.shortcode}`}>Show Details</Link>
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
                    placeholder="Search Degree"
                    onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayDegrees()}
                </ul>
                <Routes>
                    <Route path="/degree/:shortCode" component={SingleDegree} />
                </Routes>
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

export default AllDegrees;