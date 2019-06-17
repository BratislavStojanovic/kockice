import React, { Component } from "react";
import Kocka from "./Kocka";
import "./BacanjeKockica.css";

class BacanjeKockica extends Component {
  static defaultProps = {
    strane: ["one", "two", "three", "four", "five", "six"]
  };

  constructor(props) {
    super(props);
    this.state = {
      kocka1: "one",
      kocka2: "one",
      bacanje: false
    };
  }

  bacanje = () => {
    const Novakocka1 = this.props.strane[
      Math.floor(Math.random() * this.props.strane.length)
    ];

    const Novakocka2 = this.props.strane[
      Math.floor(Math.random() * this.props.strane.length)
    ];

    this.setState({
      kocka1: Novakocka1,
      kocka2: Novakocka2,
      bacanje: true
    });
    // cekati 1s , zatim podesiti bacanje na false
    setTimeout(() => {
      this.setState({
        bacanje: false
      });
    }, 1000);
  };

  render() {
    return (
      <div className="wraper">
        <div className="container">
          <Kocka lice={this.state.kocka1} mesanje={this.state.bacanje} />
          <Kocka lice={this.state.kocka2} mesanje={this.state.bacanje} />
        </div>
        <button onClick={this.bacanje} disabled={this.state.bacanje}>
          {this.state.bacanje ? "Bacanje...." : "Baci kockice!!"}
        </button>
      </div>
    );
  }
}

export default BacanjeKockica;
