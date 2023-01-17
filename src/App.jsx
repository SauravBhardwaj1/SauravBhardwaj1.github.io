
import './App.css';
import About from './components/About section/about';
import Contact from './components/Contact section/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home section/home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Project section/Project';
import Skills from './components/Skills section/Skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />   
      <Skills />
      <Projects />  
      <Contact />    
      <Footer />
    </div>
  );
}

export default App;
