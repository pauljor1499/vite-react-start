import React from "react";
import { Outlet } from "react-router-dom";
import SideDrawer from "./side-drawer/SideDrawer";

const StaffPage = () => {
    return <SideDrawer children={<Outlet />} />;
};

export default StaffPage;
