import React from "react";

export default class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { searchText } = this.state;
    this.props.onSubmit(searchText);
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search"
            placeholder="Search a Github User"
            value={searchText}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
