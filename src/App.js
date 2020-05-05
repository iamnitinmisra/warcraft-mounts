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
      mountCollection: {}, // this is the body from /user roue
    };
  }

  componentDidMount() {
    console.log("Server Port", serverPort);
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

  render() {
    console.log("app", this.state);
    return (
      <div className="App">
        <Title />
        <AttainedMounts />
        <Greeting body={this.state.mountCollection} />
        <br />
        <LogInOut
          body={this.state.mountCollection}
          uri={`http://localhost:${serverPort}`}
        />
      </div>
    );
  }
}

export default App;
