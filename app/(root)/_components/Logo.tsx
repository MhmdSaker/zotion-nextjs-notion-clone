import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex gap-3">
      <Image src="/logo.png" width={20} className="object-contain dark:hidden" height={20} alt="logo"></Image>
      <Image src="/logo-dark.png" width={20} className="object-contain hidden dark:block" height={20} alt="logo"></Image>
      <h1 className="font-bold">Zotion.</h1>
    </div>
  );
};
