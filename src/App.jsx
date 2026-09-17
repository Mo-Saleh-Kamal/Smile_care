import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal/Reveal";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Reveal direction="up">
          <About />
        </Reveal>

        <Reveal direction="left">
          <Services />
        </Reveal>

        <Reveal direction="right">
          <Doctors />
        </Reveal>

        <Reveal direction="up">
          <Testimonials />
        </Reveal>

        <Reveal direction="left">
          <Appointment />
        </Reveal>

        <Reveal direction="right">
          <Contact />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}

export default App;
