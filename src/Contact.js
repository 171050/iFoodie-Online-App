import React from 'react';
import { Button, Form } from 'react-bootstrap';

function Contact() {
    return (
        <>
            <h1>Contact page</h1>

            <div className="container">
                <h3 className="mx-0 text-left">Contact Us</h3>
                <Form className="mx-0 text-left">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="number" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Elaborate Your Concern</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </Form>


                <div className="container d-flex justify-content-left">
                    <Button variant="primary">Submit</Button>{' '}
                </div>

                <hr />
                <footer className="container my-4">
                    <p className="float-end my-0"><a href="#">Back to top</a></p>
                    <p>© 2020–2021 iFoodie, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
                </footer>

            </div>
        </>
    )
}
export default Contact;