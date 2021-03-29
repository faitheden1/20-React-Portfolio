//You have to use the link component to link between you pages 
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h3>Welcome to Faith's React Portfolio!</h3>
            <small>Main Page</small>
            <Link to="/contact">Contact</Link>
            <Link to="/">Main</Link>
            <Link to="/portfolio">Portfolio Page</Link>
        </div>
    );
};

export default MainPage;
