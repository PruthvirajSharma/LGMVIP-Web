import Users from "./Information/cards";
import "./style.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { users_data: [] };
    this.updateState = this.updateState.bind(this);
  }

  async updateState() {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonresponse = await response.json();
    console.log(jsonresponse);
    this.setState({ users_data: jsonresponse["data"] });
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2>LGMVIP Web Task 2</h2>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users users={this.state.users_data} />
        </div>
      </>
    );
  }
}

export default App;
