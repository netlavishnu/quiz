import React, { Component } from "react";

export default class Questions extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.data[this.props.i].Q}</h1>
      </div>
    );
  }
}
