import React, { Component } from "react";
import axios from "axios";
import UserListComponent from "../UserListComponent";

class UsersComponent extends Component {
  state = {
    users: [],
    userName: "",
    isFetching: false
  };
  //https://api.github.com/users
  //https://api.github.com/search/repositories?q=rohyadav

  // componentDidMount() {
  //   axios
  //     .get(`https://api.github.com/search/repositories?q=tetris`)
  //     .then(res => {
  //       const users = res.data.items;
  //       console.log(users);

  //       this.setState({ users });
  //     });
  // }

  onUserInputChange = e => {
    this.setState({ userName: e.target.value, isFetching: true });

    axios
      .get(`https://api.github.com/search/repositories?q=${e.target.value}`)
      .then(res => {
        const users = res.data.items;
        console.log(users);

        this.setState({ users, isFetching: false });
      })
      .catch(error => {
        console.log(error.response);
      });
    console.log(e);
    console.log(e.target.value);
  };

  render() {
    const { users, userName, isFetching } = this.state;
    return (
      <div>
        {users.length}
        <input type="text" value={userName} onChange={this.onUserInputChange} />
        <UserListComponent userlist={users} />
      </div>
    );
  }
}

export default UsersComponent;
