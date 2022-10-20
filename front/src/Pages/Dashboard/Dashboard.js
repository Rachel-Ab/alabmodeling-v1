import React from "react";
import { Switch, Route } from "react-router-dom";
import RouteWithSubRoutes from "../../GlobalComponents/RouteWithSubRoutes";
import Layout from "./Components/Layout";

export default function Dashboard({ routes }) {
    return (
        <Layout>
            <h1>Dashboard</h1>
            <Switch>
                {routes.map((route, i) => {
                    return <RouteWithSubRoutes key={i} {...route} />;
                })}
            </Switch>
        </Layout>
    );
}
