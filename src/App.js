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
      mountCollection: [], 
      status200: false,
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:${serverPort}/mounts`, {
        withCredentials: true,
      })
      .then((res) =>
        this.setState({
          mountCollection: res.data.mounts,
        })
      );
  }

  componentDidUpdate() {
    const { mountCollection, status200 } = this.state;

    // if successful login and status 200 on GET request for user's mount collection
    if (mountCollection && status200 === false) {
      this.setState({
        status200: true,
      });
    }
  }

  render() {
    console.log("app -> mountCollection", this.state.mountCollection);
    const { mountCollection, status200 } = this.state;

    return (
      <div className="App">
        <Title />
        <Greeting mountCollection={mountCollection} />
        <LogInOut
          mountCollection={mountCollection}
          uri={`http://localhost:${serverPort}`}
        />
        <AttainedMounts
          status200={status200}
          mountCollection={mountCollection}
        />
      </div>
    );
  }
}

export default App;
