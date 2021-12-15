import React, { Component } from "react";

export class HeaderComponent extends Component {
  render() {
    return (
      <>
        <h4
          style={{
            marginBlockStart: "0em",
            marginBlockEnd: "1em",
            paddingLeft: "2em",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <i>
            {this.props.heading}
            _______________________________________________________________________
          </i>
        </h4>
      </>
    );
  }
}

export default HeaderComponent;
