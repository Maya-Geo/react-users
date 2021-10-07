import React from 'react';
import PrivateRoute from './ProtectedRoute'
import { Route, BrowserRouter, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from './Pages/Login';

const Router = () => {
    return (
      <BrowserRouter>
       <NavLink to="/">Home</NavLink>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component= {Login}/>
      </BrowserRouter>
    );
    
  } // Enabling various components in application

export default Router;
