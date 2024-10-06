import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <div className="m-3 mb-5">
        <h1 className="text-4xl font-semibold mb-1">
          <a href="/">Zotion.</a>
        </h1>
        <h3 className="mb-6">Where Ideas, Places, Stuff meets at one place.</h3>
        <button className="flex gap-4 bg-slate-950 p-3 text-neutral-50 rounded items-center transition-colors hover:bg-violet-700">
          Enter Zotion
          <ArrowRight className="size-[23px]"></ArrowRight>
        </button>
      </div>
    </div>
  );
};
