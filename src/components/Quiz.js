import React, { Component } from "react";
import Questions from "./Questions";
import Options from "./Options";
import Buttons from "./Buttons";

export default class Quiz extends Component {
  state = {
    data: [
      {
        Q: "What is the current year",
        Ans: ["2010", "2020", "2013", "2009"],
        correctAnswer: "2020",
      },
      {
        Q: "What is the current month",
        Ans: ["jan", "mar", "june", "nov"],
        correctAnswer: "nov",
      },
      {
        Q: "What is your name",
        Ans: ["vishnu", "rushi", "vijay", "ramu"],
        correctAnswer: "vishnu",
      },
    ],
    i: 0,
  };
  previous = () => {
    if (this.state.i == 0) {
      this.setState({ i: this.state.data.length - 1 });
    } else {
      this.setState({ i: this.state.i - 1 });
    }
  };
  next = () => {
    if (this.state.i == this.state.data.length - 1) {
      this.setState({ i: 0 });
    } else {
      this.setState({ i: this.state.i + 1 });
    }
  };
  submit = () => {
    alert(`The Answer is ${this.state.data[this.state.i].correctAnswer}`);
  };
  render() {
    return (
      <div>
        <Questions data={this.state.data} i={this.state.i} />
        <Options data={this.state.data} i={this.state.i} />
        <Buttons
          previous={this.previous}
          next={this.next}
          submit={this.submit}
        />
      </div>
    );
  }
}
