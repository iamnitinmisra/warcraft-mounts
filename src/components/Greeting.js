import React from "react";

export default function Greeting(props) {
  let message = props.mountCollection
    ? "Thank you for logging in."
    : "You must log into your Blizzard account to use this helper.";
  return <span>{message}</span>;
}
