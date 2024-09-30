import { useTranslations } from "next-intl";
import { ContentSection } from "../portfolio/page";
import { Separator } from "~/components/ui/separator";
import { StudioCarousel } from "~/components/sections/studio/carousel";

const SectionTitle = ({ title }: { title: string }) => {
  return <h1 className="mb-8 w-full text-center text-2xl">{title}</h1>;
};

const ListTitle = ({ title }: { title: string }) => {
  return <h2 className="mb-4 text-lg font-bold">{title}</h2>;
};

const List = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return <ul className="mb-8 flex flex-col gap-1 pl-2">{children}</ul>;
};

const ListItem = ({ content }: { content: string }) => {
  return <li className="list-inside list-disc">{content}</li>;
};

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
                  <ListItem content={"Lewit LCT 440"} />
                </List>{" "}
                <ListTitle title={"Pure Preamps"} />{" "}
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
