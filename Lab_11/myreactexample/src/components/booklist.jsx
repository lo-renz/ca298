import { useState, useEffect } from "react";

function BookList() {
    const [books, setBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/book/")
        .then(response => response.json())
        .then(data => {
            setBooks(data.map(e => e.title)) // get the array of titles out and set it as our state
            setIsLoaded(true)
        })
        .catch(err => console.log(err))
    })

    const displayBooks = () => {
        return (
            books.map(elem =>
                <li key={elem.id}>{elem}</li>
            )
        )
    }

    if(isLoaded) {
        return (
            <ul>
                {displayBooks()}
            </ul>
        )
    }
    else {
        return (
            <img src="loading.gif" alt="loading" />
        )
    }

}

export default BookList;