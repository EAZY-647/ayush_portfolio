import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>ByteIQ Analytics (Full-time)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building and maintaining scalable data pipelines, working with
              cloud infrastructure, and delivering actionable insights through
              data engineering and analytics solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Sc. Big Data Science (Distinction)</h4>
                <h5>Queen Mary University of London</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Advanced studies in big data analytics, machine learning, and
              scalable data infrastructure. Gained hands-on experience with
              real-time pipelines and predictive modelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Electronics & Communication</h4>
                <h5>SRM IST Chennai</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Studied electronics, communication systems, and programming
              fundamentals. Developed a strong engineering mindset and
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
