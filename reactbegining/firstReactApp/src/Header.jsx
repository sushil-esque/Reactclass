

function Header() {
  return (
    <header>
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="">Blog</a></li>
          </ul>
          <div className="account">
            <button className="login">Log in</button>
            <button className="createaccount">Create account</button>
          </div>
        </nav>
      </header>
  )
}

export default Header