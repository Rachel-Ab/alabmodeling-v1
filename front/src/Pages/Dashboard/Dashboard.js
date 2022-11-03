import React from "react";
import { Switch} from "react-router-dom";
import RouteWithSubRoutes from "../../GlobalComponents/RouteWithSubRoutes";
import Layout from "./Components/Layout";
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
