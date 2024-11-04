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
import { Link as ReactRouterLink } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <Box sx={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
                            <TextField variant="outlined" color="primary" label="First name" required />
                            <TextField variant="outlined" color="primary" label="Midele name" />
                            <TextField variant="outlined" color="primary" label="Last name" required />
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
                            <Button variant="contained">Sign Up</Button>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                            >
                                <Typography variant="body2">Alreay have an account?</Typography>
                                <Link component={ReactRouterLink} to="/login">
                                    <Typography variant="body2" color="primary">
                                        Login an account
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default LoginPage;
