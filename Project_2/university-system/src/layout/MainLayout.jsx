import React from "react";
import MainNavbar from "../components/Navbar";

function MainLayout({children}) {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <br />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout;