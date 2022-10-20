import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./layout.css";

export default function Layout(props) {
    return (
        <div id="dashboard">
            <Header />
            <Sidebar />
            {props.children}
            <Footer />
        </div>
    );
}
