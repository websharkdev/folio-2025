import { MAbout, MConnect, MHome, MWorks } from "./(components)";

const Page = () => {
  return (
    <div className="relative z-10 flex flex-col gap-10">
      <MHome />
      <MAbout />
      <MWorks />
      <MConnect />
    </div>
  );
};

export default Page;
