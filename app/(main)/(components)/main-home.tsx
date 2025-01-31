import { MorphingText } from "@/components/custom/morphing-text";

const texts = [
  "Fullstack",
  "Frontend",
  "React",
  "ThreeJS",
  "Backend",
  "NodeJS",
];

const MHome = () => {
  return (
    <div className="h-dvh pb-20 flex container mx-auto items-end">
      <div className="flex -space-y-10 flex-col">
        <div className="flex items-center gap-4">
          <span className="text-center font-sans font-bold text-black text-[6rem]">
            Creative
          </span>
          <MorphingText texts={texts} />
        </div>
        <span className="text-center font-sans font-bold text-black text-[6rem]">
          Developer
        </span>
      </div>
    </div>
  );
};

export default MHome;
