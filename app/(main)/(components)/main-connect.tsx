"use client";

import { GooeyFilter } from "@/components/custom/gooey-filter";
import { Magnetic } from "@/components/custom/magnetic";
import { PixelTrail } from "@/components/custom/pixel-trail";
import { Button } from "@/components/ui/button";
import { useScreenSize } from "@/hook/use-screen-size";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MConnect = () => {
  const screenSize = useScreenSize();
  const springOptions = { bounce: 0.1 };

  return (
    <div className="container flex justify-center items-center mx-auto h-[140dvh] flex-col">
      <div className="relative w-full max-w-4xl h-[1195px] flex flex-col items-center justify-center gap-8 bg-green-900 rounded-xl overflow-hidden text-center text-pretty">
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
        <span className="pointer-events-none text-white text-8xl z-10 w-1/2 font-sans">
          Connect
        </span>

        <div className="z-20">
          <Magnetic
            intensity={0.2}
            springOptions={springOptions}
            actionArea="global"
            range={200}
          >
            <Link
              className="flex flex-nowrap items-center gap-2.5 font-sans font-medium border border-input z-20 bg-opacity-100 bg-slate-50 py-1.5 px-2.5 rounded"
              href="mailto:alexey.bortnytskyi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Magnetic
                intensity={0.1}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <div className="flex justify-center items-center gap-1.5">
                  <ArrowUpRight size={14} />
                  <span>alexey.bortnytskyi@gmail.com</span>
                </div>
              </Magnetic>
            </Link>
          </Magnetic>
        </div>
      </div>

      <div className="h-20 w-full py-2.5 grid grid-cols-2 gap-2.5 max-w-4xl mx-auto">
        <Button
          className="font-sans font-medium border border-input"
          variant="ghost"
          href="https://www.linkedin.com/in/bortnytskyi-oleksii/"
        >
          <Linkedin size={14} />
          <span>LinkedIn</span>
        </Button>
        <Button
          className="font-sans font-medium border border-input"
          variant="ghost"
          href="https://github.com/websharkdev"
        >
          <Github size={14} />
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default MConnect;
