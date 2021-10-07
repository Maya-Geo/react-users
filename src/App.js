import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./Router";
import './App.css'

// import UserForm from './Components/UserForm';
// import UserList from './Components/UserList';






class App extends Component {
  render() {
    return (
      <>
        <Router />
      </>
    );
  }
}

// class App extends Component {
//     handleAddUser = (newUser) => {
//         newUser.id = Math.random().toString();
//         this.setState({ 
//           users: [...this.state.users, newUser] 
//         })
//     }

//      handleDeleteUser =(userId)=> {
//       const savedusers = this.state.users.filter(
//             (user)=>{
//                return user.id !==userId;
//             })
//             this.setState({users: savedusers})
//     }


//     handleEditUser = (updatedUser) => {
//         this.setState({
//           users: this.state.users.map((user) =>
//             user.id === updatedUser.id ? updatedUser : user
//           ),
//         });
//       };

//       render() {
//         return (
//           <div>
//            <UserForm addUser = {this.handleAddUser}/>
//            <UserList/>
      
//           </div>
//         );
//       }
//     }

export default App; 