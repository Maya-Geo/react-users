import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {loginWIthEmail,} from "../Actions/AuthActions";
import './Log.css'

function Login(props) {
  const dispatch = useDispatch();
  const { replace } = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch(loginWIthEmail(email, password, replace));
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
        <button type="submit" className="btn-primary">
          Login 
        </button>

        <Link to="/register">Don't have an account? Sign up</Link>

        
      </form>
    </div>
  );
}

const mapSTateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapSTateToProps)(Login);