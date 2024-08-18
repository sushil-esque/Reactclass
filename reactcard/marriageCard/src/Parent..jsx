/* eslint-disable react/prop-types */
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
function Parent(props) {
    return (
      <div >
        <Child2 change={props.change} />
        <Child1 changeFunction={props.changeFunction} />
        <Child3 changeFunction2={props.changeFunction2}/>

      </div>
    );
  }
  export default Parent