import React, {connect} from "react-redux";
import { useDispatch } from "react-redux";
import './Sign.css'
import { registerUserWithEmail, loginWithGoogle} from "../Actions/AuthActions";


const Register = (props) => {
  const dispatch = useDispatch();
  // if(!props.auth.isLoaded) return null;
  if(props.auth.uid) props.history.push('/')




  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    dispatch(registerUserWithEmail(email, password));
  };


  const authWithGoogle = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  return (  
    <div>
      <h1 style={{marginLeft: "33rem"}}>User Registration</h1>
      <form className="heading" style={{marginLeft: "18rem"}} onSubmit={handleSubmit}>
        <label>Email</label>
        <input name="email" type="email" />
        <br></br>
        <label>Passrd</label>
        <input name="password" type="password" />
        <hr />
        <button type="submit" className="btn-primary">
          Submit
        </button>

           <button onClick={authWithGoogle}>Sign in with Google </button > 
      </form>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    auth:state.firebase.auth
  }
}


const mapDispatchToProps = {
  registerUserWithEmail,
}

export default connect (mapStateToProps, mapDispatchToProps) (Register);