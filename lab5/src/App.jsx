import { Route, Redirect ,Switch} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CountactUs } from "./ContactUs";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { Login } from "./Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Logout } from "./Logout";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./contexts";
import { NePosts } from "./NePosts";

export const App = () => {
  const authContext = useContext(AuthContext);
  const [isValid, setIsValid] = useState(); 
  return (
    <>
      {authContext.isLoggedIn && <Navbar isValid={isValid}/>}
      <div className="container">
        <Switch>
        <ProtectedRoute path="/ContactUs" >
            <CountactUs />
          </ProtectedRoute>
          <Route path="/posts" >
            <Posts />
          </Route>
          <ProtectedRoute path="/users/:id">
            <UserDetails />
          </ProtectedRoute>
          <ProtectedRoute path="/users" >
            <Users />
          </ProtectedRoute>
          <ProtectedRoute path="/Neposts">
            <NePosts />
          </ProtectedRoute>
          <Route path="/Login" >
            <Login setIsValid={setIsValid}/>
          </Route>
          <ProtectedRoute path="/Logout" >
            <Logout setIsValid={setIsValid}/>
          </ProtectedRoute>
          <Route path="/" >
            <Redirect to="/Posts" />
          </Route>
          </Switch>
          
          
      </div>
    </>
  );
};
