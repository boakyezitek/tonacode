import React from 'react'

function Banner() {
    return (
        <>
            <section className="wave-section">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                    <div className="container"><a className="navbar-brand" href="#" style={{ fontfamily: 'Mr De Haviland', color: "rgb(255,255,255)", fontSize: "41px" }}>Tonacode...</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div
                            className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                <li className="nav-item"><a className="nav-link btn-sm btn-primary" href="contact.html" style={{ background: "#5a09dd" }}>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-7 col-xl-6">
                            <p className="welcome-text">Welcome, I am Boakye</p>
                            <h1 className="welcome-heading">Frontend&nbsp;Developer</h1>
                            <p className="welcome-text">I love to visualise ideas and make them come alive in a front end development.<br /></p><button className="btn btn-primary site-btn" type="button" style={{background: "#5a09dd"}}>See&nbsp; My Works<i className="la la-eye ml-2"></i></button></div>
                        </div>
                    </div>
                    <div className="wave wave-1"></div>
                    <div className="wave wave-2"></div>
                    <div className="wave wave-3"></div>
                    <div className="wave wave-4"></div>
    </section>
        </>
    )
}

export default Banner
