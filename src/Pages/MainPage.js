//You have to use the link component to link between you pages 
import { Link } from "react-router-dom";


import Img from '../Assets/pic.jpg'

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <center>
//                     <img src={src / Assets / pic.jpg} alt="pic" />
//                     <br /> <b> CONGRATS </b>
//                 </center>
//             </div>
//         )
//     }
// }



const MainPage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="boxes">
                        <h1 className="formheader">About Me</h1>
                        <p>Hello my name is Faith Elsen!</p>
                        <p> faitheden54@gmail.com</p>
                        <p> 407-951-9639</p>
                        <h3>Where I'm Located</h3>
                        <p>Oakland California</p>
                        <a href="https://github.com/faitheden1">Github</a>
                        <a href="https://www.linkedin.com/in/faith-elsen-6a7a931b5/">Linkedin</a>
                        <img src={Img} alt="self" />
                        <p>A creative and resourceful individual with experience managing high school class rooms as well as enrichment programs. Works well with others in small or large group settings as well self-motivation to complete individual tasks. Excellent listening skills, articulate, patient and loves promoting a positive work environment. Enjoys learning new things as well as helping others stay organized and succeed. Proficient in Word, Excel, and PowerPoint software, Google Apps as well as basic CSS, HTML, and JavaScript.
                  </p>
                        <h1>Resume</h1>
                        <p>Open a PDF file <a href="https://drive.google.com/file/d/1GKMqoe55F76Nx9mUtchShun15DVNX79N/view?usp=sharing">example</a>.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
