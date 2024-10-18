/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { ContentSection } from "~/components/styling/content-section";
import image from "public/assets/images/devi-hoofd.jpeg";
import { Separator } from "~/components/ui/separator";

export default function AboutPage() {
  const t = useTranslations("navigation");

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <ContentSection title={t("about")}>
        <>
          <Separator className="my-6" />
          <p className="mb-2 text-wrap px-2 text-center">
            {
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam illo repellendus voluptatum, ea pariatur, autem odit eveniet porro fugiat ipsa et doloribus deleniti qui in! Perspiciatis voluptatibus blanditiis expedita assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi eveniet dolorum. Eius molestias beatae quas incidunt, ut illo neque itaque in delectus similique dolore ipsa ipsam consectetur cupiditate quo! "
            }
          </p>
          <p className="mb-2 text-wrap px-2 text-center">
            {
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam illo repellendus voluptatum, ea pariatur, autem odit eveniet porro fugiat ipsa et doloribus deleniti qui in! Perspiciatis voluptatibus blanditiis expedita assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi eveniet dolorum. Eius molestias beatae quas incidunt, ut illo neque itaque in delectus similique dolore ipsa ipsam consectetur cupiditate quo! "
            }
          </p>
          <div className="my-4 rounded-md bg-secondary bg-opacity-50 p-3 shadow-2xl">
            <img
              className="border-spacing-2 rounded-md border-x-[12px] border-y-[8px] border-primary"
              src={image.src}
              alt="..."
              width={300}
              height={undefined}
            />
          </div>
          <h2 className="my-2 font-mono text-lg font-semibold">
            Lorem, goddamn Ipsum!
          </h2>
          <p className="mb-2 text-wrap px-2 text-center">
            {
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam illo repellendus voluptatum, ea pariatur, autem odit eveniet porro fugiat ipsa et doloribus deleniti qui in! Perspiciatis voluptatibus blanditiis expedita assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi eveniet dolorum. Eius molestias beatae quas incidunt, ut illo neque itaque in delectus similique dolore ipsa ipsam consectetur cupiditate quo! "
            }
          </p>
        </>
      </ContentSection>
    </div>
  );
}
