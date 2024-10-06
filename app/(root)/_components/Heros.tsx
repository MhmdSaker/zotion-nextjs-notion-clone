import Image from "next/image";

export const Heros = () => {
  return (
    <div className="flex justify-center gap-5">
      <div className="relative h-[300px] w-[300px] sm:[350px] sm:h-[350px] md:h-[400px] md:w-[400px] hidden md:block">
        <Image
          src="/Chill-Time.svg"
          fill
          className="object-contain"
          alt="chill"
        ></Image>
      </div>
      <div className="relative h-[300px] w-[300px] sm:[350px] sm:h-[350px] md:h-[400px] md:w-[400px] ">
        <Image
          src="/Painting.svg"
          fill
          className="object-contain"
          alt="Painting"
        ></Image>
      </div>
    </div>
  );
};
