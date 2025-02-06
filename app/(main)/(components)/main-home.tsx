import { Magnetic } from "@/components/custom/magnetic";
import { MorphingText } from "@/components/custom/morphing-text";
import { Button } from "@/components/ui/button";
import { ascii_art } from "./art";

const texts = [
  "Fullstack",
  "Frontend",
  "React",
  "ThreeJS",
  "Backend",
  "NodeJS",
];

const MHome = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className="h-dvh pb-20 flex container mx-auto items-end relative">
      <div className="grid grid-cols-6 w-full border border-input rounded-xl bg-white">
        <div className="col-span-full flex flex-col gap-y-2 border-b border-border p-4">
          <div className="flex flex-row gap-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-4 flex flex-col items-start p-10">
          <p className="text-xl font-sans leading-10 md:mb-10 lg:mb-5">
            Hello there 🖖 I&apos;m Oleksii Bortnytskyi and I&apos;m
          </p>
          <div className="flex items-center gap-4">
            <span className="text-center font-sans font-bold text-black text-[40pt] leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]">
              Creative
            </span>
            <MorphingText texts={texts} />
          </div>
          <div className="flex items-center gap-10">
            <span className="text-center font-sans font-bold text-black text-[40pt] leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]">
              Developer
            </span>

            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <Button
                variant="secondary"
                size="lg"
                className="text-sm font-sans"
                href="mailto:alexey.bortnytskyi@gmail.com"
              >
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <span>{`<Contact me/>`}</span>
                </Magnetic>
              </Button>
            </Magnetic>
          </div>
        </div>
        <div className="col-span-2 relative">
          <pre className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs leading-none font-mono">
            {ascii_art}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MHome;
