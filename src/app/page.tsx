import { Col, Container, Row, Button } from 'react-bootstrap';

/** The Home page for an Itinerary Maker site. */
const Home = () => (
  <main>
    <Container fluid className="py-5 text-center">
      <Row className="align-items-center justify-content-center">
        <Col md={6}>
          <h1 className="display-3">Plan Your Dream Trip with Ease</h1>
          <p className="lead">
            Explore our easy-to-use itinerary maker and craft the perfect travel plans for your next adventure.
          </p>
          <a href="/createEvent"><Button variant="primary" size="lg">Get Started</Button></a>
        </Col>
      </Row>
    </Container>

    <section className="features py-5">
      <Container>
        <Row className="text-center">
          <Col md={4} className="feature-card mb-4 mb-md-0">
            <h3>Customizable Itineraries</h3>
            <p>Create personalized travel plans with our easy-to-use builder.</p>
          </Col>
          <Col md={4} className="feature-card mb-4 mb-md-0">
            <h3>Interactive Maps</h3>
            <p>Visually plan your route with our interactive map integration.</p>
          </Col>
          <Col md={4} className="feature-card">
            <h3>Share and Collaborate</h3>
            <p>Share your plans with friends and collaborate in real-time.</p>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
);

export default Home;
