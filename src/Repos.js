import React from "react";

export default function Repo(props) {
  return (
    <div>
      <a href={props.html_url} rel="norefferer">
        {props.name}
      </a>
    </div>
  );
}
