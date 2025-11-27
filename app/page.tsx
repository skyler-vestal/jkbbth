"use client";

import { useState } from "react";
import BackgroundCarousel from "@/components/landing/BackgroundCarousel";
import SplashScreen from "@/components/landing/SplashScreen";
import LandingPageShowcase from "@/components/landing/LandingPageShowcase";
import VideoSection from "@/components/landing/VideoSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <main className="block">
        <BackgroundCarousel />
        <LandingPageShowcase />
        <VideoSection />
      </main>
    </>
  );
}
