import React, { Component } from "react";
import "./Kocka.css";

class Kocka extends Component {
  render() {
    return (
      <div>
        <i
          className={`Kocka fas fa-dice-${this.props.lice} ${
            this.props.mesanje ? "shaking" : ""
          }`}
        />
      </div>
    );
  }
}

export default Kocka;
