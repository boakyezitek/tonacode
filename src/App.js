
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';
import Home from './component/Home/Home';
import AmazonClone from './component/Portfolio/AmazonClone';
import Portfolio from './component/Portfolio/Portfolio';


function App() {

  return (
    <div className="App">
      <Router>

          <Switch>
          <Route path="/" exact render={props => (
            <Home {...props} />)}/>

         {/* portfolio */}
          <Route path="/portfolio/amazon" exact render={props => (
            <AmazonClone {...props} />)} />
          {/* end of portfolio */}
          <Route path="/portfolio" exact render={props => (
            <Portfolio {...props} />)} />




          <Route path="/contact" exact render={props => (
            <Contact {...props} />)}/>
          <Route path="/about" exact render={props => (
            <About {...props} />)}/>
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
