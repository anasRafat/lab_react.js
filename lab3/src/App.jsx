import { Route, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CountactUs } from "./ContactUs";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";

export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Route path="/ContactUs" exact>
            <CountactUs />
          </Route>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/" exact>
            <Redirect to="/posts" />
          </Route>
      </div>
    </>
  );
};
