import React from "react";

export default function UserCard(props) {
  const {
    avatar_url,
    bio,
    name,
    followers,
    following,
    public_repos
  } = props.user;

  return (
    <div className="name">
      <div className="user-img">
        <img src={avatar_url} alt={name} />
      </div>
      <div className="user-info">
        <h2>{name}</h2>
        <p className="user-bio">{bio}</p>
        <ul>
          <li>
            {followers} <strong>Followers</strong>
          </li>
          <li>
            {following} <strong>Following</strong>
          </li>
          <li>
            {public_repos} <strong>Repos</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
