import TopBarComponent from './TopBarComponent';
import NavBarComponent from './NavBarComponent';
import ContactComponent from './ContactComponent';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
export default function ContactPage() {
  const map = (
    <div id="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6919.993778589805!2d31.01931959349528!3d-29.864363550058815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7a9b674b2723b%3A0x491a0dd583208ad3!2sWeThinkCode_!5e0!3m2!1sen!2sza!4v1710851820567!5m2!1sen!2sza"
        width="100%"
        height="450"
        style={{ border: '0', borderRadius: '10px', boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.15)' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
  return (
    <>
      <TopBarComponent />
      <NavBarComponent />
      <HeaderComponent pageTitle="Contact Us" page="Contact" />
      <ContactComponent map={map} />
      <FooterComponent />
    </>
  );
}
