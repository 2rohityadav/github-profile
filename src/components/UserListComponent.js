import React from "react";

const ListItem = ({ user }) => <li>{user}</li>;

const UserListComponent = ({ userlist }) => {
  return (
    <div>
      <ul>
        {userlist.map(user => <ListItem user={user.name} key={user.id} />)}
      </ul>
    </div>
  );
};

export default UserListComponent;
