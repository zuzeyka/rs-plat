import './App.css';
import './i18n';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Objects from './components/Objects';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ScrollToTop from './ScrollToTop';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
    return (
        <>
            <div className="vertical-line lg:left-[10vh] left-[2vh] bg-accent"></div>
            <div className="vertical-line lg:right-[10vh] right-[2vh] bg-accent"></div>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Objects />
            <Contacts />
            <Footer />
            <ThemeToggle />
            <ScrollToTop />
        </>
    );
}

export default App;
