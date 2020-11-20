import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.previous}>
          Previous
        </button>
        <button className="button" onClick={this.props.submit}>
          Submit
        </button>
        <button className="button" onClick={this.props.next}>
          Next
        </button>
        <button className="button" onClick={this.props.submit}>
          Show Answer
        </button>
      </div>
    );
  }
}
