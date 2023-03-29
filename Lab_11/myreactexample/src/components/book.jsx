import { useState } from "react";

function Book({id}) {
    const [book, setBook] = useState([]);

    fetch("http://127.0.0.1:8000/api/book/")
    .then(response => response.json())
    .then(data => {
        console.log(data.id)
    })
    .catch(err => console.log(err));

    return (
        <ul>
            <li>
            </li>
        </ul>
    )
}

export default Book;