import React, { Component } from "react";

class CV extends Component {
  constructor(props) {
    super(props);
  }
  generateEducation = (entities) => {
    return entities.map((entity, index) => (
      <div className="education" key={index}>
        <div className="bold">{entity.school}</div>
        <div>{entity.schoolCity}</div>
        <div>{entity.subject}</div>
        <div>
          {entity.schoolStarted}-{entity.schoolFinished}
        </div>
      </div>
    ));
  };

  generateWork = (entities) => {
    return entities.map((entity, index) => (
      <div className="work" key={index}>
        <div className="bold">{entity.company}</div>
        <div>{entity.position}</div>
        <div>{entity.workCity}</div>
        <div>
          {entity.workStarted}-{entity.workFinished}
        </div>
      </div>
    ));
  };

  render() {
    const { inputs, work, education } = this.props;
    const educ = this.generateEducation(education);
    const jobs = this.generateWork(work);

    return (
      <div className="cv">
        <h1 id="cvName">
          {inputs.firstName} {inputs.lastName}
        </h1>
        <div className="contactInfo">
          <div>{inputs.phone}</div>
          <div>{inputs.email}</div>
          <div>
            {inputs.city}, {inputs.country}
          </div>
        </div>
        <h1>DESCRIPTION</h1>
        <p>{inputs.description}</p>
        <h1>EDUCATION</h1>
        {educ}
        <h1>WORK EXPERIENCE</h1>
        {jobs}
      </div>
    );
  }
}

export default CV;
