import { GooeyFilter } from "@/components/custom/gooey-filter";
import { Magnetic } from "@/components/custom/magnetic";
import { Marquee } from "@/components/custom/marquee";
import { PixelTrail } from "@/components/custom/pixel-trail";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/custom/terminal";
import { Button } from "@/components/ui/button";
import { Check, Info, Loader, User } from "lucide-react";
import Image from "next/image";

const terminal = [
  {
    icon: Info,
    text: "Found 6 years experience at Frontend",
  },
  {
    icon: Check,
    text: "Verifying framework - Found React & NextJS.",
  },
  {
    icon: Check,
    text: "Validating TypeScript.",
  },
  {
    icon: Check,
    text: "Validating ThreeJS.",
  },
  {
    icon: Info,
    text: "Found 1 year experience at Backend.",
  },
  {
    icon: Check,
    text: "Validating NodeJS",
  },
  {
    icon: Check,
    text: "Verifying framework - Found Hono.js",
  },
  {
    icon: Loader,
    id: "loader",
    text: "Verifying - Nest.js in progress to learn",
  },
  {
    icon: Loader,
    id: "loader",
    text: "Verifying - Solidity in progress to learn",
  },
  {
    icon: Check,
    text: "Installing dependencies.",
  },
];

const MInfo = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className="container mx-auto py-10 h-max min-h-dvh flex items-center">
      <div className="grid grid-cols-5 gap-2.5 w-full">
        <Terminal className="col-span-full md:col-span-3 w-full max-w-full">
          <TypingAnimation>&gt; bun add cool-developer</TypingAnimation>

          {terminal.map((commands, index) => (
            <AnimatedSpan
              key={`main-info--commands-${index}`}
              delay={1500 + 500 * (index + 1)}
              className={"text-gray-500"}
            >
              <div className="flex items-center flex-nowrap gap-2.5">
                <commands.icon
                  size={12}
                  className={commands.id === "loader" ? "animate-spin" : ""}
                />
                <span>{commands.text}</span>
              </div>
            </AnimatedSpan>
          ))}

          <AnimatedSpan
            delay={1500 + 500 * (terminal.length + 1)}
            className="text-blue-600"
          >
            <div className="flex items-center flex-nowrap gap-2.5">
              <Info size={12} /> <span>Updated 1 employee:</span>
            </div>
            <span className="pl-2">+ Oleksii Bortnytskyi.ts</span>
          </AnimatedSpan>

          <TypingAnimation delay={6500} className="text-muted-foreground">
            Success!
          </TypingAnimation>
        </Terminal>
        <div className="col-span-full md:col-span-2 h-max min-h-[400px] flex flex-col justify-between border border-input rounded-xl">
          <div className="flex justify-end gap-y-2 border-b border-border p-4">
            <div className="flex flex-row gap-x-2">
              <div className="h-2 w-2 rounded-full bg-red-500"></div>
              <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="flex items-end gap-4 p-3.5">
            <div className="group relative">
              <div className="relative w-full max-w-4xl h-64 flex flex-col items-center justify-center gap-8 rounded-xl overflow-hidden text-center text-pretty">
                <Image
                  src="/oleksii-bortnytskyi.jpg"
                  width={256}
                  height={256}
                  priority
                  alt="oleksii-bortnytskyi--image"
                  className="rounded-xl cursor-pointer grayscale"
                />

                <GooeyFilter id="gooey-filter-pixel-info" strength={5} />

                <div
                  className="absolute inset-0 z-0"
                  style={{ filter: "url(#gooey-filter-pixel-info)" }}
                >
                  <PixelTrail
                    pixelSize={18}
                    fadeDuration={0}
                    delay={500}
                    pixelClassName="bg-white"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <div className="grid grid-cols-1 gap-1">
                <h6 className="text-2xl font-medium text-pretty font-sans">
                  Oleksii Bortnytksyi
                </h6>
                <span className="text-xs font-sans text-pretty text-gray-600">
                  {`@Fullstack developer`}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Magnetic
                  intensity={0.2}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <Button
                    href="https://www.linkedin.com/in/bortnytskyi-oleksii/"
                    size="sm"
                    className="font-sans"
                  >
                    <Magnetic
                      intensity={0.1}
                      springOptions={springOptions}
                      actionArea="global"
                      range={200}
                    >
                      <span>{`<Contact me />`}</span>
                    </Magnetic>
                  </Button>
                </Magnetic>
                <Button
                  size="icon"
                  href="https://o-bortnytskyi.notion.site/FullStack-Engineer-18f2e9365c7e8052ad0bd5ebf1c44bf4?pvs=4"
                  variant="outline"
                  className="size-8"
                >
                  <User size={12} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MInfo;
