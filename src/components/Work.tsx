import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  // === Data Engineering & AI Projects ===
  {
    title: "Stock Market Data Pipeline",
    category: "Data Engineering",
    tools: "Apache Kafka, Snowflake, Python, Airflow",
    image: "/images/stock_pipeline.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-apachekafka-snowflake-activity-7402961976290869248-kDjR?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Data Engineering with Databricks & Spark",
    category: "Data Engineering",
    tools: "Databricks, Spark, PySpark, Delta Lake",
    image: "/images/databricks_spark.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-databricks-spark-activity-7426599481413926912-GAwy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Data Engineering with AWS & PostgreSQL",
    category: "Data Engineering",
    tools: "AWS, PostgreSQL, Python, ETL",
    image: "/images/aws_postgres.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-aws-postgresql-activity-7432220317009465344-8lbq?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Data Engineering First Principles in Python",
    category: "Data Engineering",
    tools: "Python, Data Structures, Algorithms",
    image: "/images/predictive_maintenance.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-firstprinciples-python-activity-7430408372828454912-UhoQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Data Engineering & DevOps on AWS",
    category: "Data Engineering & DevOps",
    tools: "AWS, Docker, CI/CD, Terraform",
    image: "/images/supply_chain.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataengineering-devops-aws-activity-7428611522131800064--ajn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "HealthEdgeAI",
    category: "AI & Machine Learning",
    tools: "Python, ML, Azure, LangGraph",
    image: "/images/health_ai.png",
    link: "https://github.com/EAZY-647/healthedgeai",
  },
  {
    title: "AI Engineering with LangGraph & Azure OpenAI",
    category: "AI Engineering",
    tools: "LangGraph, Azure OpenAI, Python",
    image: "/images/ai_langgraph.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_aiengineering-langgraph-azureopenai-ugcPost-7433119063628750848-rvjm?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Azure AI & RAG",
    category: "AI & Cloud",
    tools: "Azure, RAG, Python, AI Services",
    image: "/images/azure_rag.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_azure-artificialintelligence-rag-ugcPost-7432723235227648000-z7t6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  // === Analytics Projects ===
  {
    title: "Business Intelligence Dashboard",
    category: "Analytics & Power BI",
    tools: "Power BI, DAX, SQL, Data Modeling",
    image: "/images/bi_dashboard.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-powerbi-businessintelligence-activity-7400807941794365440-6KlT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Vendor Performance Analytics",
    category: "Data Analysis",
    tools: "Python, SQL, Power BI, Excel",
    image: "/images/vendor_analytics.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_vendor-data-analysis-i-recently-completed-activity-7396481664593362944-YkX5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "Telecom Strategy Analytics",
    category: "Data Analytics",
    tools: "Power Query, SQL, Power BI",
    image: "/images/telecom_analytics.png",
    link: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-telecomstrategy-powerquery-activity-7398515931225812992-oFvI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
  },
  {
    title: "E-Commerce Inventory Analytics",
    category: "Data Analytics",
    tools: "Python, SQL, Pandas, Visualization",
    image: "/images/ecommerce_analytics.png",
    link: "https://github.com/EAZY-647/E-Commerce-Inventory-Analytics",
  },
  {
    title: "Customer Shopping Analysis",
    category: "Data Analytics",
    tools: "Python, Pandas, Data Visualization",
    image: "/images/customer_shopping.png",
    link: "https://github.com/EAZY-647/customer_shopping_anlyasis",
  },
];

const dashboards = [
  {
    title: "Main Interactive Dashboard",
    description: "Comprehensive Power BI dashboard with revenue, customer segmentation, and trend analysis.",
    linkedinPost: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-powerbi-businessintelligence-activity-7400807941794365440-6KlT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
    liveLink: "https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9",
    isEmbeddable: true,
  },
  {
    title: "Business Intelligence Dashboard",
    description: "End-to-end BI dashboard covering KPIs, sales trends, and operational metrics.",
    linkedinPost: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalyst-businessintelligence-powerbi-activity-7421240683233091584-N9UP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
    liveLink: "https://lnkd.in/gNn-wDQZ",
    isEmbeddable: false,
  },
  {
    title: "Sales Dashboard",
    description: "Power BI dashboard tracking sales performance, revenue growth, and regional analytics.",
    linkedinPost: "https://www.linkedin.com/posts/ayush-ku-sahu_powerbi-dataanalytics-salesdashboard-activity-7414954730789064704-LpDQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
    liveLink: "https://lnkd.in/eRQMhRqx",
    isEmbeddable: false,
  },
  {
    title: "Insurance Analysis Dashboard",
    description: "Analytical dashboard for insurance data covering claim patterns, risk assessment, and policy performance.",
    linkedinPost: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-businessintelligence-insuranceanalysis-activity-7412615371779690497-ZUBX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
    liveLink: "https://lnkd.in/eDH6rg43",
    isEmbeddable: false,
  },
  {
    title: "Healthcare Innovation Dashboard",
    description: "Power BI dashboard exploring healthcare trends, patient outcomes, and innovation metrics.",
    linkedinPost: "https://www.linkedin.com/posts/ayush-ku-sahu_dataanalytics-healthcareinnovation-powerbi-activity-7409928613812363266-eUAE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfCCVUBfJGVf6diArVoCo-RZ0MfxP8HAdQ",
    liveLink: "https://lnkd.in/e_4JJ6hB",
    isEmbeddable: false,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="carousel-link"
                            data-cursor="disable"
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "4px",
                              color: "#14b8a6",
                              marginTop: "12px",
                              fontSize: "0.9rem",
                              textDecoration: "none",
                            }}
                          >
                            View Project <MdArrowOutward />
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* Live Dashboards Section */}
        <div className="dashboards-section" style={{ marginTop: "80px" }}>
          <h2>
            Live <span>Dashboards</span>
          </h2>
          <div
            className="dashboards-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px",
              marginTop: "40px",
            }}
          >
            {dashboards.map((dash, index) => (
              <div
                key={index}
                className="dashboard-card"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "14px",
                  padding: "32px 28px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column" as const,
                  gap: "16px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(20,184,166,0.35)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.03)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    style={{
                      background: "rgba(20,184,166,0.15)",
                      color: "#14b8a6",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 style={{ fontSize: "1.1rem", color: "#fff", margin: 0 }}>
                    {dash.title}
                  </h4>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.85rem",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {dash.description}
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "auto", paddingTop: "8px" }}>
                  <a
                    href={dash.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#000",
                      background: "#14b8a6",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Open Dashboard <MdArrowOutward />
                  </a>
                  <a
                    href={dash.linkedinPost}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="disable"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      fontSize: "0.82rem",
                      textDecoration: "none",
                    }}
                  >
                    LinkedIn Post <MdArrowOutward />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Embedded Power BI Dashboard */}
          <div style={{ marginTop: "48px" }}>
            <h3 style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>
              Interactive Dashboard Preview
            </h3>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <iframe
                title="Power BI Dashboard"
                src="https://app.powerbi.com/view?r=eyJrIjoiYTIxMzRlM2QtODI0OC00Yzc0LTk5N2ItZTNiNDgzNGY0Y2NjIiwidCI6ImM2ZTU0OWIzLTVmNDUtNDAzMi1hYWU5LWQ0MjQ0ZGM1YjJjNCJ9"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
