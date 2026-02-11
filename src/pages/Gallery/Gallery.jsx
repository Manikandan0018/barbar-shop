import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import shop1 from "../../image/shop-1.jpg";
import shop2 from "../../image/shop-2.jpg";
import shop3 from "../../image/shop-3.jpg";
import shop4 from "../../image/shop-4.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { id: 1, title: "The Sharp Fade", category: "Classic", url: shop1 },
  { id: 2, title: "Beard Sculpt", category: "Grooming", url: shop2 },
  { id: 3, title: "Vintage Texture", category: "Styling", url: shop3 },
  { id: 4, title: "Modern Pompadour", category: "Trends", url: shop4 },
  { id: 5, title: "The Razor Edge", category: "Detailing", url: shop2 },
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Disable heavy animation on mobile (VERY COMMON PRODUCTION RULE)
      if (window.innerWidth < 768) return;

      const getScrollAmount = () => {
        const scrollWidth = scrollRef.current.scrollWidth;
        return scrollWidth - window.innerWidth;
      };

      const amountToScroll = getScrollAmount();

      // ✅ SINGLE shared tween (CRITICAL FIX)
      const horizontalTween = gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true, // ✅ handles resize/orientation
        },
      });

      // ✅ Item animations using SAME tween
      gsap.utils.toArray(".gallery-item").forEach((item) => {
        gsap.from(item, {
          opacity: 0,
          scale: 0.9,
          scrollTrigger: {
            trigger: item,
            containerAnimation: horizontalTween,
            start: "left 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ✅ Important for mobile rotations / resize
      ScrollTrigger.refresh();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-[#050505] overflow-hidden">
      <section className="h-screen flex items-center relative">
        {/* Background Text */}
        <div className="absolute top-10 left-10 overflow-hidden">
          <h2 className="text-[15vw] font-black text-white/5 uppercase leading-none select-none">
            GALLERY
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-12 px-[6vw] md:px-[10vw] items-center"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item group relative flex-shrink-0
                         w-[85vw] sm:w-[70vw] md:w-[450px]
                         h-[55vh] sm:h-[50vh] md:h-[550px]"
            >
              {/* Image Frame */}
              <div className="w-full h-full overflow-hidden rounded-sm border border-white/10">
                <img
                  src={img.url}
                  alt={img.title}
                  draggable="false"
                  className="
                    w-full h-full object-cover
                    md:scale-110 md:group-hover:scale-100
                    transition-transform duration-700 ease-out
                    md:grayscale md:hover:grayscale-0
                  "
                />
              </div>

              {/* Label */}
              <div className="absolute -bottom-10 left-0 w-full flex justify-between items-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <span className="text-amber-500 font-mono text-xs uppercase">
                    {img.category}
                  </span>
                  <h3 className="text-white text-lg md:text-2xl font-bold uppercase">
                    {img.title}
                  </h3>
                </div>
                <div className="text-white/20 text-2xl md:text-4xl italic">
                  0{img.id}
                </div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="flex-shrink-0 w-[60vw] md:w-[40vw] pl-6 md:pl-20">
            <h3 className="text-white text-2xl md:text-4xl font-light leading-tight">
              Ready for your <br />
              <span className="italic text-amber-500 underline underline-offset-4">
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
