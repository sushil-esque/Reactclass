/* eslint-disable react/prop-types */
import "./Card.css";
function Card({ data, setWed}) {
  function change() {
    setWed({
      groomName: "Ramu",
      fatherName: "Samir",
      brideName: "Priyanka ",
      brideFatherName: "Biku Lal",
      venue: "Araniko Party Palace",
    });
  }
  return (
    <div className="container">
      <div className="card">
        <h1>Marriage Ceremony</h1>
        <h3>
          {data.groomName}(Son of {data.fatherName})
        </h3>
        <h4>weds</h4>
        <h3>
          {data.brideName}(Daughter of {data.brideFatherName})
        </h3>
        <h4>Venue:{data.venue}</h4>
        <button onClick={change}>change</button>
        
        
      </div>
    </div>
  );
}

export default Card;
