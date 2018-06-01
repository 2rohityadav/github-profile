import React, { Component } from "react";
import axios from "axios";
import UserListComponent from "../UserListComponent";

class UsersComponent extends Component {
  state = {
    users: []
  };
  //https://api.github.com/users
  //https://api.github.com/search/repositories?q=rohyadav

  componentDidMount() {
    axios
      .get(`https://api.github.com/search/repositories?q=tetris`)
      .then(res => {
        const users = res.data.items;
        console.log(users);
        // const output = users.map(r => console.log(r));

        this.setState({ users });
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {this.state.users.length}
        <UserListComponent userlist={users} />
      </div>
    );
  }
}

export default UsersComponent;
