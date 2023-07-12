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
    const educationEntry = {
      school: this.state.inputs.school,
      schoolCity: this.state.inputs.schoolCity,
      subject: this.state.inputs.subject,
      schoolStarted: this.state.inputs.schoolStarted,
      schoolFinished: this.state.inputs.schoolFinished,
    };
    this.setState((prevState) => ({
      inputs: {
        ...prevState.inputs,
        school: "",
        schoolCity: "",
        subject: "",
        schoolStarted: "",
        schoolFinished: "",
      },
      education: [...prevState.education, educationEntry],
    }));
    event.preventDefault();
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
      inputs: {
        ...prevState.inputs,
        company: "",
        position: "",
        workCity: "",
        workStarted: "",
        workFinished: "",
      },
      work: [...prevState.work, workEntry],
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
          />
          <FormEntry
            text="Last Name: "
            id="lastName"
            placeholder="Jones"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Date of birth: "
            id="dob"
            placeholder="25-12-1995"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="City: "
            id="city"
            placeholder="Toronto"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Country: "
            id="country"
            placeholder="Canada"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Email: "
            id="email"
            placeholder="daveyjones@locker.com"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Phone number: "
            id="phone"
            placeholder="555-123-4567"
            onChange={this.handleInputChange}
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
        <div className="educationContainer"></div>
        <form onSubmit={this.addEducation}>
          <FormEntry
            text="School Name: "
            id="school"
            placeholder="Harvard"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="City: "
            id="schoolCity"
            placeholder="Boston"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Subject: "
            id="subject"
            placeholder="Chemistry"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Year Started: "
            id="schoolStarted"
            placeholder="2016"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Year Finished: "
            id="schoolFinished"
            placeholder="2020"
            onChange={this.handleInputChange}
          />
          <button type="submit" id="btn-education" className="btn-add">
            add
          </button>
        </form>
        <h2>Work Experience</h2>
        <div className="workContainer"></div>
        <form onSubmit={this.addWork}>
          <FormEntry
            text="Company: "
            id="company"
            placeholder="Pizza Hut"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Position: "
            id="position"
            placeholder="Manager"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="City: "
            id="workCity"
            placeholder="Boston"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Year Started: "
            id="workStarted"
            placeholder="2016"
            onChange={this.handleInputChange}
          />
          <FormEntry
            text="Year Finished: "
            id="workFinished"
            placeholder="2020"
            onChange={this.handleInputChange}
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
