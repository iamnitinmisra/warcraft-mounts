import React from "react";

export default function LogInOut(props) {
  let message = props.body.token ? "Sign out" : `Sign in`;

  let redirect = props.body.token ? "" : "You will be redirected";

  let path = props.body.token ? "/logout" : "/login";

  return (
    <div>
      <a href={props.uri + path}>{message}</a>
      <br />
      {redirect}
    </div>
  );
}
