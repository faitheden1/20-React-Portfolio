import React, { Component } from "react"
import Header from "../Components/Header"
import imgProject2 from "../Assets/Project2.png"
import imgPwdGen from "../Assets/passwordGenerator.png"
import imgProject3 from "../Assets/project3.png"
import imgProject1 from "../Assets/Project1.jpg"
import imgNoteTaker from "../Assets/NoteTaker.jpg"
import imgWeather from "../Assets/Weather.jpg"




// const Portfoliopage = () => {
//     return (
//         <div>
//             <h3>Portfolio Page</h3>
//             <small>Main Page</small>
//             <Link to="/contact">Contact</Link>
//             <Link to="/">Main</Link>
//             <Link to="/portfolio">Portfolio Page</Link>
//         </div>
//     );
// };

const Portfoliopage = () => {
    return (
        <div class="main">

            <div className="container" >

                <h1>My Portfolio</h1>

                <div className="row">
                    <div className="col">
                        <div className="content">
                            <h2>Projects</h2>
                            <p>Here are six examples of projects I worked on in UC Berkeley Bootcamp</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="content">
                            <h1>Password Generator</h1>
                            <img src={imgPwdGen} alt="password generator" className="img-fluid img-thumbnail" />
                            <p>link to deployed version <a href=" https://faitheden1.github.io/passwordGenerator/">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/passwordGenerator.git">here</a>.</p>
                        </div>
                    </div>
                    {/* </div>


            <div className="row"> */}
                    <div className="col">
                        <div className="content">
                            <h1>Project 1</h1>
                            <img src={imgProject1} alt="project 1" className="img-fluid img-thumbnail" />
                            <p>link to deployed version <a href=" https://faitheden1.github.io/Agile_Project_Faith/">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/Agile_Project_Faith.git">here</a>.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="content">
                            {/* <div class="column2"> */}
                            {/* <div class="content"> */}
                            <h1>Project 2</h1>
                            <img src={imgProject2} alt="project2" className="img-fluid img-thumbnail" />
                            <p>link to deployed version <a href="file:///Users/faith/Desktop/Villagers%20101%20pic2.html">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/Project_2.git">here</a>.</p>

                            {/* </div> */}
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            {/* <div className="column">
                                <div className="content"> */}
                            <h1>Project 3</h1>
                            <img src={imgProject3} alt="project 3" className="img-fluid img-thumbnail" />
                            <p>link to deployed Heroku version <a href="https://mypet-kw.herokuapp.com/">here</a>.</p>
                            <p>link to deployed version <a href="https://faitheden1.github.io/My_Vet/">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/My_Vet.git">here</a>.</p>
                            {/* </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="content">
                            {/* <div class="column2"> */}
                            {/* <div className="content"> */}
                            <h1>Weather Tracker</h1>
                            <img src={imgWeather} alt="weather" className="img-fluid img-thumbnail" />
                            <p>link to deployed version <a href="https://faitheden1.github.io/Weather-Dashboard/">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/Weather-Dashboard.git">here</a>.</p>
                            {/* </div> */}
                        </div>
                    </div>

                    <div className="col">
                        <div className="content">
                            {/* <div className="column">
                            <div className="content"> */}
                            <h1>Note Taker</h1>
                            <img src={imgNoteTaker} alt="note taker" className="img-fluid img-thumbnail" />
                            <p>link to deployed version <a href="https://faitheden1.github.io/Note_Taker/">here</a>.</p>
                            <p>link to deployed GitHub Repository <a href=" https://github.com/faitheden1/Note_Taker.git">here</a>.</p>

                            {/* </div>
                        </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfoliopage