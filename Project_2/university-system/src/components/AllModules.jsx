import MainLayout from "../layout/MainLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AllModules() {
    const [modules, setModules] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/module/")
            .then(response => response.json())
            .then(data => {
                setModules(data)
                setIsLoaded(true)
            })
            .catch(error => console.log(error))
    }, []);

    const displayModules = () => {
        const filteredModules = modules.filter(module =>
            module.code.toLowerCase().includes(searchText.toLowerCase()) ||
            module.full_name.toLowerCase().includes(searchText.toLowerCase())
        );

        return filteredModules.map(module => (
            <div key={module.code}>
                <h2>{module.full_name} ({module.code})</h2>
                <button>
                    <Link to={`/module/${module.code}`}>View Details</Link>
                </button>
                <hr />
            </div>
        ));
    };

    if (isLoaded) {
        return (
            <MainLayout>
                <input
                    type="text"
                    value={searchText}
                    placeholder="Search Module"
                    onChange={e => setSearchText(e.target.value)}
                />
                <br />
                <ul>
                    {displayModules()}
                </ul>
            </MainLayout>
        )
    } else {
        return (
            <MainLayout>
                <img src="loading.gif" alt="loading"></img>
            </MainLayout>
        )
    }
}

export default AllModules;