import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/custom/terminal";
import { Button } from "@/components/ui/button";
import { Info, TriangleAlert } from "lucide-react";
import Image from "next/image";

const MInfo = () => {
  return (
    <div className="container mx-auto py-10 min-h-dvh grid grid-cols-5 gap-2.5">
      <Terminal className="col-span-3 w-full max-w-full">
        <TypingAnimation>&gt; bun add cool-developer</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ {`6 years expirience at Frontend`}.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Verifying framework. Found Next.js & React.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Validating TypeScript.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Validating Backend expirience.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Verifying NodeJS</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Verifying framework - Found Hono.js</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-yellow-600">
          <div className="flex items-center flex-nowrap gap-2.5">
            <TriangleAlert size={12} />
            <span>Verifying Nest.js in progress to learn</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-blue-600">
          <div className="flex items-center flex-nowrap gap-2.5">
            <Info size={12} />
            <span>Verifying Solidity in progress to learn</span>
          </div>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>

        <AnimatedSpan delay={6000} className="text-blue-600">
          <div className="flex items-center flex-nowrap gap-2.5">
            <Info size={12} /> <span>Updated 1 employee:</span>
          </div>
          <span className="pl-2">+ Oleksii Bortnytskyi.ts</span>
        </AnimatedSpan>

        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success!
        </TypingAnimation>
      </Terminal>
      <div className="col-span-2 h-max border border-input rounded p-4S">
        <div className="flex items-end gap-4">
          <Image
            src="/oleksii-bortnytskyi.jpg"
            width={128}
            height={128}
            priority
            alt="oleksii-bortnytskyi--image"
            className="rounded-md"
          />
          <div className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-1">
              <h6 className="text-2xl font-medium text-pretty font-sans">
                Oleksii Bortnytksyi
              </h6>
              <span className="text-xs font-sans text-pretty text-gray-600">
                {`@Fullstack developer`}
              </span>
            </div>
            <Button className="font-sans">{`<Contact me/>`}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MInfo;
