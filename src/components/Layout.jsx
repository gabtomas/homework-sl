import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";
import { CssBaseline, Divider } from "@mui/material";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import useLoginStore from "../store/loginStore";

function Layout() {
    const { getRole, switchRole } = useLoginStore();
    const loggedUser = getRole();

    return (
        <Box sx={{ display: "flex", minHeight: "100%", bgcolor: "grey.200" }}>
            <CssBaseline />
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
                        <ShoppingBasketIcon style={{ color: "white" }} />

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
                            Logged as {loggedUser}
                        </Typography>
                        <Divider
                            orientation="vertical"
                            flexItem
                            style={{ backgroundColor: "white" }}
                            sx={{ borderRightWidth: 2 }}
                        />
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={switchRole}
                        >
                            Switch role
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/home"
                            color="inherit"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "white",
                                    color: "#1976d2",
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/create-list"
                            color="inherit"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "white",
                                    color: "#1976d2",
                                },
                            }}
                        >
                            Create a new list
                        </Button>
                        <Button
                            variant="outlined"
                            component={Link}
                            color="inherit"
                            sx={{
                                "&:hover": {
                                    backgroundColor: "white",
                                    color: "#1976d2",
                                },
                            }}
                        >
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
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
