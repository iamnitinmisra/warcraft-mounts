import React, { Component } from "react";
import Greeting from "./components/Greeting";
import LogInOut from "./components/LogInOut";
import axios from "axios";
import config from "./setup";
import AttainedMounts from "./components/AttainedMounts";
import Title from "./components/Title";
import "./reset.css";



class App extends Component {
  constructor() {
    super();
    this.state = {
      body: {}, // this is the body from /user route
    };
  }

  componentDidMount() {
    console.log("Server Port", config.serverPort);
    axios
      .get(`http://localhost:${config.serverPort}/mounts`, {
        withCredentials: true,
      })
      // .then(res => console.log(res.data))

      .then((res) =>
        this.setState({
          body: res.data,
        })
      );
  }

  render() {
    console.log("app", this.state);
    return (
      <div className="App">
        <Title />
        <AttainedMounts />
        <Greeting body={this.state.body} />
        <br />
        <LogInOut
          body={this.state.body}
          uri={`http://localhost:${config.serverPort}`}
        />
      </div>
    );
  }
}

export default App;
