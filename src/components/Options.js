import React, { Component } from "react";

export default class Options extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.data[this.props.i].Ans.map((option) => (
            <div>
              <input type="radio" name="radio" />
              <label>{option}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
