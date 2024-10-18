import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { ContactForm } from "~/components/form/contact-form";
import { Separator } from "~/components/ui/separator";
import { HydrateClient } from "~/trpc/server";
import Spinner from "~/components/icons/spinner";
import { ContentSection } from "~/components/styling/content-section";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <HydrateClient>
      <div className="container flex flex-col items-center justify-center px-4 py-16">
        <ContentSection title={t("title")}>
          <>
            <Separator className="my-6" />
            <Suspense fallback={<Spinner />}>
              <ContactForm />
            </Suspense>
          </>
        </ContentSection>
      </div>
    </HydrateClient>
  );
}
