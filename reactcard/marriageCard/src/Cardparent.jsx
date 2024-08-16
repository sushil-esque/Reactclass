import { useState } from "react";
import Card from "./Card"

   


   
function Cardparent() {
    const [wed, setWed] =useState({
        groomName:"Hari",
         fatherName:"Ram", 
         brideName:"Sita",
          brideFatherName:"Badal",
          venue:"Banepa Party Palace",
        });
        function change(){
        setWed ({
            groomName:"Ramu",
           fatherName:"Samir", 
           brideName:"Priyanka ",
            brideFatherName:"Biku Lal",
            venue:"Araniko Party Palace",
          })}

  return (
    <div className="cards">
      <Card data={wed} />
      <button onClick={change}>change</button>
      
    </div>
  )
}

export default Cardparent