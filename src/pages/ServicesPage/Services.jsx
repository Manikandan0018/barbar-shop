import { useEffect, useRef } from "react";
import gsap from "gsap";

const services = [
  "Classic Haircut",
  "Skin Fade",
  "Beard Trim",
  "Hot Towel Shave",
  "Facial Treatment",
  "Hair Spa",
];

const Services = () => {
  const cards = useRef([]);

  useEffect(() => {
    gsap.from(cards.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="min-h-screen bg-black text-white py-24">
      <h2 className="text-center text-4xl mb-14">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((service, i) => (
          <div
            key={i}
            ref={(el) => (cards.current[i] = el)}
            className="border border-white/20 p-8 text-center hover:bg-white hover:text-black transition"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
