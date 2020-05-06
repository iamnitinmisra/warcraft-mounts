import React from "react";

export default function LogInOut(props) {
  let message = props.mountCollection ? "Sign out" : `Sign in`;

  let redirect = props.mountCollection ? "" : "You will be redirected";

  let path = props.mountCollection ? "/logout" : "/login";

  return (
    <div>
      <a href={props.uri + path}>{message}</a>
      <br />
      {redirect}
    </div>
  );
}
