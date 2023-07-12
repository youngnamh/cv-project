import React, { Component } from "react";

class WorkEntity extends Component {
  constructor(props) {
    super(props);
  }

  generateEntities = (entities) => {
    return entities.map((entity, index) => (
      <div className="workEntity" key={index}>
        <div>{entity.company}</div>
        <div>{entity.position}</div>
        <div>{entity.workCity}</div>
        <div>{entity.workStarted}</div>
        <div>{entity.workFinished}</div>
      </div>
    ));
  };

  render() {
    const { work } = this.props;
    const allEntities = this.generateEntities(work);

    return <div className="container">{allEntities}</div>;
  }
}

export default WorkEntity;
