import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

// Define the accent color outside the component if it's not imported elsewhere
const ACCENT_COLOR = "#00FFFF"; 

export const Footer = () => {
    // Get the current year dynamically for the copyright
    const currentYear = new Date().getFullYear(); 

    return (
        // Apply a distinct background to the footer section
        <footer className="footer py-4" style={{ backgroundColor: "#0b0b0b", borderTop: `1px solid ${ACCENT_COLOR}33`, color: '#fff' }}>
            <Container>
                <Row className="align-items-center g-3">
                    
                    {/* Left Column: Logo & Professional Tagline */}
                    <Col xs={12} sm={6} className="text-center text-sm-start">
                        {/* Ensure your logo links to home */}
                        <a href="#home">
                            <img 
                                src={logo} 
                                alt="Logo" 
                                style={{ height: '40px', filter: `drop-shadow(0 0 5px ${ACCENT_COLOR}33)` }} 
                            />
                        </a>
                        <p className="mt-2 mb-0 text-white-50" style={{ fontSize: '0.9rem' }}>
                            Full Stack | IoT | AI
                        </p>
                    </Col>

                    {/* Right Column: Social Icons & Copyright */}
                    <Col xs={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon mb-2">
                            {/* Improved visual hover/vibrancy for icons */}
                            <a href="https://www.linkedin.com/in/keerthana-r-69a59724b" className="mx-2" style={{ transition: 'filter 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 8px ${ACCENT_COLOR})`} onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
                                <img src={navIcon1} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="https://github.com/Keerthana27cse" className="mx-2" style={{ transition: 'filter 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 8px ${ACCENT_COLOR})`} onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
                                <img src={navIcon2} alt="GitHub" style={{ width: '30px', height: '30px' }} />
                            </a>
                            <a href="https://www.instagram.com/kee__27__?igsh=dGM3YzYxdHI2dGxq" className="mx-2" style={{ transition: 'filter 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.filter = `drop-shadow(0 0 8px ${ACCENT_COLOR})`} onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
                                <img src={navIcon3} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                            </a>
                        </div>
                        {/* Vibrant Copyright text */}
                        <p className="m-0 fw-light" style={{ color: ACCENT_COLOR, fontSize: '0.9rem', letterSpacing: '0.5px' }}>
                            &copy; {currentYear} Keerthana R. All Rights Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}