import { Container, Row, Col, Card } from "react-bootstrap";
import { BriefcaseFill, AwardFill, BookFill, CheckCircleFill, TrophyFill, GeoAltFill, TelephoneFill, EnvelopeFill, JournalBookmarkFill, StarFill } from "react-bootstrap-icons";
import profileImg from "../assets/img/pic.jpg"; 
import colorSharp from "../assets/img/color-sharp.png"; 
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from 'react';

// Enhanced accent colors for elegance
const ACCENT_COLOR = "#00FFFF"; // Neon Blue/Cyan
const SECONDARY_ACCENT = "#FFD700"; // Gold for highlights
const GRADIENT_BG = "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)";

// Data remains the same
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
    "Published paper “Smart Thyroid: A Deep Learning-Driven SVM Model for Thyroid Diagnosis” in ICISS 2025.",
    "Runner-up – Paper Presentation, Inter-College Science & Technical Fest, Karpagam College of Engineering",
    "Runner-up – Paper Presentation, National Level Technical Symposium, Sri Ramakrishna Engineering College",
    "First Prize – Extempore Speech Competition, Annual Day Celebration",
];

const workshops = [
    "Two-Day Hands-on Workshop on Natural Language Processing with TensorFlow",
    "Two-Day Hands-on Workshop on Quantum Machine Learning",
    "Skill Development & Drone Training Program by Technology Innovation Hub, IIT Delhi",
];

const contactDetails = {
    phone: " +91 9488105188", 
    email: " keerthii2728@gmail.com", 
    location:"Gudalur, The Nilgiris - 643211" 
};

// Enhanced TimelineItem with hover effects and more elegance
const TimelineItem = ({ year, title, institution, detail, isVisible }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className={`mb-5 position-relative timeline-item animate__animated ${isVisible ? "animate__fadeInUp" : ""} ${isHovered ? "animate__pulse" : ""}`}
            style={{ paddingLeft: '3rem', cursor: 'pointer' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Enhanced Timeline Dot with glow */}
            <div style={{
                position: 'absolute', left: 0, top: '5px',
                width: '20px', height: '20px', borderRadius: '50%',
                background: `radial-gradient(circle, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})`,
                border: '3px solid #fff',
                boxShadow: `0 0 20px ${ACCENT_COLOR}, 0 0 40px ${ACCENT_COLOR}50`,
                zIndex: 2,
                transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease',
            }}></div>
            
            {/* Animated Connection Line */}
            <div style={{
                position: 'absolute', left: '9px', top: '25px', bottom: '-20px',
                width: '3px', background: `linear-gradient(to bottom, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})`,
                opacity: isHovered ? 1 : 0.5,
                zIndex: 1,
                transition: 'opacity 0.3s ease',
            }}></div>

            <p className="mb-1 fw-bold" style={{ color: "#aaa", fontSize: "0.9rem", fontStyle: 'italic' }}>{year}</p>
            <h5 className="mt-1 mb-1 fw-bold" style={{ fontSize: "1.3rem", color: "#fff", textShadow: `0 0 10px ${ACCENT_COLOR}` }}>{title}</h5>
            <p className="mb-0" style={{ color: ACCENT_COLOR, fontSize: "1.1rem", fontWeight: '500' }}>{institution}</p>
            <p className="mb-2 text-white-50" style={{ fontSize: "0.95rem", lineHeight: '1.5' }}>{detail}</p>
        </div>
    );
};

// New Floating Particles Component for Elegance
const FloatingParticles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 5 + 2,
                speed: Math.random() * 2 + 1,
            }));
            setParticles(newParticles);
        };
        generateParticles();
    }, []);

    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
            {particles.map(particle => (
                <div
                    key={particle.id}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: ACCENT_COLOR,
                        borderRadius: '50%',
                        opacity: 0.6,
                        animation: `float ${particle.speed}s ease-in-out infinite`,
                    }}
                />
            ))}
        </div>
    );
};

// Enhanced Card Component with Flip Animation
const FlipCard = ({ title, icon, items, iconColor }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Card 
            className="flip-card mb-4"
            style={{ 
                background: GRADIENT_BG, 
                border: `1px solid ${ACCENT_COLOR}33`, 
                borderRadius: '1.5rem',
                boxShadow: `0 10px 30px ${ACCENT_COLOR}22`,
                minHeight: '300px',
                perspective: '1000px',
                cursor: 'pointer',
                transition: 'transform 0.6s',
               // transformStyle: 'preserve-3d',
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div style={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%', 
                transition: 'transform 0.6s', 
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            }}>
                {/* Front Side */}
                <Card.Body style={{ backfaceVisibility: 'hidden', position: 'absolute', width: '100%', height: '100%' }}>
                    <Card.Title className="fw-bold mb-3 text-center" style={{ color: ACCENT_COLOR, fontSize: '1.5rem' }}>
                        {icon} {title}
                    </Card.Title>
                    <div className="text-center">
                        <StarFill size={50} color={iconColor} style={{ opacity: 0.7 }} />
                        <p className="mt-3 text-white-50">Hover to explore</p>
                    </div>
                </Card.Body>
                {/* Back Side */}
                <Card.Body style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)', position: 'absolute', width: '100%', height: '100%' }}>
                    <ul className="list-unstyled">
                        {items.map((item, idx) => (
                            <li key={idx} className="mb-3 animate__animated animate__fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <CheckCircleFill size={16} color={iconColor} className="me-3" /> {item}
                            </li>
                        ))}
                    </ul>
                </Card.Body>
            </div>
        </Card>
    );
};

export const About = () => {
    return (
        <section className="about-section py-5" id="education" style={{ background: GRADIENT_BG, color: "#fff", position: "relative", overflow: "hidden", minHeight: '100vh' }}>
            <FloatingParticles />
            <Container style={{ position: 'relative', zIndex: 1 }}>
                {/* Enhanced Header with Parallax Effect */}
                <div className="text-center mb-5">
                    <a
                        href="https://drive.google.com/drive/folders/1GCfKddepQp66mKU8MxEoe3Bc-imj2_rf?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <h2 className="animate__animated animate__fadeInDown display-4 fw-bold mb-3" style={{ 
                            color: ACCENT_COLOR, 
                            textShadow: `0 0 20px ${ACCENT_COLOR}77`, 
                            cursor: 'pointer',
                            background: `linear-gradient(45deg, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            WHO I AM 👋
                        </h2>
                    </a>
                    <p className="text-white-50 mx-auto mt-3 animate__animated animate__fadeInUp" style={{ maxWidth: "700px", fontSize: "1.2rem", lineHeight: '1.6' }}>
                        Embark on a journey through my academic odyssey, triumphs, and the essence of my digital footprint. Let's connect beyond the code.
                    </p>
                </div>

                <Row className="g-5 justify-content-center">
                    
                    {/* Left Column: Contact & Education */}
                    <Col lg={5} md={10}>
                        <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={`h-100 animate__animated ${isVisible ? "animate__fadeInLeft" : ""}`}>
                                    
                                    {/* Profile Card with Glow */}
                                    <div className="mb-5 p-4 text-center" style={{ 
                                        background: GRADIENT_BG, 
                                        border: `2px solid ${ACCENT_COLOR}`, 
                                        borderRadius: '2rem',
                                        boxShadow: `0 0 30px ${ACCENT_COLOR}44`,
                                        position: 'relative',
                                    }}>
                                        <div style={{
                                            position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
                                            width: '100px', height: '5px', background: `linear-gradient(to right, ${ACCENT_COLOR}, ${SECONDARY_ACCENT})`,
                                            borderRadius: '2px',
                                        }}></div>
                                        <img
                                            src={profileImg}
                                            alt="Profile"
                                            className="img-fluid rounded-circle mb-4 animate__animated animate__zoomIn"
                                            style={{ width: "200px", height: "200px", objectFit: "cover", border: `6px solid ${ACCENT_COLOR}`, boxShadow: `0 0 20px ${ACCENT_COLOR}` }}
                                        />
                                        <h4 className="mb-4 fw-bold" style={{ color: ACCENT_COLOR, fontSize: '1.4rem' }}>
                                            CONTACT DETAILS
                                        </h4>
                                        <ul className="list-unstyled mb-0 text-start" style={{ fontSize: "1.1rem" }}>
                                            <li className="mb-3 animate__animated animate__fadeInUp"><TelephoneFill color={ACCENT_COLOR} className="me-3" /> 
                                                <a href={`tel:${contactDetails.phone}`} className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = ACCENT_COLOR} onMouseLeave={(e) => e.target.style.color = '#fff'}>{contactDetails.phone}</a>
                                            </li>
                                            <li className="mb-3 animate__animated animate__fadeInUp"><EnvelopeFill color={ACCENT_COLOR} className="me-3" /> 
                                                <a href={`mailto:${contactDetails.email}`} className="text-white" style={{ textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = ACCENT_COLOR} onMouseLeave={(e) => e.target.style.color = '#fff'}>{contactDetails.email}</a>
                                            </li>
                                            <li className="animate__animated animate__fadeInUp"><GeoAltFill color={ACCENT_COLOR} className="me-3" /> {contactDetails.location}</li>
                                        </ul>
                                    </div>
                                    
                                    {/* Education Timeline */}
                                    <div className="p-4" style={{ 
                                        background: GRADIENT_BG, 
                                        border: `1px solid ${ACCENT_COLOR}33`, 
                                        borderRadius: '1.5rem',
                                        boxShadow: `0 10px 30px ${ACCENT_COLOR}22`,
                                    }}>
                                        <h4 className="mb-5 text-center fw-bold" style={{ color: ACCENT_COLOR, fontSize: '1.4rem' }}>
                                            <JournalBookmarkFill className="me-2" /> ACADEMIC JOURNEY
                                        </h4>
                                        <div style={{ position: 'relative' }}>
                                            {educationData.map((item, index) => (
                                                <TimelineItem key={index} {...item} isVisible={isVisible} />
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* Right Column: Interactive Flip Cards */}
                    <Col lg={7} md={10}>
                        <TrackVisibility once>
                            {({ isVisible }) => (
                                <div className={`h-100 animate__animated ${isVisible ? "animate__fadeInRight" : ""}`}>
                                    <Row className="g-4">
                                        <Col md={12}>
                                            <FlipCard 
                                                title="CERTIFICATIONS" 
                                                icon={<BookFill />} 
                                                items={certifications} 
                                                iconColor={ACCENT_COLOR} 
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <FlipCard 
                                                title="AWARDS AND ACHIEVEMENTS" 
                                                icon={<TrophyFill />} 
                                                items={achievements} 
                                                iconColor={SECONDARY_ACCENT} 
                                            />
                                        </Col>
                                        <Col md={12}>
                                            <FlipCard 
                                                title="WORKSHOPS AND TRAINING" 
                                                icon={<BriefcaseFill />} 
                                                items={workshops} 
                                                iconColor={ACCENT_COLOR} 
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>

            {/* Background Graphic with Rotation Animation */}
            <img 
                className="background-image-left animate__animated animate__rotateIn" 
                src={colorSharp} 
                alt="background-graphic" 
                style={{ 
                    position: "absolute", 
                    top: '-10%', 
                    right: 0, 
                    zIndex: 0, 
                    opacity: 0.2, 
                    maxWidth: '100%', 
                    height: 'auto', 
                    transform: 'rotate(180deg)',
                    animation: 'spin 20s linear infinite',
                }} 
            />

            {/* Custom CSS for Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .flip-card:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </section>
    );
};
