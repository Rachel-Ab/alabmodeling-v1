import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Test from "./Pages/Dashboard/Test.js";
import Login from "./Pages/Login";
import Home from "./Pages/Client/Home";
import Error from "./Pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./GlobalComponents/Protected";

function App() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const routes = [
        {
            path: "/dashboard/test",
            component: Test,
        },
        {
            path: "/dashboard/*",
            component: Error,
        },
    ];
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="/test">
                        <Test />
                    </Route>
                    <Route path="/dashboard">
                        <Protected isLoggedIn={token}>
                            <Dashboard routes={routes} />
                        </Protected>
                    </Route>
                    <Route exact path="*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
