import { defaultMetadata } from "@/lib/сonfig";
import { MAbout, MConnect, MHome, MInfo, MWorks } from "./(components)";

export const metadata = defaultMetadata;

const Page = () => {
  return (
    <div className="relative z-10 flex flex-col gap-10">
      <MHome />
      <MAbout />
      <MWorks />
      <MInfo />
      <MConnect />
    </div>
  );
};

export default Page;
