import { useTranslations } from "next-intl";
import { Separator } from "~/components/ui/separator";
import { StudioCarousel } from "~/components/sections/studio/carousel";
import { ContentSection } from "~/components/styling/content-section";
import {
  List,
  ListItem,
  ListTitle,
  SectionTitle,
} from "~/components/ui/list-components";

export default function StudioPage() {
  const t = useTranslations("studio");

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <ContentSection title={t("title")}>
        <div className="w-full">
          <Separator className="my-6" />
          <div className="flex flex-col gap-1">
            <SectionTitle title={t("equipment")} />
            <div className="flex flex-col gap-1 px-2 lg:grid lg:grid-cols-2 lg:gap-4">
              <div>
                <ListTitle title={"Microphones"} />{" "}
                <List>
                  <ListItem content={"Neumann TLM103"} />
                  <ListItem content={"Lauten LA320 V2 (tube condensor)"} />
                  <ListItem content={"Lewit LCT 440 Pure"} />
                </List>{" "}
                <ListTitle title={"Preamps"} />{" "}
                <List>
                  <ListItem content={"Neve 1073 LB (500 API)"} />
                  <ListItem content={"Midas 502V2"} />
                </List>{" "}
                <ListTitle title={"EQ"} />{" "}
                <List>
                  <ListItem content={"SSL E-EQ"} />
                  <ListItem content={"Määg Q4"} />
                </List>{" "}
                <ListTitle title={"Compressor"} />{" "}
                <List>
                  <ListItem content={"Black Lion Seventeen"} />
                </List>{" "}
              </div>
              <div>
                <ListTitle title={"Effects"} />{" "}
                <List>
                  <ListItem content={"SPL DeS"} />
                  <ListItem content={"SPL TDx"} />
                  <ListItem content={"Rupert Neve Designs Tape emulator"} />
                  <ListItem content={"Meris Mercury 7"} />
                </List>{" "}
                <ListTitle title={"Mastering"} />
                <List>
                  <ListItem content={"Tegeler Audio Vari Tube Compressor"} />
                  <ListItem content={"IGS 825EQ"} />
                  <ListItem content={"SPL Vitalizer"} />
                  <ListItem content={"SSL Fusion Playback: Eve audio"} />
                  <ListItem content={"SC307"} />
                </List>{" "}
                <ListTitle title={"Playback"} />{" "}
                <List>
                  <ListItem content={"Eve audio – SC307"} />
                </List>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="mb-6 flex flex-col items-center justify-center gap-1">
            <SectionTitle title={t("gallery")} />
            <StudioCarousel />
          </div>
        </div>
      </ContentSection>
    </div>
  );
}
