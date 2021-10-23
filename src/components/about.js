import about from "../style/images/about.webp";
function About() {
  return (
    <div className="content-container">
      <div className="content-img">
        <img className="content-img" src={about} />
      </div>
      <div className="content-text-left content-text">
        <h3>About Aesop</h3>
        <p>
          Our formulations marry poetry and science, blending botanical and
          laboratory-made ingredients to create products of the highest quality.
          We seek to minimise our environmental impact in all we do. Our range
          is botanical, cruelty-free and developed by scientists in our in-house
          laboratory in Melbourne, Australia.
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
    </div>
  );
}
export default About;
