import './App.css';
import './i18n';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Objects from './components/Objects';
import Services from './components/Services';
import Contact from './components/Contact';
import ScrollToTop from './ScrollToTop';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Objects />
            <Services />
            <Contact />
            <ScrollToTop />
        </>
    );
}

export default App;
