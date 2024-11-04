import React from "react";
import { RouteComponents } from "@/router/index";
import { ThemeToggleProvider } from "@/theme/ThemeContext";
import { Provider } from "react-redux";
import { Store } from "@/store/Store";
import { SnackbarProvider } from "notistack";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
    return (
        <Provider store={Store}>
            <SnackbarProvider
                autoHideDuration={3000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                maxSnack={3}
            >
                <ThemeToggleProvider>
                    <CssBaseline />
                    <RouteComponents />
                </ThemeToggleProvider>
            </SnackbarProvider>
        </Provider>
    );
};

export default App;
