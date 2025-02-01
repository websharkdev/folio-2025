import { Magnetic } from "@/components/custom/magnetic";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const recent = [
  {
    company: "Sploro & Kronis",
    type: "Full-Time",
    range: "11 months.",
    description:
      "I worked at Kronis as a Senior Front-end Developer, tasked with rebuilding the project on a new stack (NextJS). My focus was on speed, design, cost reduction, and user experience. I improved loading time from 4–6 seconds to 1.2, made the dashboard cleaner and more intuitive, and optimized server requests to cut costs.",
    stack: [
      "NextJS",
      "React",
      "TypeScript",
      "Tailwind",
      "NodeJS",
      "TanStack Query",
      "TanStack Table",
      "Recharts",
      "GeminAI",
    ],
  },
  {
    company: "Lumia",
    type: "Contract",
    range: "1 month.",
    description:
      "I worked at Lumia as a freelance developer, creating a web page for the official TGE. It was a short but valuable experience. The project initially aimed for an Apple Animation format, but we switched due to high server load.",
    stack: ["NextJS", "React", "TypeScript", "Tailwind", "ThreeJS", "WebGL"],
  },
  {
    company: "Alias",
    type: "Contract",
    range: "5 months.",
    description:
      "I worked at Alias as a Middle Front-end Developer on a contract basis, and it was my best experience. Beyond Alias’s partnership with Soneium, I was part of an incredible team, learning new things daily. My main task was building a dashboard where users could start quests and earn avatars.",
    stack: ["NextJS", "React", "TypeScript", "Tailwind", "ThreeJS", "WebGL"],
  },
  {
    company: "Freelance",
    range: "1.1 year.",
    description:
      "I worked at Kronis as a Senior Front-end Developer, tasked with rebuilding the project on a new stack (NextJS). My focus was on speed, design, cost reduction, and user experience. I improved loading time from 4–6 seconds to 1.2, made the dashboard cleaner and more intuitive, and optimized server requests to cut costs.",
    stack: [
      "NextJS",
      "React",
      "TypeScript",
      "NodeJS",
      "TanStack Query",
      "TanStack Table",
      "Recharts",
      "Storybook",
    ],
  },
];

const MWorks = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <div className="container mx-auto flex flex-col gap-10 h-max">
      <h6 className="text-6xl">Work Experience.</h6>

      <div className="h-screen grid grid-cols-1 max-w-6xl mx-auto gap-5">
        {recent.map((item, index) => (
          <div
            key={`working-expirience--${index}`}
            className="w-full h-max rounded-lg bg-slate-50/50 hover:bg-slate-50 grid grid-cols-10 gap-2 px-5 py-3.5 border border-slate-50/50 hover:border-input transition-all duration-500"
          >
            <div className="col-span-3 grid grid-cols-1">
              <span className="text-lg font-sans font-semibold">
                {item.company}
              </span>
              <span className="text-sm font-sans font-medium text-slate-500">
                {item.range}
              </span>
            </div>
            <p className="col-span-7 text-sm font-sans font-medium leading-relaxed">
              {item.description}
            </p>
            <div className="col-span-3 flex-wrap flex gap-1 items-center">
              {item.stack.map((stack, stackID) => (
                <span
                  key={`working-exp--${index}-${stackID}`}
                  className="bg-slate-950 hover:bg-slate-700 transition-all duration-700 rounded-full px-2.5 py-1.5 text-xs font-sans text-white"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="flex justify-center items-center">
          <div className="flex items-center gap-4 text-sm font-sans font-medium">
            <span>Much more in my</span>

            <Magnetic
              intensity={0.2}
              springOptions={springOptions}
              actionArea="global"
              range={200}
            >
              <Button href="https://www.linkedin.com/in/bortnytskyi-oleksii/">
                <Magnetic
                  intensity={0.1}
                  springOptions={springOptions}
                  actionArea="global"
                  range={200}
                >
                  <div className="flex justify-center items-center gap-1.5">
                    <ArrowUpRight size={18} strokeWidth={1.3} />
                    <span>LinkedIn</span>
                  </div>
                </Magnetic>
              </Button>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MWorks;
