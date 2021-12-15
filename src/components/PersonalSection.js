import React, { Component } from "react";
import PersonalForm from "./PersonalForm";
import PersonalTemplate from "./PersonalTemplate";

export class PersonalSection extends Component {
  render() {
    return (
      <>
        {this.props.isNameEdit ? (
          <PersonalForm
            name={this.props.name}
            mobile={this.props.mobile}
            email={this.props.email}
            address={this.props.address}
            github={this.props.github}
            linkedin={this.props.linkedin}
            getPersonalDetails={this.props.getPersonalDetails}
          />
        ) : (
          <PersonalTemplate
            name={this.props.name}
            mobile={this.props.mobile}
            email={this.props.email}
            address={this.props.address}
            github={this.props.github}
            linkedin={this.props.linkedin}
            isNameEdit={this.props.isNameEdit}
            editPersonalDetails={this.props.editPersonalDetails}
          />
        )}
      </>
    );
  }
}

export default PersonalSection;
