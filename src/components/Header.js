import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <h1 id="title">CV Creator</h1>
      </div>
    );
  }
}

export default Header;
