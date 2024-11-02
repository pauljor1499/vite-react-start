import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@/theme/ToggleTheme";

const LoginPage = () => {
    const { toggleTheme, themeMode } = useTheme();

    return (
        <Box sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Box sx={{ width: 500 }}>
                <Paper>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="body1" color="primary">
                            Login
                        </Typography>
                    </Box>
                </Paper>
                <Button variant="contained" onClick={toggleTheme}>
                    {themeMode}
                </Button>
            </Box>
        </Box>
    );
};

export default LoginPage;
