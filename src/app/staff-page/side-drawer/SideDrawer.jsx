import { useEffect, useState } from "react";
import "./SideDrawer.scss";
// import { _userLogout } from "../../../../store/slices/auth/UserAuth";
import { useDispatch, useSelector } from "react-redux";
import YesNoOption from "@/app/util/dialogs/YesNoOption";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import StarIcon from "@mui/icons-material/Star";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Avatar, Button, Typography, useMediaQuery } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useTheme } from "@mui/material/styles";
import { screenSizes } from "@/theme/screenSizes";
import { blue } from "@mui/material/colors";
// import useTeacherFeatureFlag from "../../../commons/custom_hooks/teacher_feature_flag/TeacherFeatureFlag";
import { useSnackbar } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import LOGO from "@/assets/LOGO.png";

const sideDrawerItems = [
    {
        text: "Dashboard",
        path: "/staff",
        icon: <DashboardIcon />,
    },
    {
        text: "Question Bank",
        path: "/staff/question-bank",
        icon: <StarIcon />,
    },
    {
        text: "Resources",
        path: "/staff/resources",
        icon: <ListAltIcon />,
    },
    {
        text: "Settings",
        path: "/staff/settings",
        icon: <StorageIcon />,
    },
    // {
    //     text: "Settings",
    //     path: "/teacher/settings",
    //     icon: <SettingsIcon />,
    // },
    // {
    //     text: "Feature Flags",
    //     path: "/teacher/features",
    //     icon: <StarIcon />,
    // },
];

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const AllBlackTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

export default function SideDrawer({ children }) {
    const { staffData } = useSelector((state) => state.StaffData);
    const tabletSize = useMediaQuery(`(max-width:${screenSizes.tablet}px)`);

    useEffect(() => {
        if (tabletSize) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [tabletSize]);

    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const pathname = location.pathname;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [openDrawer, setOpen] = useState(true);
    const [showYesNoOption, setShowYesNoOption] = useState(false);

    const handleDrawerClose = () => {
        setOpen(!openDrawer);
    };

    useEffect(() => {
        if (
            pathname === "/staff" ||
            pathname === "/staff/question-bank" ||
            pathname === "/staff/resources" ||
            pathname === "/staff/settings"
        ) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [pathname]);

    const handleLogout = () => {
        // dispatch(_userLogout());
        navigate("/");
        enqueueSnackbar("Successfully logout", {
            variant: "success",
            action: (key) => (
                <IconButton size="small" color="inherit" onClick={() => closeSnackbar(key)}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            ),
        });
    };

    return (
        <>
            <YesNoOption
                title="Confirm Logout"
                message="Do you want to logout?"
                showDialog={showYesNoOption}
                clickNo={setShowYesNoOption}
                clickYes={handleLogout}
            />
            <div className="staff-sidedrawer-content">
                <Box sx={{ display: "flex" }}>
                    <Drawer variant="permanent" open={openDrawer}>
                        <DrawerHeader>
                            {openDrawer && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <img src={LOGO} alt="logo" style={{ width: "40px", paddingRight: 10 }} />
                                    <Typography
                                        variant="body1"
                                        noWrap
                                        color="primary"
                                        sx={{
                                            display: { fontWeight: 700, letterSpacing: "3px" },
                                            margin: "auto",
                                        }}
                                    >
                                        EruditionTX
                                    </Typography>
                                </Box>
                            )}
                            {!tabletSize && (
                                <IconButton onClick={handleDrawerClose}>
                                    {!openDrawer ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                </IconButton>
                            )}
                        </DrawerHeader>
                        <Divider />
                        <List sx={{ p: 0 }}>
                            {openDrawer
                                ? staffData && (
                                      <div className="drawer-profile">
                                          {staffData.profile_picture ? (
                                              <img
                                                  src={`${staffData.profile_picture}?${new Date().getTime()}`}
                                                  alt=""
                                                  style={{
                                                      width: "3.5rem",
                                                      height: "3.5rem",
                                                      objectFit: "cover",
                                                      borderRadius: "50%",
                                                  }}
                                              />
                                          ) : (
                                              <Avatar sx={{ width: 45, height: 45, bgcolor: blue[600] }}>
                                                  {staffData.first_name.charAt(0) + staffData.last_name.charAt(0)}
                                              </Avatar>
                                          )}
                                          <div className="profile-details">
                                              <span>{staffData.email}</span>
                                              <span>Staff</span>
                                          </div>
                                          <Button
                                              variant="outlined"
                                              color="primary"
                                              size="small"
                                              fullWidth
                                              onClick={() => {
                                                  navigate("/staff/settings");
                                              }}
                                          >
                                              View Profile
                                          </Button>
                                      </div>
                                  )
                                : staffData && (
                                      <ListItem disablePadding sx={{ display: "block" }}>
                                          <AllBlackTooltip placement="right" title="View Profile">
                                              <ListItemButton
                                                  sx={{
                                                      minHeight: 48,
                                                      justifyContent: openDrawer ? "initial" : "center",
                                                      px: 2.5,
                                                  }}
                                                  selected={"/staff/profile" === location.pathname}
                                                  onClick={() => {
                                                      navigate("/staff/settings");
                                                  }}
                                              >
                                                  <ListItemIcon
                                                      sx={{
                                                          minWidth: 0,
                                                          mr: openDrawer ? 3 : "auto",
                                                          justifyContent: "center",
                                                      }}
                                                  >
                                                      <PersonIcon />
                                                  </ListItemIcon>
                                              </ListItemButton>
                                          </AllBlackTooltip>
                                      </ListItem>
                                  )}
                            <Divider />
                            {sideDrawerItems.map((item, index) => (
                                <ListItem key={index} disablePadding sx={{ display: "block" }}>
                                    <AllBlackTooltip placement="right" title={openDrawer ? "" : item.text}>
                                        <ListItemButton
                                            className="list-button"
                                            sx={{
                                                minHeight: 48,
                                                justifyContent: openDrawer ? "initial" : "center",
                                                px: 2.5,
                                            }}
                                            selected={item.path === location.pathname}
                                            onClick={() => {
                                                navigate(`${item.path}`);
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    minWidth: 0,
                                                    mr: openDrawer ? 3 : "auto",
                                                    justifyContent: "center",
                                                    color:
                                                        item.path === location.pathname
                                                            ? theme.palette.primary.main
                                                            : "",
                                                }}
                                            >
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                sx={{
                                                    opacity: openDrawer ? 1 : 0,
                                                    color:
                                                        item.path === location.pathname
                                                            ? theme.palette.primary.main
                                                            : "",
                                                }}
                                            >
                                                {item.text}
                                            </ListItemText>
                                        </ListItemButton>
                                    </AllBlackTooltip>
                                </ListItem>
                            ))}
                            <Divider />
                            <ListItem disablePadding sx={{ display: "block" }}>
                                <AllBlackTooltip placement="right" title={openDrawer ? "" : "Logout"}>
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: openDrawer ? "initial" : "center",
                                            px: 2.5,
                                        }}
                                        onClick={() => {
                                            setShowYesNoOption(true);
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: openDrawer ? 3 : "auto",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <ExitToAppIcon />
                                        </ListItemIcon>
                                        <ListItemText sx={{ opacity: openDrawer ? 1 : 0 }}>Logout</ListItemText>
                                    </ListItemButton>
                                </AllBlackTooltip>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Box width="100%">{children}</Box>
                </Box>
            </div>
        </>
    );
}
