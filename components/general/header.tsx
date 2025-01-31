import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="container sticky top-2 z-20 mx-auto bg-white bg-opacity-40 backdrop-blur-xl bg-blend-multiply border border-input w-full h-14 p-3.5 rounded-md flex justify-between items-center">
      <span className="text-sm font-medium font-sans">Bortnytskyi.</span>
      <Button size="sm" variant="default" className="font-semibold">
        {`<Contact me/>`}
      </Button>
    </header>
  );
};
