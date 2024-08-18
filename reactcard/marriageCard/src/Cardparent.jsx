import { useState } from "react";
import Card from "./Card";

function Cardparent() {
  const [wed, setWed] = useState({
    groomName: "Hari",
    fatherName: "Ram",
    brideName: "Sita",
    brideFatherName: "Badal",
    venue: "Banepa Party Palace",
  });
  

  return (
    <div className="cards">
      <Card data={wed} setWed={setWed} />
      
    </div>
  );
}

export default Cardparent;
