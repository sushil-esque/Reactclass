import { useState } from "react"
import Parent from "./Parent.";

function Stateprops() {
    const [change, setChange] = useState({
      background: "red",
      color: "white",
    });
  
  
    function changeFunction() {
      setChange({
        background: "blue",
        color: "black",
      });
    }
    function changeFunction2() {
        setChange({
            background: "red",
            color: "white",
        });
      }
  
  
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Parent changeFunction={changeFunction} changeFunction2={changeFunction2} change={change} />
      </div>
    );
  }
  

  

  

  
  export default Stateprops;