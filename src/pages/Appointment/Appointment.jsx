import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Appointment = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the text elements
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate form inputs with a stagger
      gsap.from(".form-item", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#0f0f0f] text-zinc-100 py-20 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Brand Experience */}
        <div className="space-y-6">
          <h2 className="reveal-text text-5xl md:text-7xl font-bold tracking-tighter uppercase italic">
            Sharp Styles <br />
            <span className="text-amber-500">Reserved</span> For You
          </h2>
          <p className="reveal-text text-zinc-400 text-lg max-w-md">
            Step into the chair. Our master barbers are ready to craft your
            signature look. Select your service and claim your spot in the
            lineup.
          </p>
          <div className="reveal-text pt-4">
            <div className="flex items-center space-x-4 border-l-2 border-amber-500 pl-4">
              <span className="text-3xl font-serif italic text-amber-500">
                "The best cut in the city"
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Modern Form */}
        <div
          ref={formRef}
          className="relative bg-zinc-900/50 p-8 md:p-12 rounded-2xl border border-zinc-800 backdrop-blur-sm"
        >
          <form className="space-y-6">
            {/* Input Group */}
            <div className="form-item group relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-zinc-700 py-3 outline-none focus:border-amber-500 transition-colors"
              />
              <label className="absolute left-0 top-3 text-zinc-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-amber-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                FULL NAME
              </label>
            </div>

            <div className="form-item group relative">
              <input
                type="tel"
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-zinc-700 py-3 outline-none focus:border-amber-500 transition-colors"
              />
              <label className="absolute left-0 top-3 text-zinc-500 transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-amber-500 peer-focus:text-sm peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-sm">
                PHONE NUMBER
              </label>
            </div>

            <div className="form-item">
              <label className="text-xs text-amber-500 font-bold mb-2 block uppercase tracking-widest">
                Select Service
              </label>
              <select className="w-full bg-zinc-800 border-none p-4 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none appearance-none cursor-pointer">
                <option>The Executive Haircut</option>
                <option>Beard Sculpting & Steam</option>
                <option>Luxury Face Shave</option>
                <option>The Full Grooming Experience</option>
              </select>
            </div>

            <button className="form-item w-full group relative overflow-hidden bg-amber-500 text-black font-bold py-4 rounded-lg transition-transform hover:scale-[1.02] active:scale-95">
              <span className="relative z-10">CONFIRM APPOINTMENT</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <p className="form-item text-center text-xs text-zinc-500 mt-4">
              *You will receive a confirmation SMS shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
