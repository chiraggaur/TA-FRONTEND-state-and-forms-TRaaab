import React from "react";
import logo from "./assets/basketball.jpg"; // with import
class Button extends React.Component {
  // accepts arguments and create methods in { this } object
  constructor(props) {
    super(props);
  }
  // methods
  render() {
    return [
      <div className="Wrapper_Container">
        <div className="Button_Container">
          <button
            className="button"
            onClick={() => {
              return <image src={logo} className="Image_container" />;
            }}
          >
            {this.props.name}
          </button>
          <button
            className="button"
            onClick={() => {
              return this.State.Image;
            }}
          >
            PubG
          </button>
          <button className="button"> Tiger </button>
          <button className="button"> Phone </button>
          <button className="button"> Laptop </button>
          <button className="button"> Cricket </button>
        </div>
      </div>,
    ];
  }
}

export default Button;
