import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Count: 0,
      Step: 1,
      max: "",
    };
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="text">
            <h1> {this.state.Count} </h1>
          </div>
          {/* steps  */}
          <div className="steps">
            <h2> step </h2>
            <button
              className="fiveStep" //doubt
              onClick={() => {
                return this.setState({
                  Step: 5,
                });
              }}
            >
              {" "}
              5{" "}
            </button>
            <button
              className="tenStep"
              onClick={() => {
                return this.setState({
                  Step: 10,
                });
              }}
            >
              {" "}
              10{" "}
            </button>
            <button
              className="fifteenStep"
              onClick={() => {
                return this.setState({
                  Step: 15,
                });
              }}
            >
              {" "}
              15{" "}
            </button>
          </div>
          {/* limit max */}
          <div className="limit">
            <h2> set Limit </h2>
            <button
              onClick={() => {
                return this.setState({
                  max: 15,
                });
              }}
            >
              {" "}
              15{" "}
            </button>
            <button
              onClick={() => {
                return this.setState({
                  max: 100,
                });
              }}
            >
              {" "}
              100{" "}
            </button>
            <button
              onClick={() => {
                return this.setState({
                  max: 200,
                });
              }}
            >
              {" "}
              200{" "}
            </button>
          </div>
          {/* action */}
          <div className="actions">
            <button
              className="increment"
              onClick={() => {
                return this.setState({
                  // doubt
                  Count:
                    this.state.Step > 1 && this.state.Count < this.state.max
                      ? this.state.Step + this.state.Count
                      : this.state.Count >= this.state.max
                      ? this.state.max
                      : this.state.Count + 1,
                });
              }}
            >
              {" "}
              increment{" "}
            </button>
            <button
              className="decrement"
              onClick={() => {
                return this.setState({
                  Count: this.state.Count > 0 ? this.state.Count - 1 : 0,
                });
              }}
            >
              {" "}
              decrement{" "}
            </button>
            <button
              className="reset"
              onClick={() => {
                return this.setState({
                  Count: 0,
                });
              }}
            >
              {" "}
              reset{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
