import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "@/theme/BaseTheme";
import { colorPresets } from "@/theme/ThemePresets";
import { Box } from "@mui/material";

const ThemeToggleContext = createContext();

export const ThemeToggleProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");
    const [preset, setPreset] = useState("default");

    const theme = useMemo(() => {
        const baseTheme = themeMode === "light" ? lightTheme : darkTheme;
        const presetColors = colorPresets[preset];

        return createTheme({
            ...baseTheme,
            palette: {
                ...baseTheme.palette,
                primary: presetColors.primary,
                secondary: presetColors.secondary,
            },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            color: presetColors.button?.textColor || colorPresets["default"].button.textColor,
                        },
                    },
                },
            },
        });
    }, [themeMode, preset]);

    const toggleThemeMode = () => {
        const newMode = themeMode === "light" ? "dark" : "light";
        setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("themeMode", newMode);
    };

    const changePreset = (newPreset) => {
        setPreset(newPreset);
        localStorage.setItem("themePreset", newPreset);
    };

    useEffect(() => {
        const savedMode = localStorage.getItem("themeMode");
        const savedPreset = localStorage.getItem("themePreset");
        if (savedMode) setThemeMode(savedMode);
        if (savedPreset) setPreset(savedPreset);
    }, []);

    return (
        <ThemeToggleContext.Provider value={{ themeMode, toggleThemeMode, preset, changePreset }}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        transition: "background-color 0.5s ease",
                        bgcolor: "background.default",
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

export const useThemeToggle = () => useContext(ThemeToggleContext);
