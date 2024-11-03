import React from "react";
import { Box } from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import { useTheme } from "@/theme/ThemeContext"; // Adjust the path as needed
import "./ToggleTheme.scss"; // Import the CSS file

const ThemeSwitch = () => {
    const { toggleTheme, themeMode } = useTheme();

    return (
        <div className={`${themeMode == "light" ? "lightMode" : "darkMode"}`}>
            <input type="checkbox" className="sr-only" id="darkmode-toggle" onClick={toggleTheme} />
            <label htmlFor="darkmode-toggle" className="toggle">
                <span></span>
            </label>
        </div>
    );
};

export default ThemeSwitch;
