import React, { Component } from "react";

class EducationEntity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { school, schoolCity, subject, schoolStarted, schoolFinished } =
      this.props;

    return (
      <div className="educationEntity">
        <div>{school}</div>
        <div>{schoolCity}</div>
        <div>{subject}</div>
        <div>{schoolStarted}</div>
        <div>{schoolFinished}</div>
      </div>
    );
  }
}

export default EducationEntity;
