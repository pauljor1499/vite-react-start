import React from "react";
import "./ToggleTheme.scss";
import { useThemeToggle } from "@/theme/ThemeContext";
import { MenuItem, Select } from "@mui/material";

const ThemeToggleButton = () => {
    const { themeMode, toggleThemeMode, preset, changePreset } = useThemeToggle();

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div className={themeMode === "light" ? "lightMode" : "darkMode"}>
                <input
                    type="checkbox"
                    className="sr-only"
                    id="darkmode-toggle"
                    onChange={toggleThemeMode}
                    checked={themeMode === "dark"}
                />
                <label htmlFor="darkmode-toggle" className="toggle">
                    <span></span>
                </label>
            </div>
            <Select value={preset} onChange={(e) => changePreset(e.target.value)} style={{ width: 200 }} size="small">
                <MenuItem value="default">Default</MenuItem>
                <MenuItem value="green">Green</MenuItem>
                <MenuItem value="purple">Purple</MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="greenGradient">Green Gradient</MenuItem>
                <MenuItem value="purpleGradient">Purple Gradient</MenuItem>
                <MenuItem value="redGradient">Red Gradient</MenuItem>
            </Select>
        </div>
    );
};

export default ThemeToggleButton;
