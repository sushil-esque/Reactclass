/* eslint-disable react/prop-types */
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

// eslint-disable-next-line react/prop-types
function Header(props) {
  function routeHome() {
    props.setRoute(<Home />);
  }
  function routeAbout() {
    props.setRoute(<About />);
  }
  function routeContact() {
    props.setRoute(<Contact />);
  }
  return (
    <div style={{ background: "white" }}>
      <nav>
        <ul>
          <li onClick={routeHome}>Home</li>
          <li onClick={routeAbout}>About</li>
          <li onClick={routeContact}>Contact</li>
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
