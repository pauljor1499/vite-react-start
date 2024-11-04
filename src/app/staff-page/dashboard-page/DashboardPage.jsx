import { Box, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";
import ThemeSwitch from "@/app/util/toggle-theme/ToggleTheme";

const DashboardPage = () => {
    return (
        <Box>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6">Dashboard</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <ThemeSwitch />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default DashboardPage;
