"use client";

import { GooeyFilter } from "@/components/custom/gooey-filter";
import { Magnetic } from "@/components/custom/magnetic";
import { PixelTrail } from "@/components/custom/pixel-trail";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Image from "next/image";

const MConnect = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className="container flex justify-center items-center mx-auto h-max flex-col">
      <div className="flex">
        <div className="relative w-full max-w-4xl flex flex-col items-center justify-center gap-8 rounded-xl overflow-hidden text-center text-pretty">
          <Image
            src="/vangoghmuseum.png"
            alt="impressionist painting"
            className="grayscale rounded-xl aspect-[8/9]"
            width={880}
            height={990}
          />

          <GooeyFilter id="gooey-filter-pixel-trail" strength={6} />

          <div
            className="absolute inset-0 z-0"
            style={{ filter: "url(#gooey-filter-pixel-trail)" }}
          >
            <PixelTrail
              pixelSize={24}
              fadeDuration={0}
              delay={500}
              pixelClassName="bg-white"
            />
          </div>

          <div className="content absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <span className="pointer-events-none text-white text-8xl z-10 w-1/2 font-sans font-medium">
              Connect
            </span>

            <div className="z-20">
              <Magnetic
                intensity={0.2}
                springOptions={springOptions}
                actionArea="global"
                range={200}
              >
                <Button
                  variant="secondary"
                  className="font-sans"
                  href="mailto:alexey.bortnytskyi@gmail.com"
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
                </Button>
              </Magnetic>
            </div>
          </div>
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
