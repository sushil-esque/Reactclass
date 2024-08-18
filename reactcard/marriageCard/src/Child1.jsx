/* eslint-disable react/prop-types */

function Child1(props) {
  return (
    <div>
      <button onClick={props.changeFunction}>Change me to blue</button>
    </div>
  );
}
export default Child1