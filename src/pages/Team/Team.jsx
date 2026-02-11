import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import team1 from "../../image/team-1.jpg";
import team2 from "../../image/team-2.jpg";
import team3 from "../../image/team-3.jpg";

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    name: "Marcus Vane",
    role: "Senior Barber",
    img: team1,
  },
  {
    name: "Leo 'Fade' Rossi",
    role: "Fade Specialist",
    img: team2,
  },
  {
    name: "Julian Thorne",
    role: "Beard Expert",
    img: team3,
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".team-title", {
        x: -100,
        opacity: 0,
        rotate: -5,
        scrollTrigger: {
          trigger: ".team-title",
          start: "top 90%",
          end: "top 60%",
          scrub: 1,
        },
      });

      // Card Revelations
      gsap.utils.toArray(".barber-card").forEach((card, i) => {
        const image = card.querySelector(".barber-img");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        tl.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        }).from(
          image,
          {
            scale: 1.5,
            duration: 1.5,
            ease: "expo.out",
          },
          "-=0.8",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#0a0a0a] py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="team-title text-7xl md:text-9xl font-black text-zinc-800 uppercase leading-none select-none">
            OUR <br /> <span className="text-zinc-100">TEAM</span>
          </h2>
          <p className="max-w-xs text-zinc-500 text-sm tracking-widest uppercase">
            Mastery in every stroke. Meet the artisans redefining the modern
            gentleman.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {team.map((barber, i) => (
            <div
              key={i}
              className="barber-card group relative flex flex-col items-start"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900 border border-zinc-800">
                <img
                  src={barber.img}
                  alt={barber.name}
                  className="barber-img w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* Overlay Name - Editorial Style */}
                <div className="absolute top-4 right-4 [writing-mode:vertical-lr] mix-blend-difference">
                  <span className="text-white font-bold uppercase tracking-tighter text-2xl">
                    {barber.name}
                  </span>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-6 space-y-1">
                <div className="h-[2px] w-12 bg-amber-500 transition-all duration-500 group-hover:w-full" />
                <p className="text-amber-500 font-mono text-sm pt-2 uppercase tracking-[0.2em]">
                  {barber.role}
                </p>
                <button className="text-zinc-100 text-xs mt-4 opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 underline decoration-amber-500 underline-offset-4">
                  VIEW PORTFOLIO
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
