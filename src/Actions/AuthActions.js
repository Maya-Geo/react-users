export const registerUserWithEmail = (email, password) => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginWithGoogle = () => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        var user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginWIthEmail = (email, password, replace) => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }; 
};

export const logout = (replace) => {
  return (dispatch, state, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        // replace("/login");
      });
  };
};