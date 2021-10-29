import { NavLink } from "react-router-dom";


export const Navbar = (props) => {
  


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        My-App
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ContactUs">
              Countact Us
            </NavLink>
          </li>
          
          {props.isValid &&
            (<li className="nav-item">
              <NavLink className="nav-link" to="/Logout">
                Logout
              </NavLink>
            </li>
            ) }
            { !props.isValid &&(

              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  Login
                </NavLink>
              </li>)}

        </ul>
      </div>
    </nav>
  );
};
