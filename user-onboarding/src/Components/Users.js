import React from "react";

export default function Users(props) {
  const { userList } = props;
  return (
    <div className='users'>
      <h3>Users</h3>
      {userList.length
        ? userList.map(user => (
            <ul key={user.id} className='user'>
                <p>User: {user.name} <p>Email: {user.email}</p></p>
            </ul>
          ))
        : "No users yet"}
    </div>
  );
}