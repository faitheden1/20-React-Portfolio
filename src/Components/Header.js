import React, { Component } from "react"
import { Link } from "react-router-dom"



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
                        <Link class="navbar-brand" to="/">Faith/Home</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        </button>
                    </li>
                </ul>
            </div>

            <div class="collaspe navbar-collaspe" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <button>
                            <Link class="navbar-brand" to="/portfolio">Portfolio</Link> </button>
                    </li>
                </ul>
            </div>



            <div class="collaspe navbar-collaspe" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <button>
                        <li class="nav-item active">
                            <Link class="navbar-brand" to="/contact">Contact</Link>
                        </li>
                    </button>
                </ul>


            </div>
        </nav>

    )
}
export default Header