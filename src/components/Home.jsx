import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={8} className="text-center">
              <div className="hero-content">
                <h1 className="display-3 fw-bold mb-4 text-white">
                  Hello, I'm <span style={{ fontFamily: 'Georgia, "Times New Roman", serif', color: 'white' }}>Betul Erenel</span>
                </h1>
                <p className="lead mb-4 text-white-50">
                  Full Stack Developer
                </p>
                <p className="mb-4 text-white-50">
                  Detail-oriented full stack developer and freelance web developer specializing in building 
                  responsive, scalable web applications with expertise in React, Node.js, Express, MongoDB, 
                  PHP, and SQL. Experienced in Shopify and WordPress development. Passionate about front-end 
                  and back-end development, API integration, and performance optimization. Skilled in creating 
                  seamless user experiences and robust server-side solutions.
                </p>
                <div className="mb-4">
                  <a href="mailto:betulerenel@gmail.com" className="text-white-50 me-3">
                    <i className="bi bi-envelope me-2"></i>betulerenel@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/betulerenel" target="_blank" rel="noopener noreferrer" className="text-white-50 me-3">
                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                  </a>
                  <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="text-white-50">
                    <i className="bi bi-briefcase me-2"></i>Hire me on Fiverr
                  </a>
                </div>
                <Link to="/blog">
                  <Button variant="primary" size="lg" className="me-3">
                    Read My Blog
                  </Button>
                </Link>
                <Button variant="outline-light" size="lg" href="#about">
                  Learn More About Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="about-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h2 className="text-center mb-5 fw-bold">About Me</h2>
              <div className="text-center mb-5">
                <p className="lead text-muted">
                  Certified in MERN stack development through MIT xPRO and De Anza College. 
                  Skilled in building responsive, scalable web applications with hands-on 
                  experience in startup environments. Eager to contribute as a Full Stack Developer 
                  by combining strong technical expertise, real-world project experience, and a 
                  fast-learning, collaborative mindset.
                </p>
                <p className="text-muted mb-0">
                  <i className="bi bi-geo-alt me-2" style={{ color: '#2c3e50' }}></i>
                  Greater New York City Area & New Jersey | Open to Remote / Relocation
                </p>
              </div>
              <Row>
                <Col md={6} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body className="p-4">
                      <h4 className="mb-3">
                        <i className="bi bi-code-slash me-2" style={{ color: '#2c3e50' }}></i>
                        Technical Skills
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">✓ JavaScript (ES6+)</li>
                        <li className="mb-2">✓ React</li>
                        <li className="mb-2">✓ Node.js</li>
                        <li className="mb-2">✓ Express.js</li>
                        <li className="mb-2">✓ MongoDB</li>
                        <li className="mb-2">✓ SQL</li>
                        <li className="mb-2">✓ PHP</li>
                        <li className="mb-2">✓ HTML5 / CSS3</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="mb-4">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Body className="p-4">
                      <h4 className="mb-3">
                        <i className="bi bi-award me-2" style={{ color: '#2c3e50' }}></i>
                        Expertise & Experience
                      </h4>
                      <ul className="list-unstyled">
                        <li className="mb-2">✓ Front-end & Back-end Development</li>
                        <li className="mb-2">✓ API Integration</li>
                        <li className="mb-2">✓ Performance Optimization</li>
                        <li className="mb-2">✓ Responsive Web Design</li>
                        <li className="mb-2">✓ Scalable Application Architecture</li>
                        <li className="mb-2">✓ MERN Stack Development</li>
                        <li className="mb-2">✓ Startup Environment Experience</li>
                        <li className="mb-2">✓ Full Stack Solutions</li>
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <Card className="shadow-sm border-0">
                    <Card.Body className="p-4">
                      <h4 className="mb-3">
                        <i className="bi bi-mortarboard me-2" style={{ color: '#2c3e50' }}></i>
                        Education & Certifications
                      </h4>
                      <Row>
                        <Col md={6}>
                          <p className="mb-2"><strong>MIT xPRO</strong></p>
                          <p className="text-muted mb-3">MERN Stack Development Certification</p>
                        </Col>
                        <Col md={6}>
                          <p className="mb-2"><strong>De Anza College</strong></p>
                          <p className="text-muted mb-0">MERN Stack Development Certification</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5 text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="mb-4">Let's Connect!</h2>
              <p className="lead mb-4">
                I'm always interested in new projects and opportunities. 
                Open to remote work and relocation. Feel free to reach out or check out my latest blog posts.
              </p>
              <div className="mb-4">
                <a href="mailto:betulerenel@gmail.com" className="text-white me-4">
                  <i className="bi bi-envelope me-2"></i>Email Me
                </a>
                <a href="https://linkedin.com/in/betulerenel" target="_blank" rel="noopener noreferrer" className="text-white me-4">
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                </a>
                <a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <i className="bi bi-briefcase me-2"></i>Hire me on Fiverr
                </a>
              </div>
              <Link to="/blog">
                <Button variant="light" size="lg">
                  View Blog
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Home
