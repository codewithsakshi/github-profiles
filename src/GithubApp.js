import React from "react";
import UserCard from "./UserCard";
import UserInput from "./UserInput";
import Repos from "./Repos";

const APIURL = "https://api.github.com/users/";

// async function getRepos(props) {
//   const res = await fetch(props + "/repos?sort=created");
//   const repos = await res.json();
//   repos.slice(0, 5).forEach((repo) => {
//     // <Repos repo={repo} />;
//   });
// }

export default class GithubApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(searchText) {
    const url = `${APIURL}${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const {
          avatar_url,
          bio,
          name,
          followers,
          following,
          public_repos
        } = data;
        const user = {
          avatar_url,
          bio,
          name,
          followers,
          following,
          public_repos
        };
        this.setState({ user });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <UserInput onSubmit={this.onSubmit} />
        <hr />
        {Object.keys(user).length > 0 && <UserCard user={user} />}
      </div>
    );
  }
}
