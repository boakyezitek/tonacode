import React from 'react'

function InfoSection() {
    return (
        <>
            <section className="info-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-6">
                            <h2 className="info-heading-text"><br/>A good updated website or web application built by a good frontend developer counts in a world that's constantly online<br/></h2>
                                <div className="line mt-4"></div>
                                <p><br/>The world is slowly moving towards more online communication. Make sure your business doesn’t fall behind. A few reasons why an updated website or web application build by a good front end developer is important:<br/><br/></p>
                                    <p><i className="fas fa-check mr-2" style={{color: "#5a09dd"}}></i>It looks more professional that your competition</p>
                                    <p><i className="fas fa-check mr-2" style={{ color: "#5a09dd" }}></i>&nbsp;It shows that you take your business serious<br/></p>
                                    <p><i className="fas fa-check mr-2" style={{ color: "#5a09dd" }}></i>&nbsp;It will make the sale a lot easier<br/></p>
                         </div>
                            <div className="col-lg-6 col-xl-6">
                                <div className="row no-gutters">
                                    <div className="col-lg-6 col-xl-6"><img className="info-img img-2" src="assets/img/Other/example-2.jpg"/></div>
                                        <div className="col-lg-6 col-xl-6"><img className="info-img img-1" src="assets/img/Other/example-3.jpg"/></div>
                                            <div className="col-lg-6 col-xl-6"><img className="info-img img-3" src="assets/img/Other/example-4.jpg" /></div>
                                                <div className="col-lg-6 col-xl-6"><img className="info-img img-4" src="assets/img/Other/example-1.jpg" /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </section>
        </>
    )
}

export default InfoSection
