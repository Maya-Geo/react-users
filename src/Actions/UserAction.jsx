export const addUser = (user) =>{
    user.id = Math.random().toString();
    return{
        type: "ADD_USER",
        payload: user
    }
}