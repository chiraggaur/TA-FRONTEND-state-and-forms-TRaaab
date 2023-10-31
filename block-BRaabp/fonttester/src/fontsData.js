import Data from "./data.json";
function FontsData(props) {
  return Data.map((font, index) => {
    return (
      <>
        <div className="indivisualFont" key={index}>
          <h1
            style={{
              color: "black",
              fontSize: props.size,
              fontStyle: font.name,
            }}
          >
            {" "}
            {font.name}{" "}
          </h1>
          <p
            style={{
              color: "black",
              fontSize: props.size,
              fontStyle: font.name,
            }}
          >
            {" "}
            {font.text}
          </p>
          <p
            style={{
              color: "black",
              fontSize: props.size,
              fontStyle: font.name,
            }}
          >
            {props.input}
          </p>
        </div>
      </>
    );
  });
}

export default FontsData;
