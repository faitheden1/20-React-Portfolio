import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/style.css"

import Header from './Components/Header';
import Portfoliopage from './pages/Portfoliopage';
import './App.css';
import Contact from "./pages/Contact";
import MainPage from "./pages/MainPage";

// /*App.js*/
// render() {
//   return (
//     <Router>
//       <Route exact path="/" component={MainPage} />
//       <Route exact path="/users" component={PortfolioPage} />
//       <Route exact path="/users" component={Contact} />
//     </Router>
//   );
// }

function App() {
  return (

    <Router>
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route exact path="/portfolio" component={Portfoliopage} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
