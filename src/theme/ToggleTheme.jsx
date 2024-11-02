import React, { createContext, useContext, useState } from "react";
import getTheme from "@/theme/Main";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, themeMode }}>
            <ThemeProvider theme={getTheme(themeMode)}>
                <Box
                    sx={{
                        transition: "background-color 0.5s ease",
                        bgcolor: "background.default",
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
