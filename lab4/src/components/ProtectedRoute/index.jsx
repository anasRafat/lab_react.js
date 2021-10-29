import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ path, children }) => {
    const isLoggedIn = localStorage.getItem("token") === "1234";
    

    return isLoggedIn ? (
        <Route path={path}>{children}</Route>
    ) : (
        <Route path="/">
            <Redirect to="/Login" />
        </Route>
    );
};
