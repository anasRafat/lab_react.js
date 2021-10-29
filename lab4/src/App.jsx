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


export const App = () => {
  const [isValid, setIsValid] = useState(); 
  return (
    <>
      <Navbar isValid={isValid}/>
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
