import { Button, Grid } from "@mui/material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShoppingListTable } from "./ShoppingListTable";
import { ShoppingListItemForm } from "./ShoppingListItemForm";
import { ManageOwner } from "./ManageOwner";
import { ManageUsers } from "./ManageUsers";
import { ChangeListName } from "./ChangeListName";
import useStore from "../store/dataStore";
import useLoginStore from "../store/loginStore";

export function ShoppingList() {
    const { deleteList, leaveList } = useStore();

    const navigate = useNavigate();

    const { getLoginInfo } = useLoginStore();

    //check if currently logged in user is owner of the list
    const owner = getLoginInfo();
    const ownerId = owner.id;
    const { getShoppingList } = useStore();
    const shoppingList = getShoppingList();
    const shoppingListOwnerId = shoppingList.owner;
    let role = "";
    if (ownerId === shoppingListOwnerId) {
        role = "owner";
    } else {
        role = "member";
    }

    if (role === "owner") {
        return (
            <Box>
                <Grid
                    container
                    rowSpacing={3}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ShoppingListItemForm />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ManageOwner />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ShoppingListTable />
                    </Grid>
                    <Grid
                        xs={6}
                        item
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            // xs={12}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid
                                item
                                xs={12}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    style={{ marginBottom: "10px" }}
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    onClick={() => {
                                        deleteList();
                                        navigate("/home");
                                    }}
                                >
                                    Delete list
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    style={{ marginBottom: "10px" }}
                                    color="warning"
                                    variant="contained"
                                    size="large"
                                >
                                    Archive list
                                </Button>
                                <ChangeListName />
                            </Grid>

                            <Grid item xs={12} mt={2}>
                                {/* <ManageUsers /> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    } else {
        return (
            <Box>
                <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ShoppingListItemForm />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    ></Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <ShoppingListTable />
                    </Grid>
                    <Grid
                        xs={6}
                        item
                        container
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid
                            item
                            // xs={12}
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid
                                item
                                xs={12}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Button
                                    style={{ marginBottom: "10px" }}
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    onClick={() => {
                                        leaveList();
                                        navigate("/home");
                                    }}
                                >
                                    Leave list
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                justifyContent="center"
                                alignItems="center"
                            ></Grid>

                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}
