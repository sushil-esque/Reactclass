import Card from "./Card"
const wed1 ={
groomName:"Hari",
 fatherName:"Ram", 
 brideName:"Sita",
  brideFatherName:"Badal",
  venue:"Banepa Party Palace"
};
const wed2 ={
  groomName:"Ramu",
 fatherName:"Samir", 
 brideName:"Priyanka ",
  brideFatherName:"Biku Lal",
  venue:"Araniko Party Palace",
}
function App() {
  return (
    <div className="cards">
      <Card data={wed1}/>
      <Card data={wed2}/>
    </div>
  )
}

export default App