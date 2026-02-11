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
      // ✅ Disable horizontal GSAP animation on mobile
      if (window.innerWidth < 768) {
        ScrollTrigger.killAll(); // extra safety
        return;
      }

      const getScrollAmount = () => {
        const scrollWidth = scrollRef.current.scrollWidth;
        return scrollWidth - window.innerWidth;
      };

      const amountToScroll = getScrollAmount();

      // ✅ Single shared tween (critical for smoothness)
      const horizontalTween = gsap.to(scrollRef.current, {
        x: -amountToScroll,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${amountToScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // ✅ Item animations tied to SAME tween
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

      ScrollTrigger.refresh();
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={triggerRef}
      className="bg-[#050505] overflow-x-hidden" // ✅ CRITICAL FIX
    >
      <section className="min-h-screen flex items-center relative">
        {" "}
        {/* ✅ safer than h-screen */}
        {/* Background Text */}
        <div className="absolute top-10 left-6 md:left-10">
          <h2 className="text-[15vw] font-black text-white/5 uppercase leading-none select-none">
            GALLERY
          </h2>
        </div>
        {/* ================= MOBILE LAYOUT ================= */}
        <div className="md:hidden flex flex-col gap-6 px-4 py-20 w-full">
          {images.map((img) => (
            <div key={img.id} className="w-full h-[320px]">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover rounded-md"
                draggable="false"
              />
              <div className="">
                <span className="text-amber-500 text-xs uppercase">
                  {img.category}
                </span>
                <h3 className="text-white text-lg font-bold uppercase">
                  {img.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
        {/* ================= DESKTOP LAYOUT ================= */}
        <div
          ref={scrollRef}
          className="hidden md:flex gap-12 px-[10vw] items-center"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className="gallery-item group relative flex-shrink-0
                         w-[450px] h-[550px]"
            >
              <div className="w-full h-full overflow-hidden border border-white/10">
                <img
                  src={img.url}
                  alt={img.title}
                  draggable="false"
                  className="
                    w-full h-full object-cover
                    scale-110 group-hover:scale-100
                    transition-transform duration-700 ease-out
                    grayscale hover:grayscale-0
                  "
                />
              </div>

              <div className="absolute -bottom-10 left-0 w-full flex justify-between">
                <div>
                  <span className="text-amber-500 text-xs uppercase">
                    {img.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold uppercase">
                    {img.title}
                  </h3>
                </div>
                <div className="text-white/20 text-4xl italic">0{img.id}</div>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="flex-shrink-0 w-[40vw] pl-20">
            <h3 className="text-white text-4xl font-light leading-tight">
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
