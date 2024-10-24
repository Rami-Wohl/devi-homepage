import { useTranslations } from "next-intl";
import { ContentSection } from "~/components/styling/content-section";
import image from "public/assets/images/devi-hoofd.jpeg";
import { Separator } from "~/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <ContentSection title={t("title")}>
        <>
          <Separator className="my-6" />
          <p className="mt-4 pl-2">{t("intro")}</p>
          <h2 className="mt-8 pl-2 text-lg font-semibold">{t("header1")}</h2>
          <p className="mt-2 pl-2">{t("paragraph1")}</p>
          <p className="mt-4 pl-2">{t("paragraph2")}</p>
          <div className="my-4 rounded-md bg-secondary bg-opacity-50 p-3 shadow-2xl">
            <Image
              className="border-spacing-2 rounded-md border-x-[12px] border-y-[8px] border-primary"
              src={image.src}
              alt="..."
              width={300}
              height={300}
            />
          </div>
          <h2 className="mt-8 pl-2 text-lg font-semibold">{t("header2")}</h2>
          <p className="mt-2 pl-2">{t("paragraph3")}</p>
          <p className="mt-4 pl-2">{t("paragraph4")}</p>
          <h2 className="mt-8 pl-2 text-lg font-semibold">{t("header3")}</h2>
          <p className="mt-2 pl-2">{t("paragraph5")}</p>
          <p className="mt-4 pl-2">{t("paragraph6")}</p>
          <p className="mt-4 pl-2">{t("paragraph7")}</p>
          <p className="mb-8 mt-4 pl-2">{t("paragraph8")}</p>
        </>
      </ContentSection>
    </div>
  );
}
