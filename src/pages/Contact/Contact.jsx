import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../../components/Button";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal background elements
      gsap.to(sectionRef.current, { opacity: 1, duration: 1 });

      // Title split animation
      gsap.from(".contact-header-text", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".contact-header-text",
          start: "top 90%",
        },
      });

      // Address card reveal
      gsap.from(".address-card", {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".address-card",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="opacity-0 min-h-screen bg-[#050505] text-zinc-100 py-32 px-6 relative flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Gold Glow - Symbolic of the Temple City */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-zinc-800/20 blur-[150px] rounded-full" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="overflow-hidden mb-4">
            <h4 className="contact-header-text text-amber-500 font-mono tracking-[0.4em] uppercase text-sm">
              The Finest Cut in Srivilliputhur
            </h4>
          </div>
          <div className="overflow-hidden">
            <h2 className="contact-header-text text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
              Claim Your <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #d4d4d8" }}
              >
                Throne.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Address & Direction Card */}
          <div className="address-card bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-3xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
                  Our Coordinates
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Chinnakattai Vithi
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-sm">
                Main Road, Mangapuram,
                <br />
                Srivilliputhur, Tamil Nadu
                <br />
                626125, India
              </p>
            </div>

            <div className="mt-12">
              <a
                href="https://www.google.com/maps/search/Chinnakattai+Vithi+Main+Road,+Mangapuram,+Srivilliputhur"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-4 text-amber-500 font-bold uppercase tracking-widest text-sm"
              >
                Get Directions
                <span className="group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="address-card bg-zinc-100 p-8 md:p-12 rounded-3xl flex flex-col justify-between text-black">
            <div>
              <h3 className="text-4xl font-black uppercase tracking-tight mb-8">
                Ready for <br />
                Precision?
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest mb-1">
                    Appointment Desk
                  </p>
                  <p className="text-2xl font-bold">+91 9994565688</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest mb-1">
                    Digital Mail
                  </p>
                  <p className="text-2xl font-bold">rainbow@barber.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase">
                  Follow the craft
                </span>
                <div className="flex gap-4 font-black">
                  <Button/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Tagline */}
        <div className="mt-20 text-center">
          <p className="text-zinc-600 text-[10px] uppercase tracking-[1em]">
            Tradition meets the blade
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
