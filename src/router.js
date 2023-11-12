import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    Router,
    Routes,
} from "react-router-dom";

import Navbar from "./components/Layout";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { ShoppingList } from "./components/ShoppingList";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Navbar />}>
            <Route path="/home" element={<Home />} />
            <Route path="/create-new-list" element={<Home />} />
            <Route path="/lists" element={<Home />} />
            <Route path="/list/:id" element={<ShoppingList />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);
