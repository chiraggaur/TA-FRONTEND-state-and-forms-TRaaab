import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Active: "basketball",
    };
  }
  render() {
    let data = ["basketball", "cricket", "laptop", "phone", "pubg", "tiger"];
    return (
      <>
        <div className="Button_Container">
          {data.map((elm) => {
            return (
              <button
                key={elm}
                className={this.state.Active === elm ? "active" : "button"}
                onClick={() => {
                  this.setState({
                    Active: elm,
                  });
                }}
              >
                {elm}
              </button>
            );
          })}
        </div>
        <div className="Image_container">
          <img
            src={`./images/${this.state.Active}.jpg`}
            className="Images"
            alt={this.state.Active}
          />
        </div>
      </>
    );
  }
}
export default App;
