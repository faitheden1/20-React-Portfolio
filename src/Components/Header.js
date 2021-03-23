import React, {Component} from "react"



const Header = () => {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>




                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="navbar-brand" href="index.html">Faith/Home</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            </button>
                            </li>
                            </ul>
                            </div>

                            <div class="collaspe navbar-collaspe" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <li class="nav-item active">
                                        <button>
                                            <a class="navbar-brand" href="portfolio.html">Portfolio</a> </button>
                                    </li>
                                </ul>
                            </div>



                            <div class="collaspe navbar-collaspe" id="navbarSupportedContent">
                                <ul class="navbar-nav mr-auto">
                                    <button>
                                        <li class="nav-item active">
                                            <a class="navbar-brand" href="contact.html">Contact</a>
                                        </li>
                                    </button>
                                </ul>


                            </div>
      </nav> 
      
    )
}
export default Header