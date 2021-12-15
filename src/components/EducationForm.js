import React, { Component } from "react";
import uniqid from "uniqid";

export class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = { id: uniqid() };

    this.collegeRef = React.createRef();
    this.degreeRef = React.createRef();
    this.durationRef = React.createRef();

    this.submtHandler = this.submtHandler.bind(this);
  }

  submtHandler(e) {
    e.preventDefault();
    const college = this.collegeRef.current.value;
    const degree = this.degreeRef.current.value;
    const duration = this.durationRef.current.value;

    let education = {
      id: this.state.id,
      college: college,
      degree: degree,
      duration: duration,
      deleteFlag: false,
      editFlag: false,
    };

    this.props.getEducationDetails(education);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submtHandler}>
          <label htmlFor="college">College</label>
          <input typ="text" name="college" ref={this.collegeRef} />
          <br />
          <label htmlFor="college">Degree</label>
          <input typ="text" name="degree" ref={this.degreeRef} />
          <br />
          <label htmlFor="college">Duration (ex. 2016-2020)</label>
          <input typ="text" name="duration" ref={this.durationRef} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default EducationForm;
