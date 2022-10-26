import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import RouteWithSubRoutes from "../../GlobalComponents/RouteWithSubRoutes";
import Layout from "./Components/Layout";
import { pathname } from "../../config.js";
import "./admin.css";

export default function Dashboard({ routes }) {
    return (
        <Layout>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                </div>
                <Switch>
                    {routes.map((route, i) => {
                        return <RouteWithSubRoutes key={i} {...route} />;
                    })}
                </Switch>
            </main>
        </Layout>
    );
}
