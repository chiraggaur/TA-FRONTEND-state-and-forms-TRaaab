import React from "react";
import Data from "./movie.json";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
    };
  }

  onMouseEnter = () => {
    this.setState({
      isHovering: true,
    });
  };
  onMouseLeave = () => {
    this.setState({
      isHovering: false,
    });
  };

  render() {
    return Data.map((elm) => {
      const { isHovering } = this.state;
      return (
        <>
          <div
            className="mainBox"
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            {isHovering ? (
              <>
                <img src={elm.Poster} alt="img" className="imagePoster" />
                <h1>{elm.Title}</h1>
                <div className="dateBox">
                  <p>
                    <span> Realeasing </span> <br />
                    {elm.Released}
                  </p>
                </div>
                <div className="moreInfo">
                  <a href="/moreInfo.js" className="infohref">
                    <h3 onClick={() => {}}> More Info </h3>
                  </a>
                </div>
              </>
            ) : (
              <>
                <img src={elm.Poster} alt="img" className="imagePoster" />
                <h1>{elm.Title}</h1>
                <div className="dateBox">
                  <p>
                    <span> Realeasing </span> <br />
                    {elm.Released}
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      );
    });
  }
}

export default Main;
