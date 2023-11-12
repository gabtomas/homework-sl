// import { TextField, Button, Stack, Table, TableContainer } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Container, Grid } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

import useStore from "../store/dataStore";

export function ShoppingListItemForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
        reset,
    } = useForm();

    const { addItem } = useStore();

    const onSubmit = (data) => {
        addItem(data.name);
        reset();
    };

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <h1>Enter a new item to the list</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
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
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    onClick={() => reset()}
                >
                    Reset
                </Button>
            </form>
        </Container>
    );
}
