import React from 'react'

function ClientSection() {
    return (
        <>
            <section className="client-section">
                <div className="container">
                    <h1 className="text-center">Clients</h1>
                    <p className="text-center" style={{color: "#5a09dd"}}>I had the opportunity to work for&nbsp;</p>
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="card mb-3">
                                <div className="card-body text-center client-box pt-5"><img src="assets/img/Other/brand.svg"/></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card mb-3">
                                <div className="card-body text-center client-box pt-5"><img className="img-fluid" src="assets/img/Other/logo%20(1).png" style={{ height:"58px" }}/></div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card mb-3">
                                        <div className="card-body text-center client-box pt-3"><img src="assets/img/Other/ezifood.png" style={{height: "80px"}}/>
                                            <h5 className="mt-2">Ezi Foods</h5>
                        </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card mb-3">
                                            <div className="card-body text-center client-box pt-4"><img className="mb-2" src="assets/img/Other/54.png" style={{width: "88px"}}/>
                                                <h5>Ezitek Solutions</h5>
                        </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="card mb-3">
                                <div className="card-body text-center client-box pt-3"><img className="img-fluid" src="assets/img/Other/logo%20(2).png" style={{ width: "68px" }}/>
                                                    <h5>Silicon Valley International School</h5>
                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    </section>
        </>
    )
}

export default ClientSection
