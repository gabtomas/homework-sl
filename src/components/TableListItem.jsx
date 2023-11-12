import {
    Button,
    Checkbox,
    TableCell,
    styled,
    tableCellClasses,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import React from "react";

export function TableListItem({ item, index, toggleItem, deleteItem }) {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.grey[50],
        },
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    return (
        <StyledTableRow
            key={item.id}
            sx={{
                "&:last-child td, &:last-child th": {
                    border: 0,
                },
                // Apply the disabled style when the item is done
                ...(item.done && {
                    backgroundColor: "rgba(0, 0, 0, 0.12)", // Customize the background color
                    color: "#fff",
                    // opacity: 0.5,
                }),
            }}
        >
            <StyledTableCell
                component="th"
                scope="row"
                sx={{
                    ...(item.done && {
                        textDecoration: "line-through",
                        opacity: 0.5,
                    }),
                }}
            >
                {index + 1}
            </StyledTableCell>
            <StyledTableCell
                align="center"
                sx={{
                    ...(item.done && {
                        textDecoration: "line-through",
                        opacity: 0.5,
                    }),
                }}
            >
                {item.name}
            </StyledTableCell>

            <StyledTableCell align="center">
                <Checkbox
                    defaultChecked={item.done}
                    onClick={() => toggleItem(item.id)}
                />
            </StyledTableCell>

            <StyledTableCell align="center">
                <Button onClick={() => deleteItem(item.id)}>
                    <HighlightOffIcon />
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    );
}
