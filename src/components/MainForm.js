import React, { Component } from "react";
import FormEntry from "./FormEntry";
import WorkEntity from "./WorkEntity";
import EducationEntity from "./EducationEntity";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        firstName: "",
        lastName: "",
        dob: "",
        country: "",
        city: "",
        phone: "",
        email: "",
        description: "",
        school: "",
        schoolCity: "",
        subject: "",
        schoolStarted: "",
        schoolFinished: "",
        company: "",
        position: "",
        workCity: "",
        workStarted: "",
        workFinished: "",
      },
      education: [],
      work: [],
    };
  }

  handleInputChange = (id, value) => {
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        [id]: value,
      },
    }));
  };

  handleDescriptionChange = (event) => {
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        description: event.target.value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Access the form data from the state
    const { inputs } = this.state;
    // Use the form data to generate the CV or perform other actions
    console.log("CV Data:", inputs);
  };

  //education functions
  addEducation = (event) => {
    event.preventDefault();

    const educationEntry = {
      school: this.state.inputs.school,
      schoolCity: this.state.inputs.schoolCity,
      subject: this.state.inputs.subject,
      schoolStarted: this.state.inputs.schoolStarted,
      schoolFinished: this.state.inputs.schoolFinished,
    };
    this.setState((prevState) => ({
      education: [...prevState.education, educationEntry],
      inputs: {
        //...prevState.inputs,
        school: "",
        schoolCity: "",
        subject: "",
        schoolStarted: "",
        schoolFinished: "",
      },
    }));
  };

  addWork = (event) => {
    event.preventDefault();

    const workEntry = {
      company: this.state.inputs.company,
      position: this.state.inputs.position,
      workCity: this.state.inputs.workCity,
      workStarted: this.state.inputs.workStarted,
      workFinished: this.state.inputs.workFinished,
    };

    this.setState((prevState) => ({
      work: [...prevState.work, workEntry],
      inputs: {
        ...prevState.inputs,
        company: "",
        position: "",
        workCity: "",
        workStarted: "",
        workFinished: "",
      },
    }));
  };

  render() {
    return (
      <div className="mainForm">
        <form>
          <h2>General Info</h2>
          <FormEntry
            text="First Name: "
            id="firstName"
            placeholder="Davey"
            onChange={this.handleInputChange}
            value={this.state.inputs.firstName}
          />
          <FormEntry
            text="Last Name: "
            id="lastName"
            placeholder="Jones"
            onChange={this.handleInputChange}
            value={this.state.inputs.lastName}
          />
          <FormEntry
            text="Date of birth: "
            id="dob"
            placeholder="25-12-1995"
            onChange={this.handleInputChange}
            value={this.state.inputs.dob}
          />
          <FormEntry
            text="City: "
            id="city"
            placeholder="Toronto"
            onChange={this.handleInputChange}
            value={this.state.inputs.city}
          />
          <FormEntry
            text="Country: "
            id="country"
            placeholder="Canada"
            onChange={this.handleInputChange}
            value={this.state.inputs.country}
          />
          <FormEntry
            text="Email: "
            id="email"
            placeholder="daveyjones@locker.com"
            onChange={this.handleInputChange}
            value={this.state.inputs.email}
          />
          <FormEntry
            text="Phone number: "
            id="phone"
            placeholder="555-123-4567"
            onChange={this.handleInputChange}
            value={this.state.inputs.phone}
          />
          <div>
            <textarea
              id="description"
              placeholder="write about yourself"
              onChange={this.handleDescriptionChange}
            ></textarea>
          </div>
        </form>

        <h2>Education</h2>
        <EducationEntity education={this.state.education} />
        <form onSubmit={this.addEducation}>
          <FormEntry
            text="School Name: "
            id="school"
            placeholder="Harvard"
            onChange={this.handleInputChange}
            value={this.state.inputs.school}
          />
          <FormEntry
            text="City: "
            id="schoolCity"
            placeholder="Boston"
            onChange={this.handleInputChange}
            value={this.state.inputs.schoolCity}
          />
          <FormEntry
            text="Subject: "
            id="subject"
            placeholder="Chemistry"
            onChange={this.handleInputChange}
            value={this.state.inputs.subject}
          />
          <FormEntry
            text="Year Started: "
            id="schoolStarted"
            placeholder="2016"
            onChange={this.handleInputChange}
            value={this.state.inputs.schoolStarted}
          />
          <FormEntry
            text="Year Finished: "
            id="schoolFinished"
            placeholder="2020"
            onChange={this.handleInputChange}
            value={this.state.inputs.schoolFinished}
          />
          <button type="submit" id="btn-education" className="btn-add">
            add
          </button>
        </form>
        <h2>Work Experience</h2>
        <WorkEntity work={this.state.work} />
        <form onSubmit={this.addWork}>
          <FormEntry
            text="Company: "
            id="company"
            placeholder="Pizza Hut"
            onChange={this.handleInputChange}
            value={this.state.inputs.company}
          />
          <FormEntry
            text="Position: "
            id="position"
            placeholder="Manager"
            onChange={this.handleInputChange}
            value={this.state.inputs.position}
          />
          <FormEntry
            text="City: "
            id="workCity"
            placeholder="Boston"
            onChange={this.handleInputChange}
            value={this.state.inputs.workCity}
          />
          <FormEntry
            text="Year Started: "
            id="workStarted"
            placeholder="2016"
            onChange={this.handleInputChange}
            value={this.state.inputs.workStarted}
          />
          <FormEntry
            text="Year Finished: "
            id="workFinished"
            placeholder="2020"
            onChange={this.handleInputChange}
            value={this.state.inputs.workFinished}
          />
          <button type="submit" id="btn-work" className="btn-add">
            add
          </button>
        </form>
        <button type="button" id="btn-generate" onClick={this.handleSubmit}>
          Generate CV
        </button>
      </div>
    );
  }
}

export default MainForm;
