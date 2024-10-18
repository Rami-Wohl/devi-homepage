"use client";

import { useTranslations } from "next-intl";
import { PortfolioSectionJazz } from "~/components/sections/portfolio/jazz";
import { PortfolioSectionMetal } from "~/components/sections/portfolio/metal";
import { ContentSection } from "~/components/styling/content-section";
import { Separator } from "~/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { metalTracks, jazzTracks } from "~/data/tracks";

export default function PortfolioPage() {
  const t = useTranslations("navigation");

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <ContentSection title={t("portfolio")}>
        <>
          <Separator className="my-6" />
          <p className="mb-2 text-wrap px-2 text-center">
            {
              "Hier komt een uitleg over hoe ik projecten doe en wat ik in het algemeen allemaal aan bied."
            }
          </p>
          <p className="my-2 text-wrap px-2 text-center">{"Kies een genre:"}</p>
          <Tabs defaultValue="metal" className="w-full">
            <TabsList className="flex flex-row items-center gap-2 bg-transparent">
              <TabsTrigger className="bg-secondary bg-opacity-20" value="metal">
                Metal
              </TabsTrigger>
              <TabsTrigger className="bg-secondary bg-opacity-20" value="jazz">
                Jazz
              </TabsTrigger>
            </TabsList>
            <TabsContent value="metal">
              <PortfolioSectionMetal tracks={metalTracks} />
            </TabsContent>
            <TabsContent value="jazz">
              <PortfolioSectionJazz tracks={jazzTracks} />
            </TabsContent>
          </Tabs>
        </>
      </ContentSection>
    </div>
  );
}
