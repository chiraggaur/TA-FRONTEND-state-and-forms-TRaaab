import React from "react";
import Main from "./main";
function Home(props) {
  return (
    <>
      <div className="wrapperBox">
        <div className="sideBar">
          <div className="sideMenu">
            <button className="button-nav">Home</button>
            <hr className="row" />
            <button className="button-nav">Contact</button>
            <hr className="row" />
            <button className="button-nav">About</button>
            <hr className="row" />
          </div>
          <div className="footer">
            <hr className="row" />
            <button className="button-nav">Hide</button>
          </div>
        </div>
        <div className="mainContent">
          <Main />
        </div>
      </div>
    </>
  );
}

export default Home;
