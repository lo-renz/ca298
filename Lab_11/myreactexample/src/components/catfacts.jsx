import { useState, useEffect } from "react";

function CatFacts() {
    const [facts, setFacts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://cat-fact.herokuapp.com/facts")
        .then(response => response.json())
        .then(data => {
            setFacts(data.map(e => e.text)) // get the array of text out and set it as our state
            setIsLoaded(true);
        })
        .catch(err => console.log(err))
    })

    const displayFacts = () => {
        return (
            facts.map(elem => 
                <li>{elem}</li>
            )
        )
    }

    if(isLoaded) {
        return (
            <ul>
                {displayFacts()}
            </ul>
        )
    }
    else {
        return (
            <img src="loading.gif" alt="Loading"/>
        )
    }
}

export default CatFacts;