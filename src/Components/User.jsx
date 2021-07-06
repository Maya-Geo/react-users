import React from 'react';

const User = ({ user, index }) => {
    return (
        <div>
            <div className="user" key={index}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Gen: {user.gen}</p>
            <hr />
        </div>
        </div>
    );
}

export default User;
