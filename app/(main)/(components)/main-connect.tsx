"use client";

import { GooeyFilter } from "@/components/custom/gooey-filter";
import { PixelTrail } from "@/components/custom/pixel-trail";
import { useScreenSize } from "@/hook/use-screen-size";
import Image from "next/image";

const MConnect = () => {
  const screenSize = useScreenSize();

  return (
    <div className="container relative w-full max-w-4xl h-[1195px] mx-auto flex flex-col items-center justify-center gap-8 bg-green-900 rounded-xl overflow-hidden text-center text-pretty">
      <Image
        src="/vangoghmuseum.jpg"
        alt="impressionist painting"
        className="aspect-[6/8] absolute left-1/2 top-0 -translate-x-1/2 opacity-70 grayscale"
        width={896}
        height={1200}
      />

      <GooeyFilter id="gooey-filter-pixel-trail" strength={5} />

      <div
        className="absolute inset-0 z-0"
        style={{ filter: "url(#gooey-filter-pixel-trail)" }}
      >
        <PixelTrail
          pixelSize={screenSize.lessThan(`md`) ? 24 : 32}
          fadeDuration={0}
          delay={500}
          pixelClassName="bg-white"
        />
      </div>
      <span className="pointer-events-none text-white text-7xl z-10 w-1/2 font-bold --font-pixel">
        Connect
      </span>
    </div>
  );
};

export default MConnect;
