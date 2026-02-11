import "./App.css";

import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/Gallery/Gallery";
import Header from "./pages/Header/Header";
import { Home } from "./pages/Home/Home";
import Pricing from "./pages/Pricing/Pricing";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <Header />

      <section id="home">
        <Home />
      </section>

      <section id="appointment">
        <Appointment />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="pricing">
        <Pricing />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
