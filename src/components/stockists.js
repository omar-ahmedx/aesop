import about from "../style/images/about.webp";
function Stockists() {
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
        <button>
          <span>View our products</span>
          <span className="link-icon-container">
            <svg role="img" viewBox="0 0 50 50" className="link-icon">
              <g>
                <path d="M30.1,5.3L50,25.1L30.1,45h-6.6l18-17.6H0v-4.8h41.5l-18-17.6h6.6V5.3z"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
      <div className="content-img">
        <img className="content-img" src={about} />
      </div>
    </div>
  );
}
export default Stockists;
