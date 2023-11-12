import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div>
            <h1> Page not found... </h1>
            <Button onClick={() => navigate("/home")} variant="contained">
                {" "}
                Go to home page{" "}
            </Button>
        </div>
    );
}
