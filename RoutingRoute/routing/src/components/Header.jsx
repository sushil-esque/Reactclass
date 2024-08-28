
import { NavLink } from "react-router-dom";

function Header() {


  return (
    <div style={{ background: "white" }}>
      <nav>
        <ul>
          <NavLink to={"/home"}>
          <li>Home</li>

          </NavLink>

          <NavLink  to={"/about"}>
          <li>About</li>
           </NavLink>
          <NavLink to={"/contact"}>
          <li>Contact</li>

          </NavLink>
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
