import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";

function CreateModule() {
    const [moduleCode, setModuleCode] = useState("");
    const [moduleName, setModuleName] = useState("");
    const [deliveredTo, setDeliveredTo] = useState("");
    const [caSplit, setCaSplit] = useState("");
    const [cohorts, setCohorts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/cohort/")
            .then((response) => response.json())
            .then((data) => setCohorts(data))
            .catch((error) => console.log(error))
    }, []);

    let handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://127.0.0.1:8000/api/module/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "code": moduleCode,
                "full_name": moduleName,
                "delivered_to": [deliveredTo],
                "ca_split": caSplit,
            }),
        });

        const data = await response.json();
        console.log(data);

        setModuleCode("");
        setModuleName("");
        setDeliveredTo([]);
        setCaSplit("");
        setMessage("Module created successfully");
    };


    const displayCohorts = () => {
        return (
            <select value={deliveredTo} onChange={(e) => setDeliveredTo(e.target.value)}>
                <option value="">Select a cohort</option>
                {cohorts.map((cohort) => (
                    <option key={cohort.id} value={`http://127.0.0.1:8000/api/cohort/${cohort.id}/`}>
                        {cohort.id}
                    </option>
                ))}
            </select>
        );
    };

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                <label>Code</label>
                <input
                    type="text"
                    value={moduleCode}
                    placeholder="Enter module code"
                    onChange={(e) => setModuleCode(e.target.value)}
                />

                <label>Full Name</label>
                <input
                    type="text"
                    value={moduleName}
                    placeholder="Enter module name"
                    onChange={(e) => setModuleName(e.target.value)}
                />

                <label>Delivered To</label>
                {displayCohorts()}

                <label>CA Split</label>
                <input
                    type="number"
                    value={caSplit}
                    placeholder="Enter CA split"
                    onChange={(e) => setCaSplit(e.target.value)}
                />

                <button type="submit">Create</button>

                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </MainLayout>
    );
}

export default CreateModule;