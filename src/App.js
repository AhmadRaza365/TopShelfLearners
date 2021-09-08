
import './App.css';
import './components/Header.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';


function App() {
  return (
    
    <>

      <Router>

    <Header />
        <Switch>

          <Route exact path ="/TopShelfLearners">
            <Home />
          </Route>

          <Route exact path ="/about">
            <About />
          </Route>

          <Route exact path ="/courses">
           <Courses />
          </Route>

          <Route exact path ="/contact">
           <Contact />
          </Route>

        </Switch>

    <Footer />  

      </Router>
      </>

  );
}

export default App;
