import Header from "./Header"
import "./App.css"
import Footer from "./Footer"
import Home from "./Home"
import { useState } from "react";
function App() {
  const[routes, setRoute]= useState(<Home/>);
  return (<>
  <Header setRoute={setRoute}/>
  {routes}
  <Footer/>
  </>
    
    
  )
}

export default App