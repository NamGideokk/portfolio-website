import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import WantToBe from "./components/wantToBe/WantToBe";
import Portfolio from "./components/portfolio/Portfolio";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <WantToBe />
      <Portfolio />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
