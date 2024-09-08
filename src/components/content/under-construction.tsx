import { useTranslations } from "next-intl";

export function UnderConstruction() {
  const t = useTranslations("general");

  return (
    <div className="text-fontPrimary font-mono text-sm uppercase">
      {t("under-construction")}
    </div>
  );
}
