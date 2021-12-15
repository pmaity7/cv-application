import React, { Component } from "react";

export class PersonalTemplate extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.editPersonalDetails(true);
  }
  render() {
    return (
      <div onClick={this.onClickHandler} style={{ float: "center" }}>
        <div
          style={{
            border: "transparent",
            marginLeft: "2em",
            borderRight: "transparent",
            width: "45%",
            float: "left",
            // backgroundColor: "rebeccapurple",
            minHeight: "10vh",
            maxHeight: "30vh",
            marginBlockEnd: "1em",
            color: "black",
          }}
        >
          <h3
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: "1em",
            }}
          >
            {this.props.name}
          </h3>
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: "1em",
            }}
          >
            {this.props.email}
          </p>
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginLeft: "1em",
            }}
          >
            {this.props.mobile}
          </p>
        </div>
        <div
          style={{
            border: "transparent",
            borderLeft: "transparent",
            width: "45%",
            float: "left",
            textAlign: "left",
            // backgroundColor: "rebeccapurple",
            minHeight: "10vh",
            marginBlockEnd: "1em",
            color: "black",
          }}
        >
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginRight: "1em",
            }}
          >
            {this.props.address}
          </p>
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginRight: "1em",
            }}
          >
            {this.props.github}
          </p>
          <p
            style={{
              marginBlockStart: "0em",
              marginBlockEnd: "0em",
              marginRight: "1em",
            }}
          >
            {this.props.linkedin}
          </p>
        </div>
      </div>
    );
  }
}

export default PersonalTemplate;
