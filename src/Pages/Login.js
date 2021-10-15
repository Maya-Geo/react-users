import React from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {loginWIthEmail, loginWithGoogle} from "../Actions/AuthActions";
import './Log.css'


const Login = (props) => {
  const dispatch = useDispatch();
  // if(!props.auth.isLoaded) return null;
  if(props.auth.uid) props.history.push('/')


  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    dispatch(loginWIthEmail(email, password));
  };
  const authWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (
    <div>
      <h1  style={{marginLeft: "35rem"}}>User Login </h1>
      <form className="head" style={{marginLeft: "20rem"}} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <br></br>
        <label>Password</label>
        <input name="password" type="password" />
        <hr />
        <button  type="submit" className="btn-primary" onClick={authWithGoogle}>
          Login 
        </button>

        <Link to="/register">Don't have an account? Sign up</Link>

        
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}


export default connect(mapStateToProps)(Login);
