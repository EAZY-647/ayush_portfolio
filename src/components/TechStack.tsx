// TechStack - text-based tech skills grid

const categories = [
  {
    title: "Data Engineering",
    tools: ["Spark (PySpark)", "Kafka", "Hadoop", "Airflow", "dbt", "Snowflake", "Databricks"],
  },
  {
    title: "Analytics & Visualization",
    tools: ["Power BI (DAX)", "Tableau", "Advanced Excel", "Google Analytics"],
  },
  {
    title: "Programming",
    tools: ["Python", "SQL", "Java", "Scala", "Shell"],
  },
  {
    title: "DevOps & Cloud",
    tools: ["AWS", "Azure", "GCP", "Docker", "Kubernetes (K8s)", "Terraform"],
  },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2> My Tech Stack</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "28px",
          padding: "40px 5%",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "14px",
              padding: "28px 24px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(20,184,166,0.3)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                "rgba(255,255,255,0.03)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            <h3
              style={{
                color: "#14b8a6",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              {cat.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {cat.tools.map((tool, j) => (
                <span
                  key={j}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "6px",
                    padding: "6px 14px",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.8)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(20,184,166,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(20,184,166,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.8)";
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
