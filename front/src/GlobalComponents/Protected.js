import { Redirect } from "react-router-dom";

export default function Protected({ isLoggedIn, children }) {
    if (!isLoggedIn) {
        return <Redirect to="/login" />;
    }
    return children;
}
