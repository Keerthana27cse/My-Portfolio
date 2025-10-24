import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"; // Replace with your project image
import projImg2 from "../assets/img/project-img2.png"; // Replace with your project image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the primary accent color
const ACCENT_COLOR = "#ae59f0ff"; // Bright Cyan/Neon Blue

// A simple component for a single project item
const ProjectCard = ({ title, description, imgUrl, isVisible }) => {
  return (
    // Custom styling for the project item
    <div
      className={`project-item p-4 rounded-4 shadow animate__animated ${isVisible ? "animate__fadeInUp" : ""}`}
      style={{
        backgroundColor: "#171717", // Deeper black for strong contrast
        color: "#fff",
        // Persistent subtle neon glow
        boxShadow: `0 0 10px ${ACCENT_COLOR}22, 0 0 5px rgba(0, 0, 0, 0.5)`, 
        border: `1px solid ${ACCENT_COLOR}33`, // Thin border for structure
        transition: "all 0.4s ease-in-out",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      // Enhanced vibrant hover effect
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)"; // More pronounced lift
        e.currentTarget.style.backgroundColor = "#1a1a1a"; // Slightly lighter on hover
        e.currentTarget.style.boxShadow = `0 0 25px ${ACCENT_COLOR}66, 0 15px 30px rgba(0, 0, 0, 0.7)`; // Intense neon glow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.backgroundColor = "#171717";
        e.currentTarget.style.boxShadow = `0 0 10px ${ACCENT_COLOR}22, 0 0 5px rgba(0, 0, 0, 0.5)`;
      }}
    >
      <div 
        className="project-img-container mb-4" 
        style={{ 
          overflow: "hidden", 
          borderRadius: "10px",
          border: `2px solid ${ACCENT_COLOR}`, // Accent colored border around image
        }}
      >
        <img
          src={imgUrl}
          alt={title}
          className="img-fluid"
          style={{ 
            width: "100%", 
            height: "220px", // Slightly taller image for impact
            objectFit: "cover", 
            transition: "transform 0.5s ease, opacity 0.5s ease" 
          }}
          // Image hover effect with subtle fade
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.08)";
            e.currentTarget.style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.opacity = "1";
          }}
        />
      </div>
      <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: ACCENT_COLOR, marginBottom: "0.5rem" }}>
        {title}
      </h3>
      <p style={{ color: "#E0E0E0", flexGrow: 1, fontSize: "1rem" }}>
        {description}
      </p>
      <div 
        className="mt-3 text-uppercase fw-bold" 
        style={{ 
          color: ACCENT_COLOR, 
          fontSize: "0.9rem", 
          letterSpacing: "1px" 
        }}
      >
        
      </div>
    </div>
  );
};

export const Projects = () => {
  const projects = [
    {
      title: "Footstep Power Generation Using Piezoelectric Sensors",
      description: "Developed a system that generates electricity from footstep force, utilizing piezoelectric sensors to harness non-conventional energy sources for storage and usage.",
      imgUrl: projImg2,
    },
    {
      title: "Smart Thyroid Diagnosis System",
      description: "Designed a deep learning-based SVM model with real-time disease prediction using Flask (Python), SMOTE for data balancing, and HTML/CSS for the user interface.",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project py-5" id="projects" style={{ backgroundColor: "#0f0f0f", color: "#fff" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="animate__animated animate__fadeInDown display-3 fw-bolder" style={{ color: ACCENT_COLOR, textShadow: `0 0 5px ${ACCENT_COLOR}55` }}>
            PROJECTS 🚀
          </h2>
          <p className="text-white-50 mx-auto" style={{ fontSize: "1.2rem", maxWidth: "800px" }}>
            Bridging the gap between creative problem-solving and modern technology. Explore my selected projects in IoT ,ML and Full-Stack development.
          </p>
        </div>

        <Row className="g-5 justify-content-center">
          {projects.map((project, index) => (
            <Col key={index} lg={6} md={10}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <ProjectCard {...project} isVisible={isVisible} />
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" style={{ zIndex: -1, opacity: 0.4 }} />
    </section>
  );
};