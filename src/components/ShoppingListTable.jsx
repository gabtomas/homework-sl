import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useEffect, useState } from "react";
import useDataStore from "../store/dataStore";
import { TableListItem } from "./TableListItem";
import { useParams } from "react-router-dom";

export function ShoppingListTable() {
    const {
        shoppingList,
        deleteItem,
        toggleItem,
        getDoneItems,
        selectObjectById,
    } = useDataStore();

    const { id } = useParams();

    useEffect(() => {
        selectObjectById(parseInt(id, 10));
        console.log("useffect");
    }, []);

    const [filteredState, setFilteredState] = useState(false);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            color: theme.palette.common.black,
        },
    }));

    const filtered = getDoneItems();

    function handleChange() {
        setFilteredState(!filteredState);
    }

    return (
        <Box>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" style={{ minWidth: 500 }}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell colSpan="4" align="center">
                                {shoppingList.name}
                            </StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell2 colSpan="4" align="right">
                                Only remaining items
                                <Checkbox
                                    onChange={handleChange}
                                    color="default"
                                    checked={filteredState}
                                    defaultChecked={filteredState}
                                />
                            </StyledTableCell2>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredState ? (
                            filtered.map((item, index) => (
                                <TableListItem
                                    item={item}
                                    index={index}
                                    toggleItem={toggleItem}
                                    deleteItem={deleteItem}
                                />
                            ))
                        ) : (
                            <>
                                {shoppingList.items.map((item, index) => (
                                    <TableListItem
                                        item={item}
                                        index={index}
                                        toggleItem={toggleItem}
                                        deleteItem={deleteItem}
                                    />
                                ))}
                            </>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
