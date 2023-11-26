// CreateNewList.jsx

import useStore from "../store/dataStoreMultiple";
// CreateNewList.jsx

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Button,
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";

import useLoginStore from "../store/loginStore";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";

const CreateNewList = () => {
    const { control, handleSubmit, register, setValue, getValues } = useForm();
    const { createNewList } = useStore();
    const navigate = useNavigate();

    // get current logged user
    const { getCurrentlyLoggedUserId } = useLoginStore();
    const ownerId = getCurrentlyLoggedUserId();

    const [members, setMembers] = useState([]);
    const [items, setItems] = useState([]);

    const onSubmit = (data) => {
        const newList = {
            name: data.listName,
            archived: false,
            owner: ownerId,
            members: members.map((member, index) => ({
                id: index + 1,
                name: member,
            })),
            items: items.map((item, index) => ({
                id: index + 1,
                name: item,
                done: false,
            })),
        };

        createNewList(newList);
        //redirect to home page
        console.log("/home");
        navigate("/home");
    };

    const handleDeleteMember = (index) => {
        setMembers((prevMembers) => prevMembers.filter((_, i) => i !== index));
    };

    const handleDeleteItem = (index) => {
        setItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" gutterBottom>
                Create New Shopping List
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: "80%" }}>
                <TextField
                    label="List Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register("listName")}
                />

                {/* Add members */}
                <Box display="flex" alignItems="center">
                    <TextField
                        label="Member Name"
                        variant="outlined"
                        margin="normal"
                        {...register("memberName")}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setMembers([...members, getValues("memberName")]);
                            setValue("memberName", "");
                        }}
                        type="button"
                        style={{ marginLeft: "8px" }}
                    >
                        Add Member
                    </Button>
                </Box>

                {/* Display added members */}
                <TableContainer
                    component={Paper}
                    style={{ marginTop: "16px", width: "100%" }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Members</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {members.map((member, index) => (
                                <TableRow key={index}>
                                    <TableCell>{member}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() =>
                                                handleDeleteMember(index)
                                            }
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Add items */}
                <Box display="flex" alignItems="center">
                    <TextField
                        label="Item Name"
                        variant="outlined"
                        margin="normal"
                        {...register("itemName")}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setItems([...items, getValues("itemName")]);
                            setValue("itemName", "");
                        }}
                        type="button"
                        style={{ marginLeft: "8px" }}
                    >
                        Add Item
                    </Button>
                </Box>

                {/* Display added items */}
                <TableContainer
                    component={Paper}
                    style={{ marginTop: "16px", width: "100%" }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Items</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            onClick={() =>
                                                handleDeleteItem(index)
                                            }
                                        >
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Save button */}
                <Box marginTop="16px" width="100%">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                    >
                        Save List
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default CreateNewList;
