import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Hero from '../src/components/hero/Hero';
import Person from '../src/components/person/Person';
import About from "./components/about/About";

function App() {
  return (
    <Router>
      <Navbar />
      <hr/>
      <Hero />
      <hr/>
      <Person /> <br />
      <About />
    </Router>
  );
}

export default App;