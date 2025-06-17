import { Routes, Route, Link } from 'react-router-dom';
import Home from './componant/Home.jsx';
import About from './componant/About.jsx';
import Skills from './componant/Skills.jsx';
import Contact from './componant/Contact.jsx';
import Projects from './componant/Projects.jsx';
import Navbar from './componant/Navbar.jsx';

function App() {
  return (
    <>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
