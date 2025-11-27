"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import FeatureImageDisplay from "./FeatureImageDisplay";
import ShowcaseTextContent from "./ShowcaseTextContent";
import ScrollingProductGallery from "./ScrollingProductGallery";

export default function LandingPageShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 overflow-hidden">
        <div className="relative h-full w-full bg-white">
          <div className="absolute inset-0 z-0">
            <FeatureImageDisplay 
              imageSrc="/landing-page/cleaning-rings.jpg" 
              alt="Jewelry Crafting Process" 
            />
          </div>
          
          <div className="absolute inset-0 bg-black/10 z-10" />

          <div className="relative z-20 h-full">
            <ScrollingProductGallery scrollYProgress={scrollYProgress} />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="relative bg-violet-600 z-10">
          <ShowcaseTextContent />
        </div>
      </div>
    </section>
  );
}
