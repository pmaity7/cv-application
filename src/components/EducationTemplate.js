import React, { Component } from "react";

export class EducationTemplate extends Component {
  constructor(props) {
    super(props);

    this.editHandler = this.editHandler.bind(this);
  }

  editHandler() {
    this.props.editEducationDetails(this.props.id);
  }

  render() {
    return (
      <>
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
            {this.props.college}
          </h4>
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: "2em",
            }}
          >
            {this.props.degree}
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
        </div>
      </>
    );
  }
}

export default EducationTemplate;
