import React from "react";
import Image from "next/image";

const Hero = () => {

  return (
    <>
    <section id="hero" className="noisy">

  {/* Use custom and utility classes together */}
  <h1 id="title" className="text-gradient">MOJITO</h1>

  {/* Use correct custom class names for leaves */}
  <Image src="/images/hero-left-leaf.png" alt="hero" width={500} height={500} className="left-leaf mx-auto mt-10" />
  <Image src="/images/hero-right-leaf.png" alt="hero" width={500} height={500} className="right-leaf mx-auto mt-10" />

    <div className="body">
      <div className="content">
        <div className="space-y-5 hidden md:block">
          <p>Cool. Crsip. Classic</p>
          <p className="subtitle">
            Sip the Spirit <br /> of Summer
          </p>
        </div>

        <div className="view-cocktails">
          <p className="subtitle"> 
            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable. 
          </p>
          <a href="#cocktails">View Cocktails</a>
        </div>

      </div>
    </div>
    </section>
    </>
  );
};

export default Hero;
