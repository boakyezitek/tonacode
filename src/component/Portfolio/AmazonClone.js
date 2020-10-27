import React from 'react'
import PageBanner from '../Menu/PageBanner'
import Airbnb from './Discovers/Airbnb'
import Facebook from './Discovers/Facebook'

function AmazonClone({match}) {
    return (
        <>
            <PageBanner match={match}/>
              <section className="project-details-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-xl-4">
                    <h5 className="port-heading" style={{color: "#5a09dd"}}>Project</h5>
                    <h2 className="port-heading">Information</h2>
                </div>
                <div className="col-lg-4 col-xl-4">
                    <h5 style={{color: 'rgba(0,0,0,0.69)'}}>The Client</h5>
                    <p><br/>This is one of my concept projects, where I want to show my clients what I can do for them. That means that this project wasn’t created by a request, but just with imagination. I hope you like it.<br/><br/></p>
                </div>
                <div className="col-lg-4 col-xl-4">
                    <h5 style={{color: 'rgba(0,0,0,0.69)'}}>The Goal</h5>
                    <p><br/>My goal with this project was to show my potential clients how i can use react.js to build Ecommence web application as a front end developer. I took the most common features of a amazon and created it with react.js. I paid close
                        attention to details and made sure that all features like adding to product to cart, login and register with firebase authentication, checkout was created with react.js.<br/><br/></p>
                </div>
            </div>
        </div>
        <div className="container content-container"><img className="browser-head" src="/assets/img/browser_bar.png"/><img className="img-fluid project-image-lg" src="/assets/img/LargePort/Amazon/amazon.png"/>
            <div className="result-content">
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h5 className="port-heading" style={{color: "#5a09dd"}}>Project</h5>
                        <h2 className="port-heading">Result</h2>
                    </div>
                    <div className="col-lg-8">
                        <p>This project comprises of four component which include the login, products, checkout and subtotal. Also with navigation header which contains the amazon demo logo, amazon similar search bar, sign, returns&amp;orders, you prime
                            links and product basket which count the total product added to cart.<br/><br/></p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h5 className="port-heading" style={{color: 'rgba(0,0,0,0.69)'}}>Authentication</h5>
                        <p><br/>This authentication component was build with firebase authentication where using can add email and password to register or login.&nbsp;</p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7"><img className="img-fluid project-image-lg" src="/assets/img/LargePort/Amazon/Screenshot_233.png"/></div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h5 className="port-heading" style={{color: 'rgba(0,0,0,0.69)'}}>Product Component</h5>
                        <p><br/>This component shows all product cards to customer with button that allow them to add product to card. The button function was build with Redux (React Context Api).<br/><br/></p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7"><img className="img-fluid project-image-lg" src="/assets/img/LargePort/Amazon/Screenshot_234.png"/></div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h5 className="port-heading" style={{color: 'rgba(0,0,0,0.69)'}}>Cart Component</h5>
                        <p>This component shows all product added to cart where customer can delete or check out product.</p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7"><img className="img-fluid project-image-lg" src="/assets/img/LargePort/Amazon/Screenshot_235.png"/></div>
                </div>
                <div className="row mb-5">
                    <div className="col-lg-4">
                        <h5 className="port-heading" style={{color: 'rgba(0,0,0,0.69)'}}>Check out card component<br/><br/></h5>
                        <p>This component shows the total of product added to the cart and the total price.</p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-7"><img className="img-fluid project-image-lg" src="/assets/img/LargePort/Amazon/Screenshot_236.png"/></div>
                </div>
            </div>
            <div className="discover-box">
                <h1 className="text-center"><strong>Discover other projects</strong><br/></h1>
                <div className="row">
                        <Facebook />
                        <Airbnb />
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default AmazonClone
