import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"; // Replace with your project image
import projImg2 from "../assets/img/project-img2.png"; // Replace with your project image
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Define the primary accent color - Updated to a modern teal for a fresh, professional look
const ACCENT_COLOR = "#d53d8bff"; // Modern Cyan/Teal

// A simple component for a single project item
const ProjectCard = ({ title, description, imgUrl, isVisible }) => {
  return (
    // Custom styling for the project item with refined modern aesthetics
    <div
      className={`project-item p-4 rounded-4 shadow animate__animated ${isVisible ? "animate__fadeInUp" : ""}`}
      style={{
        backgroundColor: "#1a1a1a", // Slightly lighter dark background for better readability
        color: "#fff",
        // Subtle gradient glow for a modern, layered effect
        boxShadow: `0 4px 20px rgba(6, 182, 212, 0.1), 0 0 10px rgba(6, 182, 212, 0.05)`, 
        border: `1px solid rgba(6, 182, 212, 0.2)`, // Soft border for definition
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", // Smoother, more professional easing
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      // Refined hover effect with subtle scaling and enhanced glow
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px) scale(1.02)"; // Gentle lift and scale
        e.currentTarget.style.backgroundColor = "#1f1f1f"; // Minimal background shift
        e.currentTarget.style.boxShadow = `0 8px 30px rgba(6, 182, 212, 0.25), 0 0 20px rgba(6, 182, 212, 0.1)`; // Intensified glow
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.backgroundColor = "#1a1a1a";
        e.currentTarget.style.boxShadow = `0 4px 20px rgba(6, 182, 212, 0.1), 0 0 10px rgba(6, 182, 212, 0.05)`;
      }}
    >
      {/* Subtle overlay for depth */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%)`,
          pointerEvents: "none",
          borderRadius: "16px",
        }}
      />
      <div 
        className="project-img-container mb-4 position-relative" 
        style={{ 
          overflow: "hidden", 
          borderRadius: "12px",
          border: `2px solid rgba(6, 182, 212, 0.3)`, // Softer accent border
        }}
      >
        <img
          src={imgUrl}
          alt={title}
          className="img-fluid"
          style={{ 
            width: "100%", 
            height: "240px", // Adjusted for better proportion
            objectFit: "cover", 
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s ease" 
          }}
          // Enhanced image hover with brightness adjustment for modernity
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.filter = "brightness(1.1) saturate(1.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.filter = "brightness(1) saturate(1)";
          }}
        />
      </div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 600, color: ACCENT_COLOR, marginBottom: "0.75rem", lineHeight: 1.2 }}>
        {title}
      </h3>
      <p style={{ color: "#d1d5db", flexGrow: 1, fontSize: "0.95rem", lineHeight: 1.6 }}>
        {description}
      </p>
      <div 
        className="mt-3 text-uppercase fw-semibold" 
        style={{ 
          color: ACCENT_COLOR, 
          fontSize: "0.85rem", 
          letterSpacing: "0.5px",
          opacity: 0.8,
        }}
      >
        {/* Placeholder for additional info, e.g., "View Project" */}
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
    <section className="project py-5" id="projects" style={{ backgroundColor: "#0d0d0d", color: "#fff", position: "relative" }}>
      <Container>
        <div className="text-center mb-5">
          <h2 className="animate__animated animate__fadeInDown display-4 fw-bold" style={{ color: ACCENT_COLOR, textShadow: `0 0 10px rgba(6, 182, 212, 0.3)`, marginBottom: "1rem" }}>
                 PROJECTS 🚀
          </h2>
          <p className="text-gray-400 mx-auto" style={{ fontSize: "1.1rem", maxWidth: "700px", lineHeight: 1.5 }}>
            Bridging the gap between creative problem-solving and modern technology. Explore my selected projects in IoT, ML, and Full-Stack development.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
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

      {/* Background image with adjusted opacity for subtlety */}
      <img className="background-image-right position-absolute" src={colorSharp2} alt="background" style={{ zIndex: -1, opacity: 0.3, right: 0, top: "50%", transform: "translateY(-50%)" }} />
    </section>
  );
};
