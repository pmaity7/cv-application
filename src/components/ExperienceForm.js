import React, { Component } from "react";
import uniqid from "uniqid";

export class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: uniqid(),
    };

    this.company = React.createRef();
    this.role = React.createRef();
    this.responsibility = React.createRef();
    this.duration = React.createRef();
  }

  submitHandler = (e) => {
    e.preventDefault();
    const id = this.state.id;
    const com = this.company.current.value;
    const role = this.role.current.value;
    const res = this.responsibility.current.value.split(",");
    const dura = this.duration.current.value;

    let experience = {
      id: id,
      company: com,
      role: role,
      responsibility: res,
      duration: dura,
      deleteFlag: false,
      editFlag: false,
    };
    this.props.getExperienceDetails(experience);
  };

  render() {
    return (
      <div
        style={{
          border: "transparent",
          width: "90%",
          float: "left",
          // backgroundColor: "rebeccapurple",
          minHeight: "10vh",
        }}
      >
        <form
          onSubmit={this.submitHandler}
          style={{
            textAlign: "left",
            marginLeft: "2em",
          }}
        >
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            defaultValue={this.props.company}
            ref={this.company}
          />
          <br />
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            defaultValue={this.props.role}
            ref={this.role}
          />
          <br />
          <label htmlFor="duration">Duration(ex. 2015-2017)</label>
          <input
            type="text"
            name="duration"
            defaultValue={this.props.duration}
            ref={this.duration}
          />
          <br />
          <label htmlFor="responsibilities">
            Responsibilities(Add in comma seperated form)
          </label>
          <input
            type="textarea"
            name="responsibilities"
            defaultValue={this.props.responsibility}
            ref={this.responsibility}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ExperienceForm;
