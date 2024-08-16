import { useState } from "react"

function State() {
    const [student, setStudent] = useState({
        name : "Samir",
        age : 22

    });
  
function change(){
    setStudent({name : "abishek", age : 24})
}

     
  
   
  return (
    <div>
        Name : {student.name} <br />
        age : {student.age} <br />
        <button onClick={change}>change</button>
    </div>
  )
}

export default State