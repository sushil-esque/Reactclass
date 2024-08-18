/* eslint-disable react/prop-types */
function Child2(props) {
    return (
      <div
        style={{
          height: "60px",
          width: "100px",
          background: props.change.background,
          color: props.change.color,
          border: "1px solid black",
        }}
      >
        This is Child. change my background color
      </div>
    );
  }
  export default Child2