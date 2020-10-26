import React from 'react'

function TrendingSection() {
    return (
        <>
            <section class="trending-section">
                <div class="container text-center" style={{color: "#f3f3f6"}}>
                    <h2>Want to see the projects i have <br/>done with React.js or Vue.js</h2>
                        <p>Check out my work</p><a class="btn btn-primary site-btn" role="button" style={{background: "#5a09dd"}} href="portfolio.html">Portfolio</a>
                        <div class="mt-5">
                            <div class="row">
                            <div class="col-lg-6"><a href="amazon.html" style={{ color: "#f3f3f6"}}>Amazone Clone<img class="img-fluid clone-link" src="assets/img/Other/clone1.jpg"/></a></div>
                            <div class="col-lg-6"><a href="covid19.html" style={{ color: "#f3f3f6"}}>Covid-19 Tracker<img class="img-fluid clone-link" src="assets/img/Other/clone2.jpg"/></a></div>
                        </div>
                    </div>
                 </div>
    </section>
        </>
    )
}

export default TrendingSection
