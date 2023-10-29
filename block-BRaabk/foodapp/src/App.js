import data from "./data.json";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "all",
    };
  }
  render() {
    return (
      <>
        <div className="Header">
          <h1>Our Menu </h1>
        </div>
        <div className="filterBox">
          {["all", "breakfast", "lunch", "shakes"].map((item) => {
            return (
              <>
                <button
                  onClick={() => {
                    return this.setState({
                      cat: item,
                    });
                  }}
                >
                  {item}
                </button>
              </>
            );
          })}
        </div>
        <div className="listing">
          {data.map((list) => {
            return (
              <>
                {this.state.cat === list.category ? (
                  <div className="items Box" key={list.id}>
                    <p>{list.category}</p>
                  </div>
                ) : (
                  <div className="items Box" key={list.id}>
                    <p>{list.id}</p>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </>
    );
  }
}

export default App;
