export default function ContactComponent(props) {
  return (
    <>
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
              <p>
                When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell
                your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS
                templates on our website. If you need more information, please contact us.
              </p>
              <div className="row">
                <div className="col-lg-12">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" style={{ maxWidth: '52px;' }} />
                    <h6>
                      031-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" style={{ maxWidth: '52px;' }} />
                    <h6>
                      info@cornerproperties.co.za
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form id="contact-form" action="" method="post">
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="name">Full Name</label>
                      <input type="name" name="name" id="name" placeholder="Your Name..." autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your E-mail..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="subject">Subject</label>
                      <input type="subject" name="subject" id="subject" placeholder="Subject..." autocomplete="on" />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="message">Message</label>
                      <textarea name="message" id="message" placeholder="Your Message"></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">
                        Send Message
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12">{props.map}</div>
          </div>
        </div>
      </div>
    </>
  );
}
