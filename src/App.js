import React, { Component } from "react";
import Greeting from "./components/Greeting";
import LogInOut from "./components/LogInOut";
import axios from "axios";
import { serverPort } from "./setup";
import AttainedMounts from "./components/AttainedMounts";
import Title from "./components/Title";
import "./reset.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mountCollection: undefined, // this is the body from /user roue
      status200: false,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:${serverPort}/mounts`, {
        withCredentials: true,
      })
      // .then(res => console.log(res.data.mounts))

      .then((res) =>
        this.setState({
          mountCollection: res.data.mounts,
        })
      );
  }

  componentDidUpdate() {
    const { mountCollection, status200 } = this.state;
    if (mountCollection && status200 === false) {
      this.setState({
        status200: true,
      });
    }
  }

  render() {
    // console.log("app", this.state);
    const { status200 } = this.state;

    return (
      <div className="App">
        <Title />
        <Greeting mountCollection={this.state.mountCollection} />
        <br />
        <LogInOut
          mountCollection={this.state.mountCollection}
          uri={`http://localhost:${serverPort}`}
        />
        {status200 ? <AttainedMounts /> : console.log("You are not signed in")}
      </div>
    );
  }
}

export default App;
