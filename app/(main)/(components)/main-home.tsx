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
    <div className="h-[calc(100dvh_-_80px)] flex container px-4 mx-auto items-end relative">
      <div className="grid grid-cols-6 gap-4 items-center w-full border border-input rounded-xl bg-white">
        <div className="col-span-full -order-10 flex flex-col gap-y-2 border-b border-border p-4">
          <div className="flex flex-row gap-x-2">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="col-span-full sm:col-span-3 flex flex-col items-start p-6 sm:p-10 space-y-2.5">
          <p className="w-full text-xs sm:text-sm lg:text-xl font-sans lg:leading-10">
            Hello there 🖖 I&apos;m Oleksii Bortnytskyi and I&apos;m
          </p>
          <div className="flex items-center gap-4">
            <span className="text-center font-sans font-bold text-black text-3xl leading-none [filter:url(#threshold)_blur(0.6px)] md:text-4xl lg:text-6xl 2xl:text-8xl">
              Creative
            </span>
            <MorphingText texts={texts} />
          </div>
          <div className="flex items-center gap-10">
            <span className="text-center font-sans font-bold text-black text-3xl leading-none [filter:url(#threshold)_blur(0.6px)] md:text-4xl lg:text-6xl 2xl:text-8xl">
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
                className="text-xs sm:text-sm font-sans"
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
        <div className="hidden sm:flex col-span-3 mr-auto lg:mr-0 lg:ml-auto relative overflow-hidden max-w-full">
          <pre className="text-[6px] sm:text-[8px] md:text-xs !leading-none font-mono">
            {ascii_art}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default MHome;
