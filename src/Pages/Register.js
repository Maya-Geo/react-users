import React from "react";
import { useDispatch } from "react-redux";
import './Sign.css'
import { registerUserWithEmail,} from "../Actions/AuthActions";

const Register= () =>{
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    dispatch( registerUserWithEmail(email,password));
  };


  return (  
    <div>
      <h1 style={{marginLeft: "33rem"}}>User Registration</h1>
      <form className="heading" style={{marginLeft: "18rem"}} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <br></br>
        <label>Password</label>
        <input name="password" type="password" />
        <hr />
        <button type="submit" className="btn-primary">
          Submit
        </button>

           {/* <button>Sign in with Google</button> */}
      </form>
    </div>
  );
}

export default Register;