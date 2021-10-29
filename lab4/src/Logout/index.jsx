import { useHistory } from "react-router-dom";

export const Logout = (props) => {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem("token");
        props.setIsValid(false);
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
