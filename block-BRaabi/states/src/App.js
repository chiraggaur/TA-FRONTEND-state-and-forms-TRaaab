import React from "react";
import questions from "./data";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: null,
    };
  }

  render() {
    return (
      <>
        <div className="ques_wrapper">
          {questions.map((data, index) => {
            return (
              <>
                <button
                  className="button-q"
                  onClick={() => {
                    return this.setState({
                      state: this.state.state === index ? null : index,
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
                {this.state.state === index ? (
                  <div className="answerBox">
                    <p>{data.A}</p>
                  </div>
                ) : null}
              </>
            );
          })}
          ;
        </div>
      </>
    );
  }
}

export default Test;
