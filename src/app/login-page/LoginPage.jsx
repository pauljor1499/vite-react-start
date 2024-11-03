import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@/theme/ThemeContext";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import ThemeSwitch from "@/app/util/toggle-theme/ToggleTheme";

const LoginPage = () => {
    const { toggleTheme, themeMode } = useTheme();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    return (
        <Box sx={{ width: "100%", height: "100vh" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", p: 2 }}>
                {/* <IconButton onClick={toggleTheme} color="inherit">
                    {themeMode == "light" ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton> */}
                <ThemeSwitch />
            </Box>
            <Box sx={{ height: "80%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box sx={{ width: 500 }}>
                    <Paper>
                        <Box sx={{ p: 5 }}>
                            <Stack direction="column" spacing={3}>
                                <Box>
                                    <Typography variant="h6">Login</Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Please sign-in to your account and start your learning.
                                    </Typography>
                                </Box>
                                <TextField variant="outlined" color="primary" label="Email" required />
                                <FormControl
                                    fullWidth
                                    required
                                    // error={touched.password && Boolean(errors.password)}
                                >
                                    <InputLabel>Password</InputLabel>
                                    <OutlinedInput
                                        name="password"
                                        label="password"
                                        // value={values.password}
                                        // onChange={handleChange}
                                        // onBlur={handleBlur}
                                        type={showPassword ? "text" : "password"}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    // color={touched.password && Boolean(errors.password) ? "error" : ""}
                                                    aria-label="toggle password visibility"
                                                    onClick={() => {
                                                        setShowPassword((show) => !show);
                                                    }}
                                                    onMouseDown={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    onMouseUp={(e) => {
                                                        e.preventDefault();
                                                    }}
                                                    edge="end"
                                                >
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <FormHelperText>{/* {touched.password && errors.password} */}</FormHelperText>
                                </FormControl>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <Box></Box>
                                    <Link component={ReactRouterLink} to="/forgot">
                                        <Typography variant="body2" color="primary">
                                            Forgot Password?
                                        </Typography>
                                    </Link>
                                </Box>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        navigate("/staff");
                                    }}
                                >
                                    Login
                                </Button>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                                >
                                    <Typography variant="body2">Don't have an account?</Typography>
                                    <Link component={ReactRouterLink} to="/register">
                                        <Typography variant="body2" color="primary">
                                            Create an account
                                        </Typography>
                                    </Link>
                                </Stack>
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
