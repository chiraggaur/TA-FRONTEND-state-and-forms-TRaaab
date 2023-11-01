import React from "react";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // methods
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Input-Fields</h1>
        <form>
          <label htmlFor="textInput">Text Input </label>
          <input type="Text" id="textInput" className="Field"></input>
          <label htmlFor="dateInput">Date Input </label>
          <input type="Date" id="dateInput" className="Field"></input>
          <label htmlFor="textInput">File Input </label>
          <input type="File" id="textInput" className="Field"></input>
          <label htmlFor="textInput">Read-Only Input </label>
          <input type="Text" id="textInput" readOnly className="Field"></input>
          <label htmlFor="textInput">Disabled Input </label>
          <input type="Text" id="textInput" className="Field" disabled></input>
          <label htmlFor="textArea">Textarea </label>
          <textarea id="textArea" className="Field"></textarea>
          <label htmlFor="textArea">Textarea Disabled </label>
          <textarea id="textArea" className="Field" disabled></textarea>
        </form>
      </>
    );
  }
}
export default Input;
