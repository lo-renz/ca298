import { useState, useEffect } from "react";

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/book/")
        .then(response => response.json())
        .then(data => {
            setBooks(data.map(e => e.title)) // get the array of titles out and set it as our state
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

    return (
        <ul>
            {displayBooks()}
        </ul>
    )
}

export default BookList;