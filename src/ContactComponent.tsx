export default function ContactComponent() {
  return (
    <>
      <div className="contact section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4">
              <div className="section-heading text-center">
                <h6>| Contact Us</h6>
                <h2>Get In Touch With Our Agents</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6920.290685938447!2d31.024191578428287!3d-29.860081967386535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9b674b2723b%3A0x491a0dd583208ad3!2sWeThinkCode_!5e0!3m2!1sen!2sza!4v1710765009592!5m2!1sen!2sza"
                  width="600"
                  height="500"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="item phone">
                    <img src="assets/images/phone-icon.png" alt="" />
                    <h6>
                      010-020-0340
                      <br />
                      <span>Phone Number</span>
                    </h6>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="item email">
                    <img src="assets/images/email-icon.png" alt="" />
                    <h6>
                      info@villa.co
                      <br />
                      <span>Business Email</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
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
          </div>
        </div>
      </div>
    </>
  );
}
