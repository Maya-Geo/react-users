import React from 'react';
import PrivateRoute from './ProtectedRoute'
import { Route, BrowserRouter,Link } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from './Pages/Login';
import './App.css'

const Router = () => {
    return (
      <BrowserRouter>
       <div className="nav">
       <Link className="hom" to="/">Home</Link>
      <Link className="res" to = "/register">Register</Link>
      <Link className="log" to = "/login">Login</Link>
    </div>
      
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component= {Login}/>
      </BrowserRouter>
    );
  } // Enabling various components in application

export default Router;
