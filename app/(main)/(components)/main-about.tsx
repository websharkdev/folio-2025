import { TextReveal } from "@/components/custom/text-reveal";

const text =
  "My name is Oleksii Bortnitsky and I specialize in FullStack development. Using technologies such as NextJS, React, TypeScript, NodeJS, ThreeJS, and WebGL. I bring to life websites with breathtaking visuals. My goal is to create unique and interactive interfaces that make a lasting impression on users, providing a memorable and enjoyable journey through the site. I was born in Ukraine and started studying development at the age of 14. Over the years, I have successfully completed several projects, which you can find below. Now I live in Pamplona, Spain and focus on remote work opportunities.";

const MAbout = () => {
  return (
    <div className="h-[200dvh]">
      <TextReveal text={text} />
    </div>
  );
};

export default MAbout;
