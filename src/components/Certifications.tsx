import "./styles/Career.css";

const certifications = [
  "Anthropic Claude Code in Action",
  "Complete Data Engineering With Azure (Grow Data Skills)",
  "SQL Associate (DataCamp)",
  "AI & Machine Learning (upGrad Campus)",
  "Data Science & ML Course (Coding Ninjas)",
  "Python Foundation & Data Structures (CareerLabs)",
  "Power BI Data Analytics (Codebasics)",
  "Google Cloud & AWS Networking (Coursera)",
  "Google Data Analytics (Google)",
  "RHCSA, RHCE, AWS & Docker (COSS)",
  "Data Science & Analytics (upGrad Campus)",
  "Introduction to Python (Coding Ninjas)",
  "Data Science & ML with R (Udemy)",
  "Excel: Business Intelligence (Codebasics)",
];

const Certifications = () => {
  return (
    <div className="career-section section-container" id="certifications">
      <div className="career-container">
        <h2>
          Certifications <span>&</span>
          <br /> Credentials
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
            marginTop: "40px",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "16px 20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(20,184,166,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.06)";
              }}
            >
              <span
                style={{
                  color: "#14b8a6",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  minWidth: "24px",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                {cert}
              </span>
            </div>
          ))}
        </div>

        {/* GitHub Activity Chart */}
        <div style={{ marginTop: "60px" }}>
          <h3
            style={{
              fontSize: "1.2rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "20px",
            }}
          >
            GitHub Activity
          </h3>
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "24px",
              overflow: "hidden",
            }}
          >
            <img
              src="https://ghchart.rshah.org/14b8a6/EAZY-647"
              alt="GitHub Contribution Chart"
              style={{ width: "100%", borderRadius: "4px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
