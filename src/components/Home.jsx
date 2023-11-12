import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/list/1")}
        >
            /list/1
        </Button>
    );
}
