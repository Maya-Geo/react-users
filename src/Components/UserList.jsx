import React from 'react';
import User from "./User"
import {connect} from "react-redux"

const UserList = ({users,deleteUser,editUser}) => {

    const userList = users.map (
        (item) => {
          return (
            
           <User 
           user ={item} 
           deleteUser = {deleteUser}
           editUser = {editUser}
           />
           
          )
        }
     )
     return <div>{userList}</div>    
   
}

  const mapStateToProps =(state)=>{
    return{
    users: state.userState.users
  }
}

export default connect(mapStateToProps) (UserList);
