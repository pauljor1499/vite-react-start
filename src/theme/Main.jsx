import { createTheme } from "@mui/material/styles";

let color = {
    primary: "#1976d2",
    secondary: "#5d9edf",

    white: "#ffff",
    white200: "#ecf2f6",

    gray: "#808080",
};

const getTheme = (mode) => {
    const themeMode = mode || "light";

    return createTheme({
        palette: {
            themeMode,
            primary: {
                main: color.primary,
            },
            secondary: {
                main: color.secondary,
            },
            inherit: {
                main: color.gray,
            },
            ...(themeMode === "light" && {
                background: {
                    default: "#f5f5f5",
                    paper: color.white,
                },
            }),
            ...(themeMode === "dark" && {
                background: {
                    default: "#08192C",
                    paper: "#08192C",
                },
                text: {
                    primary: color.white,
                    secondary: color.white200,
                },
            }),
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        },
        spacing: 8,
        components: {
            MuiTextField: {
                styleOverrides: getTextFieldStyles(themeMode),
            },
            MuiFormControl: {
                styleOverrides: getTextFieldStyles(themeMode),
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: "2.5px",
                    },
                    primary: {
                        backgroundColor: color.primary,
                        color: color.white,
                        "&:hover": {
                            backgroundColor: "#1565c0",
                        },
                    },
                    secondary: {
                        backgroundColor: color.secondary,
                        color: color.white,
                        "&:hover": {
                            backgroundColor: "#c51162",
                        },
                    },
                    inherit: {
                        backgroundColor: color.inherit,
                        color: color.white,
                        "&:hover": {
                            backgroundColor: "#6e6e6e",
                        },
                    },
                },
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
            MuiSvgIcon: {
                styleOverrides: getIconStyles(themeMode),
            },
        },
    });
};

const getTextFieldStyles = (themeMode) => ({
    root: {
        ...(themeMode === "dark" && {
            backgroundColor: "#1c2a3a",
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: "#ffff",
                },
                "&:hover fieldset": {
                    borderColor: "#ffff",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#ffff",
                },
                "& input": {
                    color: "#ffff",
                },
            },
            "& .MuiInputLabel-root": {
                color: "#b0b0b0",
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: "#ffff",
            },
        }),
    },
});

const getPaperStyles = (themeMode) => {
    return {
        root: {
            ...(themeMode === "dark" && {
                border: ".5px solid white",
            }),
        },
    };
};

const getIconStyles = (themeMode) => {
    return {
        root: {
            ...(themeMode === "dark" && {
                color: color.white,
            }),
        },
    };
};

export default getTheme;
