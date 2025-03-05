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

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Objects />
            <Services />
            <Contacts />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default App;
