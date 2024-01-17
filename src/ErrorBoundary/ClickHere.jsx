import React from "react";

class ClickHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.setCounter = this.setCounter.bind(this);
  }

  setCounter() {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  }

  render() {
    if (this.state.counter === this.props.triggerOnClick) {
      throw new Error("click reached limit");
    }
    return (
      <div className="click-here">
        <button onClick={this.setCounter}>
        Click me!
        </button>
        Clicked times {this.state.counter}
       </div>
    );
  }
}

export default ClickHere;
