import React from "react";
import MainNavbar from "../components/Navbar";

function MainLayout({children}) {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <hr></hr>
            <div>{children}</div>
        </div>
    )
}

export default MainLayout;