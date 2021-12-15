import React, { Component } from "react";
import EditExperienceForm from "./EditExperienceForm";
import ExperienceTemplate from "./ExperienceTemplate";

export class ExperienceSection extends Component {
  render() {
    return (
      <div>
        {this.props.experience.map((item) => {
          return (
            <div>
              {!item.editFlag ? (
                <ExperienceTemplate
                  key={item.id}
                  id={item.id}
                  company={item.company}
                  role={item.role}
                  duration={item.duration}
                  responsibility={item.responsibility}
                  editFlag={item.editFlag}
                  editExperienceDiv={this.props.editExperienceDiv}
                />
              ) : (
                <EditExperienceForm
                  updateExperienceDetails={this.props.updateExperienceDetails}
                  isExperienceDeleted={this.props.isExperienceDeleted}
                  key={item.id}
                  id={item.id}
                  company={item.company}
                  role={item.role}
                  duration={item.duration}
                  responsibility={item.responsibility}
                  editFlag={item.editFlag}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExperienceSection;
