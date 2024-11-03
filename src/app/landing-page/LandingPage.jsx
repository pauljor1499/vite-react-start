import React from "react";
import { Outlet } from "react-router-dom";

const LandingPage = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
};

export default LandingPage;
