import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import useLoginStore from "../store/loginStore";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
    const { getLoginInfo } = useLoginStore();
    const loggedUserInfo = getLoginInfo("65623505c762eedb195f025d");
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const drawerContent = (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <ListItem component={Link} to="/home">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={Link} to="/create-list">
                    <ListItemText primary="Create a new list" />
                </ListItem>
                <ListItem component={Link} to="/logout">
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", minHeight: "100%", bgcolor: "grey.200" }}>
            <AppBar component="nav">
                <Toolbar>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexGrow: 1,
                            gap: 1,
                        }}
                    >
                        {isMobile ? (
                            <IconButton
                                color="inherit"
                                onClick={toggleDrawer(true)}
                                sx={{ marginRight: 1 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <ShoppingBasketIcon style={{ color: "white" }} />
                        )}

                        <Typography variant="h6" component="span">
                            Shopping lists
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            style={{ backgroundColor: "white" }}
                            sx={{ borderRightWidth: 2 }}
                        />
                        <Typography variant="h6" component="span">
                            Logged as {loggedUserInfo.name}
                        </Typography>
                    </Box>

                    {isMobile ? null : (
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <Button
                                to="/home"
                                component={Link}
                                color="inherit"
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    borderColor: "white",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "#1976d2",
                                    },
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                to="/create-list"
                                component={Link}
                                color="inherit"
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    borderColor: "white",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "#1976d2",
                                    },
                                }}
                            >
                                Create a new list
                            </Button>
                            <Button
                                to="/logout"
                                component={Link}
                                color="inherit"
                                variant="outlined"
                                sx={{
                                    color: "white",
                                    borderColor: "white",
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "#1976d2",
                                    },
                                }}
                            >
                                Logout
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <SwipeableDrawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {drawerContent}
            </SwipeableDrawer>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    p: 3,
                }}
            >
                <Toolbar />
                <Box sx={{ flex: "auto" }}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;
