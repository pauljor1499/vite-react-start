import React from "react";
import { RouteComponents } from "@/router/index";
import { ThemeContextProvider } from "@/theme/ThemeContext";

const App = () => {
    return (
        <ThemeContextProvider>
            <RouteComponents />
        </ThemeContextProvider>
    );
};

export default App;
