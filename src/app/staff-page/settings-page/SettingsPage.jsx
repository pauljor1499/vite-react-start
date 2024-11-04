import { Box, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import React from "react";

const SettingsPage = () => {
    return (
        <Box>
            <AppBar position="relative" color="primary">
                <Toolbar>
                    <Typography variant="h6">Settings</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default SettingsPage;
