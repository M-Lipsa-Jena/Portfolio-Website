import React from "react";
import Navbar from "./assets/Components/Nav Bar/Navbar";
import Hero from "./assets/Components/Hero/Hero";
import About from "./assets/Components/About/About";
import Contact from "./assets/Components/Contact/Contact";
import MyWork from "./assets/Components/MyWork/MyWork.jsx";
import MySkills from "./assets/Components/My skills/Myskills.jsx";
import Footer from "./assets/Components/Footer/Footer.jsx";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <About/>
            <MySkills/>
            <MyWork/>
            <Contact/>
            <Footer/>
        </div>

    )
}
export default App
