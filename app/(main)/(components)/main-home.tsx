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
      <div className="flex -space-y-10 flex-col w-full max-w-5xl items-start border border-input p-10 rounded-xl">
        <p className="text-xl font-semibold font-sans leading-10 mb-5">
          Hello there 🖖 I&apos;m Oleksii Bortnytskyi and I&apos;m
        </p>
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
