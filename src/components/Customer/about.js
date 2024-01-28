// About.js
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Navbarcomponent from "../navbar";

const About = () => {
  return (
    <div style={{ 
      padding: 20, 
      minHeight: "100vh", 
      fontFamily: "Arial, sans-serif", 
      backgroundColor: "#f8f9fa", 
      backgroundImage: 'url("https://img.freepik.com/premium-photo/book-stack-library-blurred-bookshelf-background-education-education-background-back_756748-17160.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <Navbarcomponent /><br /><br /><br /><br /><br />
      <h2 style={{ textAlign: 'center', fontFamily: "Arial, sans-serif", color: "#343a40" }}>About INFOLIBRA</h2>
      <Row>
        <Col md={12}>
          <Card style={{ 
            width: '22rem', 
            margin: '30px auto',
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}>
            <Card.Body>
              <Card.Title style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>POWERED BY</Card.Title>
              <Card.Text>
                Infolibra Private Limited.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Card style={{ 
            width: '22rem', 
            margin: '20px auto',
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "15px",
          }}>
            <Card.Body>
              <Card.Title style={{ fontFamily: "Arial, sans-serif", color: "#343a40" }}>MARKETED BY</Card.Title>
              <Card.Text>
                HEXAWARE TECHNOLOGIES <br />
                H-5 , Sipcot IT Park, Navallur post,<br />
                Kancheepuram Dist,<br />
                Siruseri  -  603130<br />
                Tel: +91 7995526568<br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={12} style={{ textAlign: "center", marginTop: "20px" }}>
          <a href="https://www.instagram.com/shining_syam_?igsh=amR0YXZleXoybmJs" target="_blank" rel="noreferrer" style={{ marginRight: "10px" }}>
            <FaInstagram size={30} color="#007bff" />
          </a>
          <a href="https://www.linkedin.com/in/syam-kumar-paleti-892700228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" style={{ marginRight: "10px" }}>
            <FaLinkedin size={30} color="#007bff" />
          </a>
          <a href="https://www.https://www.facebook.com/profile.php?id=100036337703250&mibextid=ZbWKwL.com/" target="_blank" rel="noreferrer">
            <FaFacebook size={30} color="#007bff" />
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default About;
