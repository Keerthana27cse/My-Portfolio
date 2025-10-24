import { Container, Row, Col, Card } from "react-bootstrap";
import { BriefcaseFill, AwardFill, BookFill, CheckCircleFill, TrophyFill, GeoAltFill, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons"; // Added contact icons
import profileImg from "../assets/img/profile-img.jpg"; // ASSUME your profile image file name
import colorSharp from "../assets/img/color-sharp.png"; // Assuming a background asset
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ACCENT_COLOR = "#00FFFF"; // Neon Blue/Cyan for vibrancy

// Define data structure outside the component
const educationData = [
    { year: "2021 – 2025", title: "BE - Computer Science and Engineering", institution: "KIT- Kalaignarkarunanidhi Institute of Technology, Coimbatore", detail: "CGPA - 8.68" },
    { year: "2020 – 2021", title: "HSC", institution: "Fatima Girls' Higher Secondary School, Gudalur", detail: "Percentage - 90.5%" },
    { year: "2018 – 2019", title: "SSLC", institution: "Fatima Girls' Higher Secondary School, Gudalur", detail: "Percentage - 87.2%" },
];

const certifications = [
    "NPTEL – Java Programming, Data Mining (Elite)",
    "Altair University – IoT with Smart Works Fundamentals",
    "Coursera – Applied AI with Deep Learning (Authorized by IBM)",
];

const achievements = [
    "Runner-up – Paper Presentation, Inter-College Science & Technical Fest, Karpagam College of Engineering",
    "Runner-up – Paper Presentation, National Level Technical Symposium, Sri Ramakrishna Engineering College",
    "First Prize – Extempore Speech Competition, Annual Day Celebration",
    "Published paper “Smart Thyroid: A Deep Learning-Driven SVM Model for Thyroid Diagnosis” in the 7th International Conference on Intelligent Sustainable Systems (ICISS 2025), March 2025.",
];

const workshops = [
    "Two-Day Hands-on Workshop on Natural Language Processing with TensorFlow",
    "Two-Day Hands-on Workshop on Quantum Machine Learning",
    "Skill Development & Drone Training Program by Technology Innovation Hub, IIT Delhi",
];

// New Contact Data (PLACEHOLDER - **Update this with your real details**)
const contactDetails = {
    phone: "+91 9488105188", 
    email: "keerthii2728@gmail.com", 
    location: "Gudalur, The Nilgiris - 643211" 
};


export const About = () => {
    return (
        <section className="education py-5" id="education" style={{ backgroundColor: "#0f0f0f", color: "#fff", position: "relative", overflow: "hidden" }}>
            <Container>
                <div className="text-center mb-5">
                    <a
                        href="https://drive.google.com/drive/folders/1GCfKddepQp66mKU8MxEoe3Bc-imj2_rf?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <h2 className="animate__animated animate__fadeInDown display-4 fw-bold" style={{ color: ACCENT_COLOR, textShadow: `0 0 5px ${ACCENT_COLOR}55`, cursor: 'pointer' }}>
                            RESUME📍
                        </h2>
                    </a>
                    <p className="text-white-50 mx-auto" style={{ maxWidth: "700px" }}>
                        My academic journey, continuous professional development, and notable accomplishments.
                    </p>
                </div>

                <Row className="g-5 justify-content-center">
                    {/* ========== COLUMN 1: IMAGE, CONTACT, AND EDUCATION ========== */}
                    <Col lg={5} md={10}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={`h-100 p-4 rounded-4 animate__animated ${isVisible ? "animate__fadeInLeft" : ""}`} style={{ backgroundColor: "#1c1c1c", border: `1px solid ${ACCENT_COLOR}33` }}>

                                    {/* Profile Image */}
                                    <div className="text-center mb-4">
                                        <img
                                            src={profileImg}
                                            alt="Profile"
                                            className="img-fluid rounded-circle"
                                            style={{ width: "200px", height: "200px", objectFit: "cover", border: `4px solid ${ACCENT_COLOR}` }}
                                        />
                                    </div>
                                    
                                    {/* --- NEW: Contact/Personal Info Section --- */}
                                    <div className="mb-5 p-3 rounded-3" style={{ border: "1px dashed #333" }}>
                                        <h5 className="text-center mb-3 fw-bold" style={{ color: ACCENT_COLOR }}>
                                            Personal Details
                                        </h5>
                                        <ul className="list-unstyled mb-0" style={{ fontSize: "1rem" }}>
                                            <li className="mb-2">
                                                <TelephoneFill color={ACCENT_COLOR} className="me-2" /> 
                                                <a href={`tel:${contactDetails.phone}`} className="text-white" style={{ textDecoration: 'none' }}>{contactDetails.phone}</a>
                                            </li>
                                            <li className="mb-2">
                                                <EnvelopeFill color={ACCENT_COLOR} className="me-2" /> 
                                                <a href={`mailto:${contactDetails.email}`} className="text-white" style={{ textDecoration: 'none' }}>{contactDetails.email}</a>
                                            </li>
                                            <li>
                                                <GeoAltFill color={ACCENT_COLOR} className="me-2" /> {contactDetails.location}
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* Academic Profile Header */}
                                    <h4 className="text-center mb-5" style={{ color: ACCENT_COLOR }}>
                                        <BriefcaseFill className="me-2" /> Academic Profile
                                    </h4>

                                    {/* Education Timeline */}
                                    {educationData.map((item, index) => (
                                        <div key={index} className="mb-4 position-relative ps-4 education-item" style={{ borderLeft: `2px dashed ${ACCENT_COLOR}55` }}>
                                            <span style={{
                                                position: 'absolute', left: '-8px', top: '0',
                                                backgroundColor: ACCENT_COLOR,
                                                width: '14px', height: '14px', borderRadius: '50%'
                                            }}></span>
                                            <p className="mb-0 fw-bold" style={{ color: ACCENT_COLOR }}>{item.year}</p>
                                            <h5 className="mt-1 mb-1 fw-bold" style={{ fontSize: "1.1rem" }}>{item.title}</h5>
                                            <p className="mb-0 text-white-50">{item.institution}</p>
                                            <p className="mb-2" style={{ fontSize: "0.9rem", color: "#ccc" }}>{item.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* ========== COLUMN 2: CERTIFICATIONS, AWARDS, WORKSHOPS ========== */}
                    <Col lg={7} md={10}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={`h-100 animate__animated ${isVisible ? "animate__fadeInRight" : ""}`}>

                                    {/* CERTIFICATIONS, AWARDS, WORKSHOPS (Cards remain the same) */}
                                    {/* ... (Certification Card) ... */}
                                    <Card className="mb-4" style={{ backgroundColor: "#1c1c1c", border: `1px solid ${ACCENT_COLOR}33` }}>
                                        <Card.Body>
                                            <Card.Title className="fw-bold mb-3" style={{ color: ACCENT_COLOR }}>
                                                <BookFill className="me-2" /> CERTIFICATIONS
                                            </Card.Title>
                                            <ul className="list-unstyled">
                                                {certifications.map((cert, idx) => (
                                                    <li key={idx} className="mb-2" style={{ borderBottom: "1px dotted #333", paddingBottom: "5px" }}>
                                                        <CheckCircleFill size={14} color={ACCENT_COLOR} className="me-2" /> {cert}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card.Body>
                                    </Card>

                                    {/* ... (Awards Card) ... */}
                                    <Card className="mb-4" style={{ backgroundColor: "#1c1c1c", border: `1px solid ${ACCENT_COLOR}33` }}>
                                        <Card.Body>
                                            <Card.Title className="fw-bold mb-3" style={{ color: ACCENT_COLOR }}>
                                                <TrophyFill className="me-2" /> AWARDS AND ACHIEVEMENTS
                                            </Card.Title>
                                            <ul className="list-unstyled">
                                                {achievements.map((award, idx) => (
                                                    <li key={idx} className="mb-2" style={{ borderBottom: "1px dotted #333", paddingBottom: "5px" }}>
                                                        <AwardFill size={14} color="#FFD700" className="me-2" /> {award}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card.Body>
                                    </Card>

                                    {/* ... (Workshops Card) ... */}
                                    <Card style={{ backgroundColor: "#1c1c1c", border: `1px solid ${ACCENT_COLOR}33` }}>
                                        <Card.Body>
                                            <Card.Title className="fw-bold mb-3" style={{ color: ACCENT_COLOR }}>
                                                <BriefcaseFill className="me-2" /> WORKSHOPS
                                            </Card.Title>
                                            <ul className="list-unstyled">
                                                {workshops.map((ws, idx) => (
                                                    <li key={idx} className="mb-2 text-white-75" style={{ borderBottom: "1px dotted #333", paddingBottom: "5px" }}>
                                                        {ws}
                                                    </li>
                                                ))}
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            <img className="background-image-left" src={colorSharp} alt="background" style={{ position: "absolute", top: 0, left: 0, zIndex: 0, opacity: 0.5 }} />
        </section>
    );
};