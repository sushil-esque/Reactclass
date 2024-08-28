import Header from "./Header"
import "./App.css"
import Footer from "./Footer"
import Home from "./Home"
import { useState } from "react";
import Map from "./Map";

function App() {
  const[routes, setRoute]= useState(<Home/>);
  return (<>
  {/* <Header setRoute={setRoute}/>
  {routes}
  <Footer/> */}
  <Map/>
  </>
    
    
  )
}

export default App