import React, { Component } from "react";
import "../App.css";

export class PersonalForm extends Component {
  constructor(props) {
    super(props);

    this.nameRef = React.createRef();
    this.mobileRef = React.createRef();
    this.emailRef = React.createRef();
    this.addressRef = React.createRef();
    this.githubRef = React.createRef();
    this.linkedinRef = React.createRef();
    this.submitHandller = this.submitHandller.bind(this);
  }

  submitHandller(e) {
    e.preventDefault();
    const name = this.nameRef.current.value;
    const email = this.emailRef.current.value;
    const mobile = this.mobileRef.current.value;
    const address = this.addressRef.current.value;
    const github = this.githubRef.current.value;
    const linkedin = this.linkedinRef.current.value;
    //alert(name + " " + email + " " + mobile);
    this.props.getPersonalDetails(
      name,
      email,
      mobile,
      address,
      github,
      linkedin
    );
  }

  render() {
    return (
      <div
        style={{
          border: "transparent",
          width: "90%",
          float: "left",
          textAlign: "right",
          // backgroundColor: "rebeccapurple",
          minHeight: "10vh",
        }}
      >
        <form
          onSubmit={this.submitHandller}
          style={{
            textAlign: "left",
            marginLeft: "2em",
            marginBlockEnd: "1em",
          }}
        >
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={this.props.name}
            ref={this.nameRef}
          />
          <br />
          <label for="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            defaultValue={this.props.mobile}
            ref={this.mobileRef}
          />
          <br />

          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            defaultValue={this.props.email}
            ref={this.emailRef}
          />
          <br />
          <label for="address">Address</label>
          <input
            type="text"
            name="address"
            defaultValue={this.props.address}
            ref={this.addressRef}
          />
          <br />
          <label for="github">Github</label>
          <input
            type="text"
            name="github"
            defaultValue={this.props.github}
            ref={this.githubRef}
          />
          <br />
          <label for="linkedin">LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            defaultValue={this.props.linkedin}
            ref={this.linkedinRef}
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default PersonalForm;
