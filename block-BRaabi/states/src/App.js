import React from "react";
import questions from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: false,
      hand: "👇🏽",
    };
  }

  render() {
    return (
      <>
        <div className="ques_wrapper">
          {questions.map((data) => {
            return (
              <>
                {this.state.state ? (
                  <>
                    <button
                      className="button-q"
                      onClick={() => {
                        return (this.setState = {
                          state: !this.state.state ? true : false,
                        });
                      }}
                    >
                      {data.Q}
                      <span className="closed">
                        {" "}
                        <button className="hand_button">
                          {" "}
                          {this.state.hand}{" "}
                        </button>{" "}
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="button-q"
                      onClick={() => {
                        return (this.setState = {
                          state: !this.state.state ? true : false,
                        });
                      }}
                    >
                      {data.Q}
                      <span className="closed">
                        {" "}
                        <button className="hand_button">
                          {" "}
                          {this.state.hand}{" "}
                        </button>{" "}
                      </span>
                    </button>
                  </>
                )}
              </>
            );
          })}
          ;
        </div>
      </>
    );
  }
}

export default App;
