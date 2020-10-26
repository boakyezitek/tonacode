import React from 'react'

function StatusSection() {
    return (
        <>
            <section className="stats-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h1 className="mt-4" style={{color: "#f3f3f6"}}>Statistics</h1>
                            <p style={{color: "#5a09dd"}}>What I've done so far</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card stats-card">
                                <div className="card-body text-center">
                                    <h1 className="stat-heading">10</h1>
                                    <p className="card-text">Projects done since i left school</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card stats-card">
                                <div className="card-body text-center">
                                    <h1 className="stat-heading">5</h1>
                                    <p className="card-text">Years of experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StatusSection
