import { Container, Row, Col } from "react-bootstrap";
// Importing all necessary icons
import { FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt, FaMicrochip, FaPython } from "react-icons/fa"; 
import { SiSpringboot, SiMysql, SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTensorflow, SiJupyter } from "react-icons/si"; 
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';

// Define the structured skill data with standard 6-digit hex colors
const structuredSkills = [
  {
    category: "Frontend Development",
    color: "#61DBFB", // React Blue
    items: [
      { icon: <SiHtml5 color="#e34c26" />, name: "HTML5" },
      { icon: <SiCss3 color="#264de4" />, name: "CSS3" },
      { icon: <SiJavascript color="#f0db4f" />, name: "JavaScript" },
      { icon: <FaReact color="#61DBFB" />, name: "React" },
      { icon: <SiBootstrap color="#563d7c" />, name: "Bootstrap" },
    ],
  },
  {
    category: "Backend & Database",
    color: "#f89820", // Java/Orange - Changed from #cbe413ff
    items: [
      { icon: <FaJava color="#f89820" />, name: "Java" },
      { icon: <SiSpringboot color="#6db33f" />, name: "Spring Boot" },
      { icon: <FaNodeJs color="#68a063" />, name: "Node.js" },
      { icon: <FaPython color="#FFD43B" />, name: "Python" },
      { icon: <SiMysql color="#00758f" />, name: "MySQL" },
    ],
  },
  {
    category: "Tools & Utilities",
    color: "#00FF7F", // Bright Green/Spring Green - Changed from #49d78bff
    items: [
      { icon: <FaGitAlt color="#d1403eff" />, name: "Git" },
      { icon: <FaDatabase color="#757575" />, name: "NoSQL/MongoDB" },
    ],
  },
];

// Reusable component for a single skill item
const SkillBadge = ({ icon, name }) => (
  <div 
    className="skill-item p-2 m-1 text-center rounded-3 flex-fill" 
    style={{
      backgroundColor: "#222",
      border: "1px solid #444",
      minWidth: "100px",
      maxWidth: "140px",
      transition: "all 0.3s ease-in-out",
      cursor: "default",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#333";
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 255, 255, 0.2)";
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#222";
        e.currentTarget.style.transform = "scale(1.0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.4)";
    }}
  >
    <div style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
      {icon}
    </div>
    <p className="fw-normal m-0 text-white-50" style={{ fontSize: "0.8rem" }}>{name}</p>
  </div>
);

export const Skills = () => {
  return (
    <section className="skill py-5" id="skills" style={{ backgroundColor: "#0f0f0f", color: "#fff", position: "relative", overflow: "hidden" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="animate__animated animate__fadeInDown display-4 fw-bold" style={{ color: "#00ffff" }}>
            My Development Stack 🚀
          </h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px" }}>
            A curated selection of the most vital technologies and tools I leverage to build scalable, high-performance web applications, from interface design to data persistence.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {structuredSkills.map((group, index) => (
            <Col key={index} lg={4} md={6} sm={10}>
              <div
                className={`skill-category-box p-4 h-100 rounded-4 shadow-lg animate__animated animate__fadeInUp`}
                style={{
                  backgroundColor: "#1c1c1c",
                  border: `1px solid ${group.color}44`,
                  transition: "transform 0.5s",
                }}
              >
                <h4 
                  className="mb-4 text-center pb-2" 
                  style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: 700, 
                    color: group.color,
                    // CORRECTED LINE: Using the 6-digit hex and appending '66' for a translucent border
                    borderBottom: `2px solid ${group.color}66` 
                  }}
                >
                  {group.category}
                </h4>
                
                {/* Flex container for skills - using Bootstrap utility classes for layout */}
                <div className="d-flex flex-wrap justify-content-start gap-2">
                  {group.items.map((skill, idx) => (
                    <SkillBadge key={idx} {...skill} />
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* The background image positioning is retained */}
      <img className="background-image-left" src={colorSharp} alt="background" style={{ position: "absolute", top: 0, left: 0, zIndex: 0, opacity: 0.5 }} />
    </section>
  );
};