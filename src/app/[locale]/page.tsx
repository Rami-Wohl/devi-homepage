import Image from "next/image";
import image from "public/assets/images/logo-basic-1.png";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-md bg-secondary bg-opacity-50 p-3 shadow-2xl">
          <Image
            className="border-spacing-2 rounded-md border-x-[12px] border-y-[8px] border-primary opacity-70"
            src={image}
            alt="..."
            width={300}
            height={undefined}
          />
        </div>
      </div>
    </div>
  );
}
