import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import Hero from '../src/components/hero/Hero';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;