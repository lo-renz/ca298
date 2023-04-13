import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AllModules() {
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/module/")
            .then(response => response.json())
            .then(data => {
                setModules(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, []);

    const displayModules = () => {
        const filteredModules = modules.filter(module =>
            module.code.toLowerCase().includes(searchText.toLowerCase()) ||
            module.full_name.toLowerCase().includes(searchText.toLowerCase())
        );

        return filteredModules.map(module => (
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

                <Button variant="primary">
                    <Link style={{ color: 'white', textDecoration: 'none' }} to={`/module/${module.code}`}>View Details</Link>
                </Button>
                <br /> <hr />
            </div>
        ));
    };

    if (isLoaded) {
        return (
            <MainLayout>
                <Form.Control
                    type="search"
                    value={searchText}
                    placeholder="Search Module"
                    onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayModules()}
                </ul>
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

export default AllModules;