import React from 'react';
import { Button, Carousel, Breadcrumb, Row, Col, Card, CardGroup } from 'react-bootstrap';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';

function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome To iFoodie</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="success">Delivery</Button>{' '}
                        <Button variant="warning">Takeaway</Button>{' '}
                        <Button variant="danger">Dine-in</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="success">Delivery</Button>{' '}
                        <Button variant="warning">Takeaway</Button>{' '}
                        <Button variant="danger">Dine-in</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant="success">Delivery</Button>{' '}
                        <Button variant="warning">Takeaway</Button>{' '}
                        <Button variant="danger">Dine-in</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-2">
                            <div className="col p-4 d-flex flex-column position-static text-left">
                                <strong className="d-inline-block mb-2 text-primary">Indian Food</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-2">
                            <div className="col p-4 d-flex flex-column position-static text-left">
                                <strong className="d-inline-block mb-2 text-success">Chinese Food</strong>
                                <h3 className="mb-0">Post title</h3>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={img5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-2">
                            <div className="col p-4 d-flex flex-column position-static text-left">
                                <strong className="d-inline-block mb-2 text-danger">Italian Food</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={img6} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative mx-2">
                            <div className="col p-4 d-flex flex-column position-static text-left">
                                <strong className="d-inline-block mb-2 text-warning">Mexican Food</strong>
                                <h3 className="mb-0">Post title</h3>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src={img7} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            <footer className="container my-4">
                <p className="float-end my-0"><a href="#">Back to top</a></p>
                <p>© 2020–2021 iFoodie, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>

        </div>
    )
}
export default Home;