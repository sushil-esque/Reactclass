
function Contact() {
    return (
      <main>
          <div className="contact-page">
            <div className="left">
              <div className="contact-image">
                <img src="conimage.png" alt="" />
              </div>
              <div className="list">
                <h2>How can we Help</h2>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="textss">
                <h1>Have questions</h1>
                <h1>Shoot us an email.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Expedita non fugiat ab dolores itaque alias labore, neque
                  voluptatem explicabo iusto nulla. Soluta cumque vitae possimus
                  quam quia reprehenderit dolores laboriosam fuga libero incidunt,
                  eos non, perspiciatis recusandae molestias alias nemo minus
                  sapiente, optio minima harum accusantium consequatur beatae ipsa
                  reiciendis?
                </p>
              </div>
  
              <div className="form">
                  <label htmlFor="name">Your Name*</label>
                  <input htmlFor="text" id="name"/>
                  <label htmlFor="email">Your Email*</label>
                  <input type="text" id="email"/>
                  <label htmlFor="message">Your Message*</label>
                  <textarea name="message" id="message"></textarea>
                  <button>Send us a message</button>
  
              </div>
            </div>
          </div>
        </main>
    )
  }
  
  export default Contact