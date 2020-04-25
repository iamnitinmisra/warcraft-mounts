import React from "react";

export default function Greeting(props) {
  
  let message = (props.body.mounts)
    ? "You are logged in."
    : "You must log into your Blizzard account to use this helper.";

  return <span>{message}</span>;
}
