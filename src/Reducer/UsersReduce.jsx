const initialState={
    users:[]

}


const UsersReduce = (state = initialState, action) => {

    switch(action.type) {
        case "ADD_USER":
        return {...state.users, users: [...state.users, action.payload]};

        case "EDIT_USER":
            const newUsers =  state.users.map((user) =>
              user.id === action.payload.id ? action.payload : user
            )
           
           return {...state, users: newUsers};

           case "DELETE_USER":
            const savedUsers = state.users.filter((user) => {
              return user.id !== action.payload;
            });

            return {...state, users: savedUsers};
            
            case'SET_ALL_USERS':
            console.log(action.payload)
            return {...state, users: action.payload};
                 

        default:
        return state;
    }
   
}

export default UsersReduce;
