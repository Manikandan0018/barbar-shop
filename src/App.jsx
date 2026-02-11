import { useEffect, useState } from "react";
import "./App.css";
import { Home } from "./pages/Home/Home";
import Appointment from "./pages/Appointment/Appointment";
import Team from "./pages/Team/Team";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Pricing from "./pages/Pricing/Pricing";
import Header from "./pages/Header/Header";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <section>
        <Header/>
      </section>
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
    </>
  );
}

export default App;