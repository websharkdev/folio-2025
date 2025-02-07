import { Magnetic } from "../custom/magnetic";
import { Button } from "../ui/button";

export const Header = () => {
  const springOptions = { bounce: 0.1 };

  return (
    <header className="container sticky top-2 z-20 mx-auto bg-white bg-opacity-40 backdrop-blur-xl bg-blend-multiply border border-input w-[calc(100%_-_32px)] h-14 p-3.5 rounded-md flex justify-between items-center">
      <span className="text-sm font-medium font-mono">Bortnytskyi.</span>

      <Magnetic
        intensity={0.2}
        springOptions={springOptions}
        actionArea="global"
        range={200}
      >
        <Button
          href="https://www.linkedin.com/in/bortnytskyi-oleksii/"
          size="sm"
          variant="default"
          className="font-semibold font-mono"
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
    </header>
  );
};
