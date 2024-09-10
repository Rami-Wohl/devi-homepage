import { useTranslations } from "next-intl";
import Image from "next/image";
import image from "public/assets/images/devi-hoofd.jpeg";
import { UnderConstruction } from "~/components/content/under-construction";

export default function Home() {
  const t = useTranslations("navigation");

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="rounded-md bg-secondary bg-opacity-50 p-3 shadow-2xl">
          <Image
            className="border-spacing-2 rounded-md border-x-[12px] border-y-[8px] border-primary"
            src={image}
            alt="..."
            width={300}
            height={undefined}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>{t("home")}</h1>
          <UnderConstruction />
        </div>
      </div>
    </div>
  );
}
