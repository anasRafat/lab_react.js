import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts";

export const ProtectedRoute = ({ path, children }) => {
    const authContext = useContext(AuthContext);

    return authContext.isLoggedIn ? (
        <Route path={path}>{children}</Route>
    ) : (
        <Route path="/">
            <Redirect to="/login" />
        </Route>
    );
};
