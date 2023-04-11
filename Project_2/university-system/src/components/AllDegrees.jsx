import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom"; // Import Link and Route from react-router-dom
import SingleDegree from "./SingleDegree";

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
    }, []) // Add an empty dependency array to prevent infinite loops

    const displayDegrees = () => {
        const filteredDegrees = degrees.filter(degree =>
            degree.full_name.toLowerCase().includes(searchText.toLowerCase()) ||
            degree.shortcode.toLowerCase().includes(searchText.toLowerCase())
        )

        return (
            filteredDegrees.map(elem =>
                <div key={elem.shortcode}>
                    <h2>{elem.full_name}</h2>
                    <p>Shortcode: {elem.shortcode}</p>
                    <Link to={`/degree/${elem.shortcode}`}><button>Show Details</button></Link>
                    <hr />
                </div>
            )
        )
    }

    if(isLoaded) {
        return (
            <MainLayout>
                <input
                type="text"
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