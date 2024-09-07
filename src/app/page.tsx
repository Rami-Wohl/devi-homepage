import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import image from "public/assets/images/devi-hoofd.jpeg";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex flex-col items-center gap-2">
            <Image src={image} alt="..." width={300} height={undefined} />

            <div className="flex flex-col items-center justify-center gap-4">
              <p className="font-mono text-sm uppercase text-white">
                {"////under construction////"}
              </p>
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
