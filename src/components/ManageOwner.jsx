import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useStore from "../store/dataStore";
import { Container, Typography } from "@mui/material";
import { useState } from "react";

import useLoginStore from "../store/loginStore";

export function ManageOwner() {
    const { getOwnerName, getShoppingList, changeOwner } = useStore();
    const [ownerNameOption, setOwnerNameOption] = useState(getOwnerName());
    const [open, setOpen] = useState(false);
    // const members = getShoppingList().members;
    // const owner = getOwnerName();

    const shoppingList = getShoppingList();

    const { getLoginInfo } = useLoginStore();
    const owner = getLoginInfo();
    const ownerName = owner.name;

    console.log(shoppingList);
    const members = shoppingList.members;

    const handleChange = (event) => {
        setOwnerNameOption(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== "backdropClick") {
            setOpen(false);
        }
    };

    const saveOwner = (event) => {
        console.log("event value" + event.target.value);
        changeOwner(ownerNameOption);
        handleClose();
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" component="h1">
                Owner: {ownerName}
            </Typography>

            <Button onClick={handleClickOpen} variant="contained">
                Change owner
            </Button>

            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Change owner of this list</DialogTitle>
                <DialogContent>
                    <Box
                        component="form"
                        sx={{ display: "flex", flexWrap: "wrap" }}
                    >
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <InputLabel htmlFor="demo-dialog-native">
                                Owner
                            </InputLabel>
                            <Select
                                sx={{ minWidth: 200 }}
                                native
                                value={ownerNameOption}
                                onChange={handleChange}
                                input={
                                    <OutlinedInput
                                        label="Owner"
                                        id="demo-dialog-native"
                                    />
                                }
                            >
                                <option aria-label="None" value="" />

                                {members.map((member) => (
                                    <option key={member.id} value={member.name}>
                                        {member.name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={saveOwner}>Save</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}
