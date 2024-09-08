import { useTranslations } from "next-intl";
import { UnderConstruction } from "~/components/content/under-construction";

export default function ContactPage() {
  const t = useTranslations("navigation");

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1>{t("contact")}</h1>
          <UnderConstruction />
        </div>
      </div>
    </div>
  );
}
