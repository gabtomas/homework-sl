import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useStore from "../store/dataStore";
import { Controller, useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";

export function ChangeListName() {
    const { getListName, changeListName } = useStore();

    const listName = getListName();

    const [listNamePlaceholder, changeListNamePlaceholder] = useState(listName);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("closed");
        changeListName(listNamePlaceholder);
        reset();
        setOpen(false);
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
    } = useForm();

    const onSubmit = (data) => {
        changeListName(data.name);
        console.log(data.name);
        reset();
        setOpen(false);
    };

    return (
        <div>
            <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
                size="large"
            >
                Change list name
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="edit-apartment"
            >
                <DialogTitle id="edit-apartment">
                    Current name: {listName}
                </DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        style={{ marginTop: "10px" }}
                    >
                        <Grid container spacing={2} mb={2}>
                            <Grid item xs={12}>
                                <Controller
                                    name="name"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Name"
                                            variant="outlined"
                                            {...register("name", {
                                                required: "Name is required.",
                                                minLength: {
                                                    value: 2,
                                                    message:
                                                        "Name must be at least 2 character long.",
                                                },
                                                pattern: {
                                                    value: /^[A-Za-z ]+$/i,
                                                    message:
                                                        "Name must contain only letters.",
                                                },
                                            })}
                                            fullWidth
                                        />
                                    )}
                                />
                                <ErrorMessage
                                    errors={errors}
                                    name="name"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ marginRight: 10 }}
                        >
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
