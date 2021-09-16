export const ADD_USER = "ADD_USER";
export const Edit_User = "EDIT_USER"
export const DELETE_USER ="DELETE_USER"

export const addUser = (user) =>{
    user.id = Math.random().toString();

    
    return(dispatch,state,{getFirestore})=>{
        const db = getFirestore();
        db.collection("users").add(user).then(
            (docs)=>{
                console.log(docs)
            })


        .catch((err) => console.log(err));
        // type: "ADD_USER",
        // payload: user


    }
}




export const editUser = (updatedUser)=> {
    
    return {
        type: "EDIT_USER",
        updatedUser : updatedUser
    }
   
    
}


export const deleteUser = (id) => {
    
    return {
        type: "DELETE_USER",
         payload: id
      }
   
    
}