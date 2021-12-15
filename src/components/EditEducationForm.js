import React, { Component } from "react";

export class EditEducationForm extends Component {
  constructor(props) {
    super(props);

    this.collegeRef = React.createRef();
    this.degreeRef = React.createRef();
    this.durationRef = React.createRef();

    this.submtHandler = this.submtHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  submtHandler(e) {
    e.preventDefault();
    const college = this.collegeRef.current.value;
    const degree = this.degreeRef.current.value;
    const duration = this.durationRef.current.value;

    let education = {
      id: this.props.id,
      college: college,
      degree: degree,
      duration: duration,
      deleteFlag: false,
      editFlag: false,
    };

    this.props.updateEducationDetails(education);
  }

  deleteHandler(e) {
    this.props.deleteEducationDetails(e.target.value);
  }

  render() {
    return (
      <>
        <form onSubmit={this.submtHandler}>
          <label htmlFor="college">College</label>
          <input
            typ="text"
            name="college"
            ref={this.collegeRef}
            defaultValue={this.props.college}
          />
          <br />
          <label htmlFor="college">Degree</label>
          <input
            typ="text"
            name="degree"
            ref={this.degreeRef}
            defaultValue={this.props.degree}
          />
          <br />
          <label htmlFor="college">Duration (ex. 2016-2020)</label>
          <input
            typ="text"
            name="duration"
            ref={this.durationRef}
            defaultValue={this.props.duration}
          />
          <br />
          <input type="submit" value="Submit" />
          <button onClick={this.deleteHandler} value={this.props.id}>
            Delete
          </button>
        </form>
      </>
    );
  }
}

export default EditEducationForm;
