import React from 'react'

function AmazonClone() {
    return (
        <>
              <section class="project-details-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-xl-4">
                    <h5 class="port-heading" style="color: #5a09dd;">Project</h5>
                    <h2 class="port-heading">Information</h2>
                </div>
                <div class="col-lg-4 col-xl-4">
                    <h5 style="color: rgba(0,0,0,0.69);">The Client</h5>
                    <p><br/>This is one of my concept projects, where I want to show my clients what I can do for them. That means that this project wasn’t created by a request, but just with imagination. I hope you like it.<br/><br/></p>
                </div>
                <div class="col-lg-4 col-xl-4">
                    <h5 style="color: rgba(0,0,0,0.69);">The Goal</h5>
                    <p><br/>My goal with this project was to show my potential clients how i can use react.js to build Ecommence web application as a front end developer. I took the most common features of a amazon and created it with react.js. I paid close
                        attention to details and made sure that all features like adding to product to cart, login and register with firebase authentication, checkout was created with react.js.<br/><br/></p>
                </div>
            </div>
        </div>
        <div class="container content-container"><img class="browser-head" src="assets/img/browser_bar.png"/><img class="img-fluid project-image-lg" src="assets/img/LargePort/Amazon/amazon.png"/>
            <div class="result-content">
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <h5 class="port-heading" style="color: #5a09dd;">Project</h5>
                        <h2 class="port-heading">Result</h2>
                    </div>
                    <div class="col-lg-8">
                        <p>This project comprises of four component which include the login, products, checkout and subtotal. Also with navigation header which contains the amazon demo logo, amazon similar search bar, sign, returns&amp;orders, you prime
                            links and product basket which count the total product added to cart.<br/><br/></p>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <h5 class="port-heading" style="color: rgba(0,0,0,0.69);">Authentication</h5>
                        <p><br/>This authentication component was build with firebase authentication where using can add email and password to register or login.&nbsp;</p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-7"><img class="img-fluid project-image-lg" src="assets/img/LargePort/Amazon/Screenshot_233.png"/></div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <h5 class="port-heading" style="color: rgba(0,0,0,0.69);">Product Component</h5>
                        <p><br/>This component shows all product cards to customer with button that allow them to add product to card. The button function was build with Redux (React Context Api).<br/><br/></p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-7"><img class="img-fluid project-image-lg" src="assets/img/LargePort/Amazon/Screenshot_234.png"/></div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <h5 class="port-heading" style="color: rgba(0,0,0,0.69);">Cart Component</h5>
                        <p>This component shows all product added to cart where customer can delete or check out product.</p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-7"><img class="img-fluid project-image-lg" src="assets/img/LargePort/Amazon/Screenshot_235.png"/></div>
                </div>
                <div class="row mb-5">
                    <div class="col-lg-4">
                        <h5 class="port-heading" style="color: rgba(0,0,0,0.69);">Check out card component<br/><br/></h5>
                        <p>This component shows the total of product added to the cart and the total price.</p>
                    </div>
                    <div class="col-lg-1"></div>
                    <div class="col-lg-7"><img class="img-fluid project-image-lg" src="assets/img/LargePort/Amazon/Screenshot_236.png"/></div>
                </div>
            </div>
            <div class="discover-box">
                <h1 class="text-center"><strong>Discover other projects</strong><br/></h1>
                <div class="row">
                    <div class="col-lg-6 col-xl-6 mb-5"><img class="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-3.jpg"/>
                        <h3 class="portfolio-heading mt-4">Facebook Clone With React.js</h3>
                        <p><br/>My goal with this project was to show my potential clients how react.js can display data without page refresh. I took the most common features of a facebook ready made app and prove my self that i can also build same frontend
                            view with react.js. . I paid close attention to details and made sure that all the colours, fonts and backgrounds matched each other.<br/><br/></p>
                        <h5><a class="site-portfolio-link" href="facebook-clone.html">Readmore<i class="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                    </div>
                    <div class="col-lg-6 col-xl-6 mb-5"><img class="img-fluid site-portfolio-img mt-3" data-bs-hover-animate="pulse" src="assets/img/SmallPort/port-4.jpg"/>
                        <h3 class="portfolio-heading mt-4">Airbnb Clone With React.js</h3>
                        <p><br/>Client goal about this project is to build a professional seo tool application where user can improve their web application or website SEO performance according to google needs.<br/><br/></p>
                        <h5><a class="site-portfolio-link" href="airbnb.html">Readmore<i class="fas fa-long-arrow-alt-right ml-2"></i></a></h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AmazonClone
