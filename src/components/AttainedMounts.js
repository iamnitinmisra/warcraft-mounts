import React from "react";

export default function AttainedMounts(props) {
  const { mountCollection, status200 } = props;
  let message = status200
    ? `You have ${mountCollection.length} mounts`
    : "sign in please";

  return <div>{message}</div>;
}
