export const ADD_USER = "ADD_USER";
export const Edit_User = "EDIT_USER"
export const DELETE_USER ="DELETE_USER"

export const addUser = (user) =>{
    // user.id = Math.random().toString();

    
    return(dispatch,state,{getFirestore})=>{
        getFirestore()
        .collection("users")  .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then(
            (docs)=>{
                console.log(docs)
        })


        .catch((err) => console.log(err));
        // type: "ADD_USER",
        // payload: user


    }
}




export const editUser = (updatedUser)=> {
    
    return(dispatch, state, {getFirestore})=>{
      getFirestore().collection("users").doc(updatedUser.id).update(updatedUser)
      .then(
          ()=> {
              console.log("Successfuly updated")
          }
      )
      .catch(
          (error)=> {
              console.error("Remove Users", error);
          }
      )

      
        // type: "EDIT_USER",
        // updatedUser : updatedUser
    }
   
    
}


export const deleteUser = (id) => {
    
    return (dispatch, state, {getFirestore})=>{
      getFirestore().collection("users").doc(id).delete().then(() => {
        console.log("Users deleted");
    }).catch((error) => {
        console.error("Removed Users: ", error);
    });
}
      
        // type: "DELETE_USER",
        //  payload: id
      }
   
    


export const getAllUsers = () => {
    return(dispatch, state, {getFirestore}) =>{
      getFirestore().collection("users").orderBy("timestamp", "desc")
      .onSnapshot(
          (snapshot)=> {
              let users = []
              snapshot.forEach(
                  (doc)=> {users.push({...doc.data(),id:doc.id })  //added an id//

        })
        
      dispatch({
        type: "SET_ALL_USERS",
        payload: users
      })
      },(error)=>{});
  
    };
  };