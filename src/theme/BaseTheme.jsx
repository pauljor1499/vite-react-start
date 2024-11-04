import { createTheme } from "@mui/material/styles";

const commonSettings = {
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
};

const commonPallete = {
    colorTheme: {
        main: "#0091de",
    },
};

export const lightTheme = createTheme({
    ...commonSettings,
    palette: {
        mode: "light",
        ...commonPallete,
        primary: {
            main: "#3f51b5",
        },
        secondary: {
            main: "#f50057",
        },
        background: {
            default: "#f0f0f0",
            paper: "#ffffff",
        },
    },
});

export const darkTheme = createTheme({
    ...commonSettings,
    palette: {
        mode: "dark",
        ...commonPallete,
        primary: {
            main: "#64b5f6",
        },
        secondary: {
            main: "#f06292",
        },
        background: {
            default: "#08192C",
            paper: "#1f3e61",
        },
        text: {
            primary: "#ffffff",
            secondary: "rgba(255, 255, 255, 0.7)",
        },
    },
});
