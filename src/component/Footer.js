import React from 'react'

function Footer() {
    return (
        <>
            <footer class="page-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 pt-4" style={{textAlign: "center"}}>
                            <p><a href="#" style={{color: "#f3f3f6"}}>Kofi Boakye</a></p>
                        </div>
                        <div class="col-lg-3 pt-4" style={{ textAlign: "center" }}>
                            <p><a href="#" style={{ color: "#f3f3f6" }}>tonacode@gmail.com</a></p>
                        </div>
                        <div class="col-lg-3" style={{ textAlign: "center" }}><a class="navbar-brand" href="#" style={{fontFamily: "'Mr De Haviland', cursive", color: "rgb(255,255,255)",fontSize:"41px"}}>Tonacode...</a></div>
                        <div class="col-lg-2 pt-4" style={{ textAlign: "center" }}>
                            <p><a href="#" style={{ color: "#f3f3f6" }}>Linked-in</a></p>
                        </div>
                        <div class="col-lg-2 pt-4" style={{ textAlign: "center" }}>
                            <p><a href="#" style={{ color: "#f3f3f6" }}>Github</a></p>
                        </div>
                    </div>
                </div>
            </footer>
            <section class="copyright">
                <div class="container pt-1">
                    <div class="row">
                        <div class="col-lg-6">
                            <p style={{ color: "#f3f3f6" }}>Copyright Reserved © 2020</p>
                        </div>
                        <div class="col-lg-6">
                            <p style={{color: "#f3f3f6", textAlign: "right"}}><a href="#" style={{ color: "#f3f3f6" }}>Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
                </section>
        </>
    )
}

export default Footer
