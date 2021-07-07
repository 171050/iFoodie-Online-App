import React from 'react';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';
import img10 from './img/10.jpg';

function About() {
    return (
        <>
          <h1>About page</h1>
            <div className="container">
                <div className="row featurette my-4 text-left d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img8} alt=" " />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row featurette my-4 text-left d-flex justify-content-center align-items-center">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <img src={img9} alt=" " />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row featurette text-left d-flex justify-content-center align-items-center">
                    <div className="col-md-7">
                        <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                        <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={img10} alt=" " />
                    </div>
                </div>
            </div>

            <hr />
            <footer className="container my-4">
                <p className="float-end my-0"><a href="#">Back to top</a></p>
                <p>© 2020–2021 iFoodie, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>
        </>
    )
}
export default About;