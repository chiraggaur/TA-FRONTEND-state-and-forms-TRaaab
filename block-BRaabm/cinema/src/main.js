import React from "react";
import Data from "./movie.json";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return Data.map((elm) => {
      return (
        <>
          <div className="mainBox">
            <img src={elm.Poster} alt="img" className="imagePoster" />
            <h1>{elm.Title}</h1>
            <div className="dateBox">
              <p>
                <span> Realeasing </span> <br />
                {elm.Released}
              </p>
            </div>
          </div>
        </>
      );
    });
  }
}

export default Main;
