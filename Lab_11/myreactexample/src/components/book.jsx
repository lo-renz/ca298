import { useState, useEffect } from "react";

function Book({bookid}) {
    const [book, setBook] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/book/")
        .then(response => response.json())
        .then(books => {
            const book = books.filter(single_book => single_book.id === bookid)
            console.log(book);
        })
        .catch(err => console.log(err))
    })

    const displayBook = () => {
        return (
            book.map(elem =>
                <li>{elem}</li>
            )
        )
    }

    return (
        <ul>
            {displayBook()}
        </ul>
    )
}

export default Book;