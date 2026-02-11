import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import shop1 from "../../image/shop-1.jpg";
import shop2 from "../../image/shop-2.jpg";
import shop3 from "../../image/shop-3.jpg";
import shop4 from "../../image/shop-4.jpg";


gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    id: 1,
    title: "The Sharp Fade",
    category: "Classic",
    url: shop1,
  },
  {
    id: 2,
    title: "Beard Sculpt",
    category: "Grooming",
    url: shop2,
  },
  {
    id: 3,
    title: "Vintage Texture",
    category: "Styling",
    url: shop3,
  },
  {
    id: 4,
    title: "Modern Pompadour",
    category: "Trends",
    url: shop4,
  },
  {
    id: 5,
    title: "The Razor Edge",
    category: "Detailing",
    url: shop2,
  },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = scrollRef.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const amountToScroll = scrollWidth - windowWidth;

      gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          markers: false,
        },
      });

      // Individual Image Parallax/Reveal
      gsap.utils.toArray(".gallery-item").forEach((item) => {
        gsap.from(item, {
          rotateY: -25,
          opacity: 0,
          scale: 0.8,
          scrollTrigger: {
            trigger: item,
            containerAnimation: gsap.to(scrollRef.current, {
              x: -amountToScroll,
            }), // Connect to horizontal scroll
            start: "left 90%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#050505] overflow-hidden">
      <section className="h-screen flex items-center relative">
        {/* Floating Background Text */}
        <div className="absolute top-10 left-10 overflow-hidden">
          <h2 className="text-[15vw] font-black text-white/5 uppercase leading-none select-none">
            GALLERY
          </h2>
        </div>

        {/* Horizontal Container */}
        <div
          ref={scrollRef}
          className="flex gap-12 px-[10vw] items-center whitespace-nowrap"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item group relative flex-shrink-0 w-[80vw] md:w-[450px] h-[60vh] md:h-[550px]"
            >
              {/* Image Frame */}
              <div className="w-full h-full overflow-hidden rounded-sm border border-white/10 group-hover:border-amber-500/50 transition-colors duration-500">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
                />
              </div>

              {/* Bottom Label */}
              <div className="absolute -bottom-12 left-0 w-full flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="text-amber-500 font-mono text-xs block uppercase tracking-tighter">
                    {img.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold uppercase tracking-widest">
                    {img.title}
                  </h3>
                </div>
                <div className="text-white/20 text-4xl font-serif italic">
                  0{img.id}
                </div>
              </div>
            </div>
          ))}

          {/* End CTA */}
          <div className="flex-shrink-0 w-[40vw] flex flex-col items-start justify-center pl-20">
            <h3 className="text-white text-4xl font-light leading-tight">
              Ready for your <br />
              <span className="italic font-serif text-amber-500 underline underline-offset-8">
                New Identity?
              </span>
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
