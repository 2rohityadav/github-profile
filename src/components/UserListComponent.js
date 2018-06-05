import React from "react";

const ListItem = ({ user }) => <li>{user.name}</li>;

const UserListComponent = ({ userlist }) => {
  return (
    <div>
      <ul>{userlist.map(user => <ListItem user={user} key={user.id} />)}</ul>
    </div>
  );
};

export default UserListComponent;
