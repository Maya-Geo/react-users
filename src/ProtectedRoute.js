import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ components: Components, auth, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isLoaded && !auth.isEmpty) return <Components {...props} />;
        else if (!auth.isLoaded) return <h1>Loading...</h1>;
        else return <Redirect to="/login" />;
      }}
    />
  );
};



const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps)(PrivateRoute);