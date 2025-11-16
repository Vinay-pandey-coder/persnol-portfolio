import React, { useRef } from "react";
import AnimatedHeaderSection from "../component/AnimatedHeaderSection";
import AnimatedTextLine from "../component/AnimatedTextLine";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean design and smooth 
        interactions — I craft scalable, high-performance 
        web applications from prototype to production.`;

  const aboutText = `I’m a Developer passionate about building fast, intuitive, and visually engaging web experiences. I specialize in crafting scalable, responsive applications with seamless interactions that delight users across devices. I take pride in writing clean, maintainable code and optimizing performance so every project I work on not only looks great but works beautifully. Outside of coding, I enjoy experimenting with new web technologies, teaching development on Twitch/YouTube, rock climbing, and strumming a few chords while my builds compile.`;

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <>
      <section id="about" className="min-h-screen bg-black rounded-b-4xl">
        <AnimatedHeaderSection
          subTitle={"Cod with purpose, Built to scale"}
          title={"About"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />

        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
          <img
            ref={imgRef}
            src="/images/men.jpg"
            alt="man"
            className="w-md rounded-3xl h-[500px]"
          />

          <AnimatedTextLine text={aboutText} className={"w-full"} />
        </div>
      </section>
    </>
  );
};

export default About;
