import React, { Component } from "react";

export class ExperienceTemplate extends Component {
  editHandler = () => {
    this.props.editExperienceDiv(this.props.id);
  };
  render() {
    return (
      <div
        onClick={this.editHandler}
        style={{
          border: "transparent",
          width: "90%",
          float: "left",
          // backgroundColor: "rebeccapurple",
          minHeight: "10vh",
          marginLeft: "2em",
          color: "black",
        }}
      >
        <h4
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "0em",
            marginLeft: "2em",
          }}
        >
          {this.props.company}
        </h4>
        <p
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "0em",
            marginLeft: "2em",
          }}
        >
          {this.props.role}
        </p>
        <p
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "0em",
            marginLeft: "2em",
          }}
        >
          {this.props.duration}
        </p>
        <p
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "0em",
            marginLeft: "2em",
          }}
        >
          <i>Responsibilities</i>
        </p>
        <ul
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "1em",
            marginLeft: "2em",
          }}
        >
          {
            /* {this.props.responsibility} */
            this.props.responsibility.map((item) => (
              <li>{item}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ExperienceTemplate;
