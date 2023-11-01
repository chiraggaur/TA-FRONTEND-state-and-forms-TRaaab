import React from "react";
import FontsData from "./fontsData";
class Fonts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      size: "20px",
    };
  }

  fontSize = (event) => {
    return this.setState({
      size: event.target.value + "px",
    });
  };
  fontName = (event) => {
    return this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="Header">
          <input
            className="fontInput"
            placeholder="type something"
            onChange={this.fontName}
          />
          <div className="sliderBox">
            <p>
              {this.state.size}
              {this.state.code}
            </p>
            <input
              className="rangeInput"
              type="range"
              defaultValue={20}
              max={100}
              min={0}
              onChange={this.fontSize}
            />
          </div>
        </div>
        <div className="fontsContainer">
          <FontsData input={this.state.input} size={this.state.size} />
        </div>
      </>
    );
  }
}

export default Fonts;
