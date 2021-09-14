export const addUser = (user) =>{
    user.id = Math.random().toString();

    
    return(dispatch,state,{getFirestore})=>{
        getFirestore().collection("users").add(user).then(
            (docs)=>{
                console.log(docs)
            }
        )
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