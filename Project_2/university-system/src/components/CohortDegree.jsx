import { useState, useEffect } from "react";

function CohortDegree({ link }) {
    const [degreeName, setDegreeName] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(link)
        .then(response => response.json())
        .then(data => {
            setDegreeName(data.full_name);
            setIsLoaded(true);
        })
        .catch(error => console.log(error))
    }, [])

    if (isLoaded) {
        return (
            <p>
                Degree: {degreeName}
            </p>
        );
    } else {
        return (
            <img src="loading.gif" alt="loading" />
        );
    }
}

export default CohortDegree;