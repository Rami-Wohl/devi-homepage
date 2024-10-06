"use client";

import Image from "next/image";
import image from "public/assets/images/logo-basic-1.png";
import { useNavContext } from "~/context/nav-context";

export default function Home() {
  const { setMobileMenuVisible, isMobileMenuVisible } = useNavContext();

  const handleClick = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="border-spacing-2 cursor-pointer rounded-md border-x-[12px] border-y-[8px] border-primary bg-secondary bg-opacity-50 p-3 shadow-2xl">
          <Image
            className={`opacity-70 transition-transform duration-500 ease-in-out hover:opacity-90 active:opacity-100 ${isMobileMenuVisible ? "rotate-180" : "rotate-0"}`}
            src={image}
            alt="..."
            width={300}
            height={undefined}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
