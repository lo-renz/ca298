import MainLayout from "../layout/MainLayout";

import { useState } from "react";

function CreateDegree() {
    const [fullName, setFullName] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:8000/api/degree/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "full_name": fullName,
                "shortcode": shortCode,
            }),
        });
        setFullName("");
        setShortCode("");
        setMessage("Degree created successfully");
    }

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={fullName}
                    placeholder="Name"
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="text"
                    value={shortCode}
                    placeholder="Email"
                    onChange={(e) => setShortCode(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    );
}

export default CreateDegree;