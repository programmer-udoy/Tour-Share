import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./pages/authentication/Login/Login";
import PrivateRoute from "./pages/authentication/PrivateRoute/PrivateRoute";
import Registration from "./pages/authentication/Registration/Registration";
import CreateTeam from "./pages/CreateTeam/CreateTeam/CreateTeam";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Home from "./pages/home/Home/Home";
import Booking from "./pages/Hotels/Booking/Booking";
import Hotels from "./pages/Hotels/Hotels/Hotels";
import Success from "./pages/Hotels/Success/Success";
import JoinTeam from "./pages/JoinTeam/JoinTeam/JoinTeam";

import UpdateTeam from "./pages/UpdateTeam/UpdateTeam";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Registration></Registration>
            </Route>
            <Route path="/hotels">

              <Hotels></Hotels>
            </Route>

            <PrivateRoute path="/createteam">
              <CreateTeam></CreateTeam>
            </PrivateRoute>
            <PrivateRoute path="/jointeam/:teamName">
              <JoinTeam></JoinTeam>
            </PrivateRoute>
            <PrivateRoute path="/updateteam/:id">
              <UpdateTeam></UpdateTeam>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path="/booking">
              <Booking></Booking>
            </Route>
            <Route exat path="/success/:id">

              <Success></Success>
            </Route>
          </Switch>
          
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
