import { useState, useEffect } from "react";

function AllDegrees() {
    const [degrees, setDegrees] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/degree/")
        .then(response => response.json())
        .then(data => {
            setDegrees(data.map(e => e.full_name))
            setIsLoaded(true)
        })
        .catch(error => console.log(error))
    })

    const displayDegrees = () => {
        return (
            degrees.map(elem =>
                <li key={elem.shortcode}>{elem}</li>
            )
        )
    }

    if(isLoaded) {
        return (
            <ul>
                <h3>A list of all degrees</h3>
                {displayDegrees()}
            </ul>
        )
    }
    else {
        return (
            <img src="loading.gif" alt="loading" />
        )
    }
}

export default AllDegrees;