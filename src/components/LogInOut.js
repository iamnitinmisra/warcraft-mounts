import React from "react";

export default function LogInOut(props) {
  let message = props.body.mounts ? "Sign out" : `Sign in`;

  let redirect = props.body.mounts ? "" : "You will be redirected";

  let path = props.body.mounts ? "/logout" : "/login";

  return (
    <div>
      <a href={props.uri + path}>{message}</a>
      <br />
      {redirect}
    </div>
  );
}
