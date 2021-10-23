import "../style/footer.css";
function Footer() {
  return (
    <footer>
      <div className="top-footer">
        <div className="subscripe">
          <p>Subscribe</p>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="email"
          />
          <p>
            I would like to receive communications about Aesop products,
            services, stores, events and matters of cultural interest.
          </p>
        </div>
        <div className="footer-about">
          <h5>About</h5>
          <p>Our Story</p>
          <p>Contact Us</p>
          <p>FAQs</p>
          <p>Delivery & Returns</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="social-container">
          <div className="social">
            <h5>Social</h5>
            <p>
              <span>Instagram</span>
            </p>
            <p>
              <span>Twitter</span>
            </p>
            <p>
              <span>Linkedin</span>
            </p>
          </div>
          <div>
            <h5>Location Preferences</h5>
            <p>Shipping: UAE</p>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
}
export default Footer;
