import React from 'react';
import {Route, BrowserRouter, } from "react-router-dom";
// import PrivateRoute from "./ProtectedRoute";
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';


 const Router = () => { 
    return (
        <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        
        </BrowserRouter>
    )
}
//Enabling various components in application

export default Router;



