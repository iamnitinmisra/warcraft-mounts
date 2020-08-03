import React from "react";

export default function LogInOut(props) {
  const { mountCollection } = props;

  let message = mountCollection ? "Sign out" : `Sign in`;
  let redirect = mountCollection ? "" : "You will be redirected";
  let path = mountCollection ? "/logout" : "/login";

  return (
    <div>
      <a href={props.uri + path}>{message}</a>
      <br />
      {redirect}
    </div>
  );
}
