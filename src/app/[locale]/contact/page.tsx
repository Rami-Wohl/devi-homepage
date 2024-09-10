import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { ContactForm } from "~/components/form/contact-form";
import { HydrateClient } from "~/trpc/server";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <HydrateClient>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-4/5 flex-col gap-4 rounded-md bg-secondary bg-opacity-80 p-8 text-fontPrimary sm:shadow-xl md:w-2/3 lg:w-1/3">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <Suspense>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </HydrateClient>
  );
}
