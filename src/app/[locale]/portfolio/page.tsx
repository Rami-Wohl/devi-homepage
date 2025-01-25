"use client";

import { useTranslations } from "next-intl";
import { PortfolioSectionElectronic } from "~/components/sections/portfolio/electronic";
import { PortfolioSectionMetal } from "~/components/sections/portfolio/metal";
import { ContentSection } from "~/components/styling/content-section";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { metalTracks, electronicTracks } from "~/data/tracks";

export default function PortfolioPage() {
  const t = useTranslations("portfolio");

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <ContentSection title={t("title")}>
        <>
          <Separator className="my-6" />
          <p className="mb-2 text-wrap px-2 text-center">{t("description")}</p>
          <p className="mt-2 text-wrap px-2 text-center text-sm">{t("pick")}</p>
          <Tabs defaultValue="metal" className="w-full">
            <TabsList className="flex flex-row items-center gap-2 bg-transparent">
              <TabsTrigger className="bg-secondary bg-opacity-20" value="metal">
                {t("metal")}
              </TabsTrigger>
              <TabsTrigger
                className="bg-secondary bg-opacity-20"
                value="electronic"
              >
                {t("electronic")}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="metal">
              <PortfolioSectionMetal tracks={metalTracks} />
            </TabsContent>
            <TabsContent value="electronic">
              <PortfolioSectionElectronic tracks={electronicTracks} />
            </TabsContent>
          </Tabs>
        </>
      </ContentSection>
    </div>
  );
}
