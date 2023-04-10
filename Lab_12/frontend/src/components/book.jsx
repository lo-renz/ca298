import { useState, useEffect } from "react";

function Book({id}) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [quantity, setQuantity] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/book/" + id + "/")
        .then(response => response.json())
        .then(data => {
            setTitle(data.title)
            setAuthor(data.author)
            setGenre(data.genre)
            setReleaseYear(data.release_year)
            setQuantity(data.quantity)
            setIsLoaded(true)
        })
        .catch(err => console.log(err))
    })

    if(isLoaded) {
        return (
            <ul>
                <li><p>Title: {title}</p></li>
                <li><p>Author: {author}</p></li>
                <li><p>Genre: {genre}</p></li>
                <li><p>Release year: {releaseYear}</p></li>
                <li><p>Quantity: {quantity}</p></li>
            </ul>
        )
    }
    else {
        return (
            <img src="loading.gif" alt="loading" />
        )
    }

}

export default Book;