import React from 'react'
import PageBanner from '../Menu/PageBanner'

function About({match}) {

    return (
        <>
            <PageBanner match={match} />
    <section className="project-section">
        <div className="container work-container-2">
            <div className="row">
                <div className="col-lg-4 col-xl-4 mb-5">
                    <h1 className="text-left" style={{color: "#f3f3f6"}}><br/><strong>About Me</strong></h1>
                </div>
                <div className="col-lg-8 col-xl-8 mb-5"><img className="img-fluid" src="assets/img/53356674.jpg" />
                    <p className="mt-5" style={{color: "rgb(0,0,0)"}}>I started my frontend developer career in Ghana. Where I studied: Frontend master, an online bootcamp website that helps people who have passion and dreams to become a developer.<br/></p>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-xl-6">
                            <h3><strong>Passion for Coding</strong><br/><br/></h3>
                            <p>I loved coding, so I started a YouTube self taught lesson during my spare time when am on campus to improve my skills. This forced me to create something new every week and made me a little bit better with every idea that will
                                come in mind.&nbsp;<br/><br/></p>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <h3><strong>Working As Frontend Developer</strong></h3>
                            <p><br/>I had heard of Frontend Development before but never really dug into it. This changed when I decided that I was time to broaden my skills so I could make my dream come to live in programming as a frontend developer.<br/><br/></p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-4 mb-5">
                    <h1 className="text-left" style={{color:"rgba(0,0,0,0.69"}}><br/><strong>My Skills</strong></h1>
                </div>
                <div className="col-lg-8 col-xl-8 mb-5">
                    <p className="mt-5" style={{color: "rgba(0,0,0,0.69"}}>As a frontend developer what grantee you to become the best developer out there is the skills you can convert ui/ux files in coding. Let me show you what i have learn so far.<br/></p><a className="btn btn-primary" role="button" style={{background: "#5a09dd"}}
                        href="https://drive.google.com/file/d/1E_2_e9LgWUaNqo90m1N5rPa8DplVvBmI/view?usp=sharing" target="_blank">Download My CV</a>
                    <div className="row mt-5">
                        <div className="col-lg-6 col-xl-6">
                            <h3 className="mb-3"><strong>Coding Skills</strong></h3>
                            <div className="row">

                            </div>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>HTML/HTML5<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>CSS/CSS3<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Javascript&nbsp;<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>React.js<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Vue.js<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Firebase<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Wordpress<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Wix<br/></p>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <p><br/><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Web Accessiblity<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Design System</p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>PHP (Laravel)</p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Node.js<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>API<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>SQL</p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>MYSQL<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>Shopify<br/></p>
                            <p><i className="fa fa-square mr-2" style={{color: "#5a09dd"}}></i>UI/UX Tool (Figma, Adobe XD, Photoshop, Illustrator</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}

export default About
