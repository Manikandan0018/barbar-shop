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
      className="min-h-screen bg-[#0f0f0f] text-zinc-100 py-16 sm:py-20 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
          <h2 className="reveal-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase italic leading-tight">
            Sharp Styles <br />
            <span className="text-amber-500">Reserved</span> For You
          </h2>

          <p className="reveal-text text-zinc-400 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Step into the chair. Our master barbers are ready to craft your
            signature look. Select your service and claim your spot in the
            lineup.
          </p>

          <div className="reveal-text pt-2 sm:pt-4">
            <div className="flex items-center justify-center lg:justify-start space-x-4 border-l-2 border-amber-500 pl-4">
              <span className="text-lg sm:text-2xl md:text-3xl font-serif italic text-amber-500">
                "The best cut in the city"
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={formRef}
          className="relative bg-zinc-900/50 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-zinc-800 backdrop-blur-sm"
        >
          <form className="space-y-5 sm:space-y-6">
            {/* NAME */}
            <div className="form-item group relative">
              <input
                type="text"
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-zinc-700 py-2 sm:py-3 outline-none focus:border-amber-500 transition-colors text-sm sm:text-base"
              />
              <label
                className="absolute left-0 top-2 sm:top-3 text-zinc-500 text-xs sm:text-sm transition-all pointer-events-none 
          peer-focus:-top-3 peer-focus:text-amber-500 peer-focus:text-xs
          peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                FULL NAME
              </label>
            </div>

            {/* PHONE */}
            <div className="form-item group relative">
              <input
                type="tel"
                placeholder=" "
                className="peer w-full bg-transparent border-b-2 border-zinc-700 py-2 sm:py-3 outline-none focus:border-amber-500 transition-colors text-sm sm:text-base"
              />
              <label
                className="absolute left-0 top-2 sm:top-3 text-zinc-500 text-xs sm:text-sm transition-all pointer-events-none 
          peer-focus:-top-3 peer-focus:text-amber-500 peer-focus:text-xs
          peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs"
              >
                PHONE NUMBER
              </label>
            </div>

            {/* SELECT */}
            <div className="form-item">
              <label className="text-[10px] sm:text-xs text-amber-500 font-bold mb-2 block uppercase tracking-widest">
                Select Service
              </label>

              <select className="w-full bg-zinc-800 p-3 sm:p-4 rounded-lg outline-none appearance-none cursor-pointer text-sm sm:text-base focus:ring-2 focus:ring-amber-500">
                <option>The Executive Haircut</option>
                <option>Beard Sculpting & Steam</option>
                <option>Luxury Face Shave</option>
                <option>The Full Grooming Experience</option>
              </select>
            </div>

            {/* BUTTON */}
            <button
              className="
    w-full
    relative overflow-hidden
    bg-amber-500 text-black font-bold
    rounded-lg

    py-3 px-4
    sm:py-4 sm:px-6
    md:py-4 md:px-8

    text-sm
    sm:text-base
    md:text-lg

    transition-all duration-200
    hover:scale-[1.02]
    active:scale-95

    flex items-center justify-center
  "
            >
              <span className="relative z-10 whitespace-nowrap">
                CONFIRM APPOINTMENT
              </span>

              <div
                className="
      absolute inset-0
      bg-white/20
      translate-y-full
      hover:translate-y-0
      transition-transform duration-300
    "
              ></div>
            </button>

            <p className="form-item text-center text-[10px] sm:text-xs text-zinc-500">
              *You will receive a confirmation SMS shortly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
