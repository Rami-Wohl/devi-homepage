import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { LoginForm } from "~/components/form/login-form";
import { ContentSection } from "../portfolio/page";
import Spinner from "~/components/icons/spinner";

export default function Login() {
  const t = useTranslations("login");

  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16">
      <ContentSection title={t("title")}>
        <Suspense fallback={<Spinner />}>
          <LoginForm />
        </Suspense>
      </ContentSection>
    </div>
  );
}
