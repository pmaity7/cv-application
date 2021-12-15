import React, { Component } from "react";
import EditEducationForm from "./EditEducationForm";
import EducationTemplate from "./EducationTemplate";

export class EducationSection extends Component {
  render() {
    return (
      <div>
        {this.props.education.map((item) => {
          return !item.editFlag ? (
            <EducationTemplate
              key={item.id}
              id={item.id}
              college={item.college}
              degree={item.degree}
              duration={item.duration}
              editFlag={item.editFlag}
              editEducationDetails={this.props.editEducationDetails}
            />
          ) : (
            <EditEducationForm
              key={item.id}
              id={item.id}
              college={item.college}
              degree={item.degree}
              duration={item.duration}
              deleteEducationDetails={this.props.deleteEducationDetails}
              updateEducationDetails={this.props.updateEducationDetails}
            />
          );
        })}
      </div>
    );
  }
}

export default EducationSection;
