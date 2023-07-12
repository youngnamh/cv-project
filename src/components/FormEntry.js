import React, { Component } from "react";

class FormEntry extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    const { id, onChange } = this.props;
    const value = event.target.value;
    onChange(id, value);
  };

  render() {
    const { text, id, placeholder, value } = this.props;

    return (
      <div className="formEntry">
        <label htmlFor={id}>{text} </label>
        <input
          type="text"
          id={id}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={value}
        ></input>
      </div>
    );
  }
}

export default FormEntry;
