import './App.css';
import MainLayout from './layout/MainLayout';
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function App() {
    return (
        <MainLayout>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>University Registration</Card.Title>
                    <Card.Text>
                        Look around and check out the different courses we have to offer!
                    </Card.Text>
                    <Button as={Link} to="/degrees" variant="primary">Check out the degrees</Button>
                </Card.Body>
            </Card>

            <br />

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/combus.webp"
                        width="800"
                        height="900"
                        alt="first slide"
                    />
                    <Carousel.Caption>
                        <Card classname="text-center">
                            <Card.Body>
                                <Card.Title style={{ color: "black" }}>Computing for Business</Card.Title>
                                <Button as={Link} to="degree/COMBUS" variant="primary">Check out this degree!</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        classname="d-block w-100"
                        src="/comsci.webp"
                        width="1500"
                        height="900"
                        alt="second slide"
                    />
                    <Carousel.Caption>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title style={{ color: "black" }}>Computer Science</Card.Title>
                                <Button as={Link} to="degree/COMSCI" variant="primary">Check out this degree!</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/ds.webp"
                        width="800"
                        height="900"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title style={{ color: "black" }}>Data Science</Card.Title>
                                <Button as={Link} to="degree/DS" variant="primary">Check out this degree!</Button>
                            </Card.Body>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </MainLayout>
    );
}

export default App;

// combus: https://pixabay.com/illustrations/startup-cloud-computing-business-7374154/
// comsci: https://negativespace.co/motherboard-circuits-close-up/
// ds: https://altimetrikpoland.medium.com/high-performance-computing-hpc-in-data-science-nowadays-26a0535e71ca