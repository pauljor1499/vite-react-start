import { createTheme } from "@mui/material/styles";

const getTheme = (mode) => {
    const themeMode = mode || "light";

    return createTheme({
        palette: {
            themeMode,
            ...(themeMode === "light" && {
                primary: {
                    main: "#1976d2",
                },
                secondary: {
                    main: "#dc004e",
                },
                background: {
                    default: "#f5f5f5",
                    paper: "#ffffff",
                },
                text: {
                    primary: "#333333",
                    secondary: "#666666",
                },
            }),
            ...(themeMode === "dark" && {
                primary: {
                    main: "#ffff",
                },
                secondary: {
                    main: "#fefefe",
                },
                background: {
                    default: "#08192C",
                    paper: "#08192C",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#b0b0b0",
                },
            }),
            ...(themeMode === "orange" && {
                background: {
                    default: "#ffccbc",
                    paper: "#ffab40",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#b0b0b0",
                },
            }),
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        spacing: 8,
        components: {
            MuiButton: {
                styleOverrides: getButtonStyles(themeMode),
            },
            MuiPaper: {
                styleOverrides: getPaperStyles(themeMode),
            },
            MuiTypography: {
                styleOverrides: {
                    h1: {
                        marginBottom: "16px",
                    },
                },
            },
        },
    });
};

const getButtonStyles = (themeMode) => {
    return {
        root: {
            borderRadius: "8px",
            ...(themeMode === "light" && {
                backgroundColor: "#1976d2",
                color: "#ffffff",
                "&:hover": {
                    backgroundColor: "#1565c0",
                },
            }),
            ...(themeMode === "dark" && {
                backgroundColor: "#08192C",
                color: "#ffffff",
                border: ".5px solid white",
                "&:hover": {
                    backgroundColor: "#394656",
                },
            }),
            ...(themeMode === "orange" && {
                backgroundColor: "#ff9800",
                color: "#ffffff",
                "&:hover": {
                    backgroundColor: "#e68a00",
                },
            }),
        },
    };
};

const getPaperStyles = (themeMode) => {
    return {
        root: {
            ...(themeMode === "dark" && {
                border: ".5px solid white",
            }),
        },
    };
};

export default getTheme;
