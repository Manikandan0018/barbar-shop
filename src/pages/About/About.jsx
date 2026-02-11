import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import im from "../../image/barbar-home.webp"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline "unmasking" animation
      gsap.from(".about-title", {
        y: 100,
        skewY: 7,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-title",
          start: "top 90%",
        },
      });

      // Paragraph Stagger
      gsap.from(".about-text", {
        opacity: 0,
        x: -30,
        stagger: 0.3,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
        },
      });

      // Image Parallax Effect
      gsap.to(imageRef.current, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] py-32 px-6 flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Large Visual Component */}
        <div className="lg:col-span-5 relative">
          <div className="relative z-10 overflow-hidden rounded-sm">
            <img
              ref={imageRef}
              src={im}
              alt="Barber Craft"
              className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
            />
          </div>
          {/* Decorative floating square */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/20 -z-0 hidden md:block" />
        </div>

        {/* Right Side: Narrative Content */}
        <div className="lg:col-span-7 lg:pl-12 space-y-10">
          <div className="overflow-hidden">
            <h2 className="about-title text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter">
              Legacy <br />
              <span className="text-amber-600">In Every</span> <br />
              Stroke.
            </h2>
          </div>

          <div className="space-y-6 max-w-xl">
            <p className="about-text text-xl md:text-2xl font-medium leading-relaxed">
              We don’t just cut hair; we curate identities. Founded on the
              principles of classic barbering and evolved through modern street
              culture.
            </p>

            <p className="about-text text-zinc-500 leading-relaxed">
              Every chair in our shop is a sanctuary for the modern gentleman.
              We blend heritage grooming techniques with precision engineering
              to ensure that you walk out not just looking better, but feeling
              redefined.
            </p>
          </div>

          {/* Stats / Credentials */}
          <div className="about-text flex gap-12 pt-6">
            <div>
              <span className="block text-4xl font-bold italic">15+</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                Years Exp.
              </span>
            </div>
            <div className="w-px h-12 bg-zinc-200" />
            <div>
              <span className="block text-4xl font-bold italic">50k+</span>
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-bold">
                Clean Fades
              </span>
            </div>
          </div>

          <div className="about-text">
            <button className="px-8 py-4 border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors duration-300 tracking-widest text-xs">
              Explore Our History
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
