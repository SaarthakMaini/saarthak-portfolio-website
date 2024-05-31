import './App.css';
import Navbar from './components/Navbar.js'
import {Route,Routes} from 'react-router-dom'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'
import Skills from './components/pages/Skills.js'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/skills" element={<Skills/>} />
    </Routes>
    </>
  );
}

export default App;
