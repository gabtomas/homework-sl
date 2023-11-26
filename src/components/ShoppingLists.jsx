import React, { useState } from "react";
import {
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Modal,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import useStore from "../store/dataStoreMultiple";
import useLoginStore from "../store/loginStore";

export default function ShoppingLists() {
    const { getCurrentlyLoggedUserId } = useLoginStore();

    const currentlyLogged = getCurrentlyLoggedUserId();

    const navigate = useNavigate();
    const { shoppingLists, deleteShoppingList, getArchivedShoppingLists } =
        useStore();
    const [deleteIndex, setDeleteIndex] = useState(null);
    const [showArchived, setShowArchived] = useState(false);

    const archivedShoppingLists = getArchivedShoppingLists();

    const handleItemClick = (index) => {
        navigate(`/list/${index}`);
    };

    const handleDeleteClick = (event, index) => {
        event.stopPropagation();
        setDeleteIndex(index);
    };

    const handleDeleteConfirm = () => {
        deleteShoppingList(deleteIndex);
        setDeleteIndex(null);
    };

    const handleDeleteCancel = () => {
        setDeleteIndex(null);
    };

    const handleToggleArchived = () => {
        setShowArchived(!showArchived);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px",
                }}
            >
                <Checkbox
                    checked={showArchived}
                    onChange={handleToggleArchived}
                    color="primary"
                />
                <Typography variant="body1">Show Archived</Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {showArchived ? (
                    archivedShoppingLists.map((list, index) => (
                        <Paper
                            key={list.id}
                            onClick={() => handleItemClick(list.id)}
                            style={{
                                width: "100%",
                                maxWidth: "300px",
                                margin: "16px",
                                padding: 2,
                                border: "1px solid #ddd",
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                                display: "flex",
                                flexDirection: "column",
                                cursor: "pointer",
                            }}
                        >
                            <List>
                                <ListItem>
                                    <ListItemText primary={list.name} />
                                    <div style={{ flex: 1 }} />
                                    {list.owner === currentlyLogged && (
                                        <IconButton
                                            onClick={(event) =>
                                                handleDeleteClick(
                                                    event,
                                                    list.id
                                                )
                                            }
                                            aria-label="delete"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    )}
                                </ListItem>
                                <ListItem>
                                    {list.owner === currentlyLogged ? (
                                        <Typography variant="body1">
                                            {" "}
                                            owner{" "}
                                        </Typography>
                                    ) : (
                                        <Typography variant="body1">
                                            {" "}
                                            member{" "}
                                        </Typography>
                                    )}
                                </ListItem>
                            </List>
                        </Paper>
                    ))
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        {shoppingLists.map((list, index) => (
                            <Paper
                                key={list.id}
                                onClick={() => handleItemClick(index)}
                                style={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    margin: "16px",
                                    padding: 2,
                                    border: "1px solid #ddd",
                                    backgroundColor: "#f9f9f9",
                                    borderRadius: "8px",
                                    display: "flex",
                                    flexDirection: "column",
                                    cursor: "pointer",
                                }}
                            >
                                <List>
                                    <ListItem>
                                        <ListItemText primary={list.name} />
                                        <div style={{ flex: 1 }} />
                                        {list.owner === currentlyLogged && (
                                            <IconButton
                                                onClick={(event) =>
                                                    handleDeleteClick(
                                                        event,
                                                        list.id
                                                    )
                                                }
                                                aria-label="delete"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        )}
                                    </ListItem>
                                    <ListItem>
                                        {list.owner === currentlyLogged ? (
                                            <Typography variant="body1">
                                                {" "}
                                                owner{" "}
                                            </Typography>
                                        ) : (
                                            <Typography variant="body1">
                                                {" "}
                                                member{" "}
                                            </Typography>
                                        )}
                                    </ListItem>
                                </List>
                            </Paper>
                        ))}
                        <Modal
                            open={deleteIndex !== null}
                            onClose={handleDeleteCancel}
                            aria-labelledby="modal-title"
                            aria-describedby="modal-description"
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "white",
                                    borderRadius: "8px",
                                    padding: "16px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Typography variant="h6" id="modal-title">
                                    Confirm Deletion
                                </Typography>
                                <Typography
                                    variant="body1"
                                    id="modal-description"
                                >
                                    Are you sure you want to delete this item?
                                </Typography>
                                <div
                                    style={{
                                        marginTop: "16px",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button
                                        onClick={handleDeleteConfirm}
                                        variant="contained"
                                        color="primary"
                                        style={{ width: "48%" }}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        onClick={handleDeleteCancel}
                                        variant="contained"
                                        color="secondary"
                                        style={{ width: "48%" }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
        </div>
    );
}
