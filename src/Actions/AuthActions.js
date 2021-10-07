export const registerUserWithEmail = (email,password) => {
    return(dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{});
    };
};




  



    
   
        export const loginWIthEmail = (email, password ,replace) => {
          return (dispatch, state, { getFirebase }) => {
            const firebase = getFirebase();
            firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((res) => {
               replace("/home")
              })
              .catch((e) => {
                console.log(e);
              });
          };
        };


  //       export const loginWithGoogle = () => {
  //         return (dispatch, state, { getFirebase }) => {
  //         const firebase = getFirebase();
  //          var provider = new firebase.auth.GoogleAuthProvider();


  //       firebase
  //          .auth()
  //        .signInWithPopup(provider)
  //        .then((result) => {
  //          /** @type {firebase.auth.OAuthCredential} */
  //          var credential = result.credential;
  
  //         // This gives you a Google Access Token. You can use it to access the Google API.
  //          var token = credential.accessToken;
  //          // The signed-in user info.
  //          var user = result.user;
  //          console.log(user);
  //          // ...
  //      })


        
  //       .catch((error) => {
  //        // Handle Errors here.
  //          var errorCode = error.code;
  //          var errorMessage = error.message;
  //         // The email of the user's account used.
  //          var email = error.email;
  //          // The firebase.auth.AuthCredential type that was used.
  //          var credential = error.credential;
  //            console.log(error);
  //         // ...
  //        });
  //    };
  //  };
  



  export const logout = (replace) => {
    return (dispatch, state, { getFirebase }) => {
      const firebase = getFirebase();
      firebase
        .auth()
        .signOut()
        .then(() => {
          replace("/login");
        });
    };
  };
  


  export const setIsAuth = (isAuth) => {
    return {
      type: "SET_IS_AUTH",
      payload: isAuth,
    };
  };