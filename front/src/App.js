import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import Test from "./Pages/Dashboard/Test.js";
import Login from "./Pages/Login";
import Home from "./Pages/Client/Home/Home";
import Error from "./Pages/Error";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Protected from "./GlobalComponents/Protected";
import Profile from "./Pages/Dashboard/Profile";
import Logiciels from "./Pages/Dashboard/Logiciels/Logiciels";
import AddLogiciel from "./Pages/Dashboard/Logiciels/AddLogiciel";
import EditLogiciel from "./Pages/Dashboard/Logiciels/EditLogiciel";
import Formations from "./Pages/Dashboard/Formations/Formations";
import AddFormation from "./Pages/Dashboard/Formations/AddFormations";
import EditFormation from "./Pages/Dashboard/Formations/EditFormations";
import FormationsCategory from "./Pages/Dashboard/FormationsCategory/FormationsCategory";
import AddFormationsCategory from "./Pages/Dashboard/FormationsCategory/AddFormationsCategory";
import EditFormationsCategory from "./Pages/Dashboard/FormationsCategory/EditFormationsCategory";
import Entreprises from "./Pages/Dashboard/Entreprises/Entreprises";
import AddEntreprise from "./Pages/Dashboard/Entreprises/AddEntreprises";
import EditEntreprise from "./Pages/Dashboard/Entreprises/EditEntreprises";
import Chantiers from "./Pages/Dashboard/Chantiers/Chantiers";
import AddChantier from "./Pages/Dashboard/Chantiers/AddChantiers";
import EditChantier from "./Pages/Dashboard/Chantiers/EditChantiers";
import Information from "./Pages/Client/Informations/Information";

function App() {
    const token = JSON.parse(localStorage.getItem("admin"));
    const routes = [
        {
            path: "/dashboard/test",
            component: Test,
        },
        {
            path: "/dashboard/profile",
            component: Profile,
        },
        {
            path: "/dashboard/logiciels",
            component: Logiciels,
        },
        {
            path: "/dashboard/logiciel-add",
            component: AddLogiciel,
        },
        {
            path: "/dashboard/logiciel-edit/:slug",
            component: EditLogiciel,
        },
        {
            path: "/dashboard/formations",
            component: Formations,
        },
        {
            path: "/dashboard/formation-add",
            component: AddFormation,
        },
        {
            path: "/dashboard/formation-edit/:slug",
            component: EditFormation,
        },
        {
            path: "/dashboard/categories",
            component: FormationsCategory,
        },
        {
            path: "/dashboard/category-add",
            component: AddFormationsCategory,
        },
        {
            path: "/dashboard/category-edit/:slug",
            component: EditFormationsCategory,
        },
        {
            path: "/dashboard/entreprises",
            component: Entreprises,
        },
        {
            path: "/dashboard/entreprise-add",
            component: AddEntreprise,
        },
        {
            path: "/dashboard/entreprise-edit/:slug",
            component: EditEntreprise,
        },
        {
            path: "/dashboard/chantiers",
            component: Chantiers,
        },
        {
            path: "/dashboard/chantier-add",
            component: AddChantier,
        },
        {
            path: "/dashboard/chantier-edit/:slug",
            component: EditChantier,
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
                    <Route path="/informations">
                        <Information />
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
