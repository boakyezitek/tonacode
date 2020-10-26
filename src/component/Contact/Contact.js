import React from 'react'
import PageBanner from '../Menu/PageBanner'

function Contact({match}) {

    return (
        <>
           <PageBanner match={match}/>
            <section className="project-section">
                <div className="container"><iframe allowFullScreen="" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC9Rq3DVeYUBHX1RhNCZvTyRuMGtHhOLCQ&amp;q=Kumasi%2C+Ghana&amp;zoom=11" width="100%" height="400"></iframe>
                    <div className="row mt-5">
                        <div className="col-lg-3">
                            <h3><strong>Contact info</strong><br/></h3>
                </div>
                            <div className="col-lg-9">
                                <h3><strong>React me via&nbsp;</strong></h3>
                                <p>Email:</p>
                                <p><a href="mailto:tonacode@gmail.com">tonacode@gmail.com<br/></a></p>
                                    <p>I usually response within a workday: Monday - Friday</p>
                                    <ul className="list-inline">
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/kofi-boakye-3b711b176/" style={{ fontSize: "26px" }} target="_blank"><i className="fa fa-linkedin" style={{color: "#5a09dd"}}></i></a></li>
                                <li className="list-inline-item"><a href="https://github.com/boakyezitek" style={{ fontSize: "26px" }} target="_blank"><i className="fa fa-github" style={{color: "#5a09dd"}}></i></a></li>
                                <li className="list-inline-item"><a href="live:d9ef6d689b31162c" style={{fontSize: "26px"}}><i className="fa fa-skype" style={{ color: "#5a09dd" }}></i></a></li>
                                <li className="list-inline-item"><a href="https://wa.me/233541747630" style={{ fontSize: "26px" }} target="_blank"><i className="fa fa-whatsapp" style={{color: "#5a09dd"}}></i></a></li>
                                    </ul>
                </div>
                            </div>
                        </div>
             </section>
        </>
    )
}

export default Contact
