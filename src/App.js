import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Button, Navbar, Nav, Form, FormControl, Modal } from 'react-bootstrap';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState(false);
  const handleClos1 = () => setLogin(false);
  const handleLogin = () => setLogin(true);

  const [sign, setSign] = useState(false);
  const handleClos2 = () => setSign(false);
  const handleSign = () => setSign(true);

  const [forgot, setForgot] = useState(false);
  const handleClos3 = () => setForgot(false);
  const handleForgot = () => setForgot(true);

  const [change, setChange] = useState(false);
  const handleClos4 = () => setChange(false);
  const handleChange = () => setChange(true);

  return (
    <div className="App">
      <Router>
        <>
          <Navbar fixed="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">iFoodie</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#about"><Link to="/about">About Us</Link></Nav.Link>
              <Nav.Link href="#contact"><Link to="/contact">Contact Us</Link></Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button className="mr-sm-2" variant="outline-info">Search</Button>
            </Form>
            <Button className="mr-sm-2" variant="danger" onClick={handleLogin}>Login</Button>{' '}
            <Button className="mr-sm-2" variant="danger" onClick={handleSign}>Sign Up</Button>{' '}
          </Navbar>
          <>
            <Modal show={login} onHide={handleClos1}>
              <Modal.Header closeButton>
                <Modal.Title>Login to iFoodie</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <p className="mx-4"><a href="#" onClick={handleChange}>Change Password</a></p>
                <p className="mx-4"><a href="#" onClick={handleForgot}>Forgot Password</a></p>
              </Modal.Footer>
            </Modal>
          </>

          <>
            <Modal show={sign} onHide={handleClos2}>
              <Modal.Header closeButton>
                <Modal.Title>Get an iFoodie Account</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cformBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Create Account
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>

          <>
            <Modal show={forgot} onHide={handleClos3}>
              <Modal.Header closeButton>
                <Modal.Title>Forgot Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </Form>
              </Modal.Body>
            </Modal>
          </>

          <>
            <Modal show={change} onHide={handleClos4}>
              <Modal.Header closeButton>
                <Modal.Title>Change Password</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="oformBasicPassword">
                    <Form.Label>Enter Old Password</Form.Label>
                    <Form.Control type="password" placeholder="Old Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="nformBasicPassword">
                    <Form.Label>Enter New Password</Form.Label>
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="cformBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Change Password
                  </Button>
                </Form>
              </Modal.Body>
            </Modal>
          </>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
