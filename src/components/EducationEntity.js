import React, { Component } from "react";

class EducationEntity extends Component {
  constructor(props) {
    super(props);
  }

  generateEntities = (entities) => {
    return entities.map((entity, index) => (
      <div className="entity" key={index}>
        <div>{entity.school}</div>
        <div>{entity.schoolCity}</div>
        <div>{entity.subject}</div>
        <div>
          {entity.schoolStarted}-{entity.schoolFinished}
        </div>
      </div>
    ));
  };

  render() {
    const { education } = this.props;
    const allEntities = this.generateEntities(education);

    return <div className="container">{allEntities}</div>;
  }
}

export default EducationEntity;
