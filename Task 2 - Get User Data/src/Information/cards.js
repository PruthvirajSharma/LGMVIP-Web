import React from "react";

const Users = ({ users }) => {
  return (
    <div id="main" style={{ display: "flex" }}>
      {users.map((user) => (
        <div className="profile_cont" key={user.id}>
          <img src={user.avatar} alt={user.avatar} className="avatar" />
          <h1 className="name">
            {user.first_name} {user.last_name}
          </h1>
          <p className="email">{user.email}</p>
          <p>User id: {user.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
