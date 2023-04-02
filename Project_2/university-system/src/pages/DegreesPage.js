import React from "react";
import MainLayout from "../layout/MainLayout";
// import components here
import AllDegrees from "../components/AllDegrees";

function DegreesPage() {
    return (
        <MainLayout>
            <div>Degrees Page</div>
            <AllDegrees />
        </MainLayout>
    )
}

export default DegreesPage;