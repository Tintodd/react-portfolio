import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Welcome/Welcome';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Welcome />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
