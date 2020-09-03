import React, { Fragment } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Interview from "./Interview";
import About from "./About";
import Contact from "./Contact";
import Enquiry from "./Enquiry";
import Study from "./Study";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Login from "./User/Login";
import Logout from "./User/Logout";
import Register from "./User/Register";
import UserHome from "./UserHome";
import UserAbout from "./UserAbout";
import Social from "./Social";
import Contact1 from "./Contact1";
import Use from "./Use";
import UserUse from "./UserUse";
import Forget from "./User/Forget";
import { Switch, Route, Redirect } from "react-router-dom";
import Explore from "./Explore";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/enquiry" component={Enquiry} />
        <Route exact path="/study" component={Study} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact1" component={Contact1} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/use" component={Use} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/explore" component={Explore} />
        <Route exact path="/useruse" component={UserUse} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/userabout" component={UserAbout} />
        <Route exact path="/forget" component={Forget} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Fragment>
  );
};

export default App;
