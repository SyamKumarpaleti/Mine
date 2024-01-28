import React, { useState } from "react";
import { Button, Card, Row, Form, Modal } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import Navbarcomponent from "../navbar";
import axios from "axios";

function CartComponent({ cart, setCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [issueDate, setIssueDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://localhost:8182/customerBook/create/${id}`, {
        books: cart.map((book) => book.id),
        issueDate,
        returnDate,
      });

      if (response.status === 200) {
         // Clear the cart after purchase
        
         setCart([]);
          navigate(`/customer/dashboard/bookingStatus/${id}`);
      } else {
        console.error(`Error: ${response.data}`);
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
    } finally {
      setShowForm(false);
    }
  };

  // const totalPrice = cart.reduce((sum, book) => sum + book.bookPrice, 0);
  // const totalBooks = cart.length;

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
      
      <br />
      <h2>Cart</h2>
      <div className="container col-md-8">
        <Row>
          {cart.map((book, index) => (
            <div key={index} className="col-md-4 mb-4">
              <Card style={{ width: '400px', backgroundColor: '#your_card_background_color_here' }}>
                <Card.Body style={{ backgroundColor: '#your_card_body_background_color_here' }}>
                
                    <Card.Title>{book.bookTitle}</Card.Title>
               
                  <hr />
                  <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
                    <div><span style={{ fontWeight: 'bold' }}>Rating:</span> {book.rating}</div>
                    <div>
                      <span style={{ fontWeight: 'bold' }}>Author:</span>
                      <Link to={'/authors?id=' + book.id}>{book.author}</Link>
                    </div>
                    <div><span style={{ fontWeight: 'bold' }}>Category:</span> {book.category.name}</div>
                    <div><span style={{ fontWeight: 'bold' }}>Price:</span> {book.bookPrice}</div>
                    <div>
                              <Link to={'/books?id='+book.id} style={{ color: '#007bff' }}>
                                Info
                              </Link>
                            </div>
                    <Button onClick={() => setCart((prevCart) => prevCart.filter((item) => item.id !== book.id))}>
                      Remove from Cart
                    </Button>
                    <span style={{ margin: '0 5px' }}>{book.quantity}</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
          <div class="page-content page-container" id="page-content">
            <div class="padding">
              <div class="row container d-flex justify-content-center">
              </div>
              <br /><br /><br /><br />
              <div className="col-md-4 mb-4 mx-auto d-flex justify-content-center">
                <Modal show={showForm} onHide={() => setShowForm(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Enter Details</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                    <Form>
                      <Form.Group controlId="issueDate">
                        <Form.Label>Issue Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={issueDate}
                          onChange={(e) => setIssueDate(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="returnDate">
                        <Form.Label>Return Date</Form.Label>
                        <Form.Control
                          type="date"
                          value={returnDate}
                          onChange={(e) => setReturnDate(e.target.value)}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowForm(false)}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <Button
                onClick={handleButtonClick}
                type="button"
                style={{ width: 200, alignSelf: "center", margin: 15 }}
                class="btn btn-success btn-icon-text bouncebutton"
                variant="outline-primary"
              >
                Purchase
              </Button>
            </div>
          </div>
        </Row>
      </div>
    </div>
  );
}

export default CartComponent;
