import React, { Component } from "react";

export class EditExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.company = React.createRef();
    this.role = React.createRef();
    this.responsibility = React.createRef();
    this.duration = React.createRef();
  }

  submitHandler1 = (e) => {
    e.preventDefault();
    const id = this.props.id;
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

    this.props.updateExperienceDetails(experience);
  };

  deleteHandler = (e) => {
    this.props.isExperienceDeleted(e.target.value);
  };

  render() {
    return (
      <div id="formTag">
        <form onSubmit={this.submitHandler1}>
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
          <button onClick={this.deleteHandler} value={this.props.id}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

export default EditExperienceForm;
