import about from "../style/images/about.webp";
function About() {
  return (
    <div className="content-container">
      <div className="content-text-right content-text">
        <h3>At your convenience</h3>
        <p>
          Since our 1987 inception, our objective has been simple: to provide a
          setting for unhurried conversations, and to find the right product for
          each person. Our product range is available to browse and purchase
          online from the comfort of home. Our official online store in the
          United Arab Emirates is hosted via Mizzen.
        </p>
      </div>
      <div className="content-img">
        <img className="content-img" src={about} />
      </div>
    </div>
  );
}
export default About;
