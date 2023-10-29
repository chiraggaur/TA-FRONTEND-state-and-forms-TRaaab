import data from "./data.json";
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "",
    };
  }

  handleClick(list) {
    if (this.state.cat === "all") {
      return (
        <>
          <div className="foodDetails">
            <div className="image">
              <img src={list.img} alt="foodimage" />
            </div>
            <div className="context">
              <h2> {list.title}</h2>
              <p>{list.price}</p>
              <p> {list.desc}</p>
            </div>
          </div>
        </>
      );
    } else if (this.state.cat === list.category) {
      return (
        <>
          <div className="foodDetails">
            <div className="image">
              <img src={list.img} alt="foodimage" />
            </div>
            <div className="context">
              <h2> {list.title}</h2>
              <p>{list.price}</p>
              <p> {list.desc}</p>
            </div>
          </div>
        </>
      );
    } else {
      return null;
    }
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
            return <>{this.handleClick(list)}</>;
          })}
        </div>
      </>
    );
  }
}

export default App;
