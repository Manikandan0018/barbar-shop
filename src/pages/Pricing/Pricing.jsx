import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pricingData = [
  {
    name: "Executive Haircut",
    price: "350",
    desc: "Consultation, precision cut & style",
  },
  {
    name: "Royal Beard Sculpt",
    price: "250",
    desc: "Hot towel, trim & oil treatment",
  },
  {
    name: "Skin Fade / Taper",
    price: "450",
    desc: "Zero-blended master craftsmanship",
  },
  {
    name: "Charcoal De-Tan Facial",
    price: "850",
    desc: "Deep pore cleansing & tan removal",
  },
  {
    name: "Moroccan Hair Spa",
    price: "1200",
    desc: "Intense hydration & scalp massage",
  },
  {
    name: "The Groom's Ritual",
    price: "2500",
    desc: "Full service: Hair, Beard, Facial & Spa",
  },
];

const Pricing = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal the container first so it's definitely visible
      gsap.set(".pricing-row", { opacity: 0, y: 30 });

      ScrollTrigger.batch(".pricing-row", {
        onEnter: (elements) => {
          gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power4.out",
            overwrite: true,
          });
        },
        start: "top 90%", // Trigger earlier for better visibility
      });

      // Animated "Scanner" line effect
      gsap.to(".scanner-line", {
        top: "100%",
        duration: 4,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#050505] text-white py-32 px-4 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header with unique vertical layout */}
        <div className="flex items-start gap-8 mb-24">
          <div className="hidden md:block w-px h-32 bg-gradient-to-b from-amber-500 to-transparent relative">
            <div className="scanner-line absolute left-[-2px] top-0 w-1 h-10 bg-amber-400 blur-sm" />
          </div>
          <div>
            <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter uppercase opacity-10 absolute -top-16 -left-10 select-none">
              Rates
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold uppercase relative z-10">
              Premium <span className="text-amber-500">Service</span> <br />
              Menu <span className="font-light text-zinc-500">2026</span>
            </h3>
          </div>
        </div>

        {/* Pricing List */}
        <div className="space-y-4">
          {pricingData.map((item, i) => (
            <div
              key={i}
              className="pricing-row group relative overflow-hidden bg-zinc-900/30 backdrop-blur-md border border-white/5 p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 hover:border-amber-500/50 hover:bg-zinc-900/60"
            >
              {/* Hover Background Reveal */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />

              <div className="relative z-10">
                <span className="text-xs font-mono text-amber-500 tracking-widest uppercase mb-2 block">
                  SERVICE_{i + 1}
                </span>
                <h4 className="text-2xl md:text-3xl font-bold uppercase group-hover:text-amber-500 transition-colors">
                  {item.name}
                </h4>
                <p className="text-zinc-500 text-sm mt-2 max-w-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="relative z-10 mt-6 md:mt-0 flex items-baseline gap-1">
                <span className="text-amber-500 text-sm font-bold">INR</span>
                <span className="text-5xl md:text-6xl font-black tracking-tighter">
                  {item.price}
                </span>
                <div className="w-2 h-2 bg-amber-500 rounded-full ml-2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Floating Contact Hint */}
        <div className="mt-20 flex flex-col items-center">
          <div className="w-px h-20 bg-zinc-800 mb-6" />
          <p className="text-zinc-500 text-xs uppercase tracking-[0.5em] animate-bounce">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
