import React, { Component } from "react";

class WorkEntity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { company, position, workCity, workStarted, workFinished } =
      this.props;

    return (
      <div className="educationEntity">
        <div>{company}</div>
        <div>{position}</div>
        <div>{workCity}</div>
        <div>{workStarted}</div>
        <div>{workFinished}</div>
      </div>
    );
  }
}

export default WorkEntity;
