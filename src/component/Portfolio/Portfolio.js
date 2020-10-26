import React from 'react'
import PageBanner from '../Menu/PageBanner'

function Portfolio({match}) {
    return (
        <>
            <PageBanner match={match} />
   <section className="project-section">
        <div className="container work-container">
            <div className="row">
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3"  data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-1.jpg"/>
                    <h3 className="portfolio-heading mt-4">Amazon Clone With React.js</h3>
                    <p><br/>My goal with this project was to show my potential clients how i can use react.js to build Ecommence web application as a front end developer. I took the most common features of a amazon and created it with react.js. I paid close
                        attention to details and made sure that all features like adding to product to cart, login and register with firebase authentication, checkout was created with react.js.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="amazon.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-12.jpg" />
                    <h3 className="portfolio-heading mt-4">Skyline Shop - Built With Vue.js&nbsp; &amp; Nuxt.js</h3>
                    <p><br/>My goal with this project was to show my potential clients how i can use vue.js with nuxt.js to build Ecommence web application as a front end developer. I took the most common features of a amazon and created it with vue.js with
                        nuxt.js. I made sure that all features like adding to product to cart, login and register with firebase authentication, checkout was created with vue.js.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="skyline.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-2.jpg"/>
                    <h3 className="portfolio-heading mt-4">Covid 19 Tracker With React.js</h3>
                    <p><br/>My goal with this project was to show my potential clients how i can implement chart.js and react.js map in react web applicaton. And also i can fetch api data in frontend project using react.js. I paid close attention to details
                        and made sure that all the colours, fonts and backgrounds matched each other.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="covid19.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-3.jpg"/>
                    <h3 className="portfolio-heading mt-4">Facebook Clone With React.js</h3>
                    <p><br/>My goal with this project was to show my potential clients how react.js can display data without page refresh. I took the most common features of a facebook ready made app and prove my self that i can also build same frontend view
                        with react.js. . I paid close attention to details and made sure that all the colours, fonts and backgrounds matched each other.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="facebook-clone.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-4.jpg"/>
                    <h3 className="portfolio-heading mt-4">Airbnb Clone With React.js</h3>
                    <p><br/>My goal with this project was to show my potential clients how i can build hotel booking web application with react.js and also how airbnb build their calendar in sorting with react.js.<br/></p>
                    <h5><a className="site-portfolio-link" href="airbnb.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-8.jpg"/>
                    <h3 className="portfolio-heading mt-4">Ah SEO Tool</h3>
                    <p>Client goal about this project is to build a professional seo tool application where user can improve their web application or website SEO performance according to google needs.</p>
                    <h5><a className="site-portfolio-link" href="ahseotools.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-6.jpg"/>
                    <h3 className="portfolio-heading mt-4">Zencast.fm</h3>
                    <p>Client want a web application which allows you to host, publish, distribute and track your podcasts. Backend Api was already build by other developer but he need someone who can convert ui/ui design into working frontend view using
                        vue.js.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="zencastfm.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-9.jpg"/>
                    <h3 className="portfolio-heading mt-4">Penley Group Inventory Web App</h3>
                    <p>Client goal about this project is to match our customers’ needs with the perfect manufacturer when they have packaging challenges that must be met quickly and economically.&nbsp;<br/>Because in what other way can you capture the dreams
                        and goals about penley group inventory web better than in pictures?<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="penleygroup.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-5.jpg"/>
                    <h3 className="portfolio-heading mt-4">Coinmarketval - Ongoing Project</h3>
                    <p><br/>Upul need an app that provides&nbsp;a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalization, Coinmarketval tracks community growth, open-source code development, major events
                        and on-chain metrics.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="coinmarketval.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
                <div className="col-lg-6 col-xl-6 mb-5"><img className="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-10.jpg"/>
                    <h3 className="portfolio-heading mt-4">GenPlus</h3>
                    <p><br/>My goal with this project was to show my potential clients how what i can use only vanilla javascript and jquery to build an app that generate data where users can using in their urgent project. I paid close attention to details
                        and made sure that all the colours, fonts and backgrounds matched each other as a frontend developer.<br/><br/></p>
                    <h5><a className="site-portfolio-link" href="genplus.html">Readmore<i className="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default Portfolio
