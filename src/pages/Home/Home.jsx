import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

import homeim2 from "../../image/shop-1.jpg";
import homeim from "../../image/barbar-home.jpg";

import ScrollVelocity from "../../components/ScrollVelocity";

export const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 3.2,
        ease: "power3.out",
      },
    );
  }, []);

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <img
          src={homeim}
          className="absolute inset-0 w-full h-full object-cover z-0 hidden lg:block"
        />

        <img
          src={homeim2}
          className="absolute inset-0 w-full h-full object-cover z-0 block lg:hidden"
        />

        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/80 via-black/10 to-black/30"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="rubik-glitch-regular lg:text-9xl md:text-7xl text-5xl">
              LOOK AT ME
            </h1>

            <h1 className=" lg:text-5xl md:text-3xl text-2xl">RAINBOW</h1>
          </div>
        </div>
      </div>

      <ScrollVelocity
        texts={["Rainbow", "confidence start with Great Hair Cut"]}
        velocity={100}
        className="custom-scroll-text"
      />
    </>
  );
};
