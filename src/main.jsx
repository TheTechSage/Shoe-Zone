import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Users from "./components/users/Users";
import Contact from "./components/contact/Contact";
import UserListPage from "./components/users/UserListPage";
import SingleUserPage from "./components/users/SingleUserPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<Users />}>
                <Route exact path="" element={<UserListPage />} />
                <Route exact path="user/:id" element={<SingleUserPage />} />
            </Route>
            <Route path="contact" element={<Contact />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);