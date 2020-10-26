import React from 'react'
import { Link } from 'react-router-dom';

function PageBanner({match}) {
    const path = match?.path;
    return (
        <>
            <section class="wave-section portfolio-section">
                <nav className="navbar navbar-light navbar-expand-md navigation-clean">
                  <div className="container"><Link className="navbar-brand" href="#" style={{ fontFamily: "'Mr De Haviland', cursive", color: "rgb(255,255,255)", fontSize: "41px" }}>Tonacode...</Link><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                        <div
                            class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                 <li className="nav-item"><Link className="nav-link btn-sm btn-primary" to="/contact" style={{ background: "#5a09dd" }}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {path === "/contact"? (
                    <div class="container">
                        <div class="row mt-5">
                            <div class="col-lg-12 col-xl-12">
                                <h2 class="text-center" style={{color:"#f3f3f6"}}><br/><strong>Looking for a new Frontend developer?</strong><br/><strong>I can help you!</strong></h2>
                                </div>
                            </div>
                            </div>
                ): ""}

                {path === "/portfolio" ? (
                    <div class="container">
                        <div class="row mt-5">
                            <div class="col-lg-12 col-xl-12">
                                <h2 class="text-center" style={{ color: "#f3f3f6" }}><br /><strong>A collection of projects</strong><br/><strong>&nbsp;that I've worked on</strong><br/><br/></h2>
                            </div>
                        </div>
                    </div>
                ) : ""}
                <div className="wave wave-1"></div>
                <div className="wave wave-2"></div>
                <div className="wave wave-3"></div>
                <div className="wave wave-4"></div>
            </section>
        </>
    )
}

export default PageBanner
