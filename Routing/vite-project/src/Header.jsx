/* eslint-disable react/prop-types */
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

// eslint-disable-next-line react/prop-types
function Header(props) {
  // function routeHome() {
  //   props.setRoute(<Home />);
  // }
  // function routeAbout() {
  //   props.setRoute(<About />);
  // }
  // function routeContact() {
  //   props.setRoute(<Contact />);
  // }
  const {setRoute} = props;

  return (
    <div style={{ background: "white" }}>
      <nav>
        <ul>
          <li onClick={()=>{setRoute(<Home/>);}}>Home</li>
          <li onClick={()=>{setRoute(<About/>);}}>About</li>
          <li onClick={()=>{setRoute(<Contact/>);}}>Contact</li>
        </ul>
        <div className="account">
            <button className="login">Log in</button>
            <button className="createaccount">Create account</button>
          </div>
      </nav>
    </div>
  );
}

export default Header;
