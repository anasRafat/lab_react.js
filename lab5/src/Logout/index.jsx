import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";

export const Logout = (props) => {
    const history = useHistory();
    const authContext = useContext(AuthContext)

    const handleLogout = () => {
        localStorage.removeItem("token");
        props.setIsValid(false);
        authContext.logout()
        history.replace("/login");
    };
    return (
        <>
            <h4>Logout</h4>
            <button className="btn btn-danger" onClick={handleLogout}>
                Log-out
            </button>
        </>
    );
};
