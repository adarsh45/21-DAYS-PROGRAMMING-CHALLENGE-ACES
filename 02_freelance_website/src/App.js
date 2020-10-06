import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Portfolio from "./Portfolio";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";


const App = ()=> {
    return (
        <div>
        <NavBar />
        <HomePage />
        <Portfolio />
        <AboutSection />
        <ContactSection />
        <Footer />
        </div>
    );
}

export default App;