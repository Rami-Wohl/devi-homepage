import { useTranslations } from "next-intl";
import { Suspense } from "react";
import { LoginForm } from "~/components/form/login-form";

export default function Login() {
  const t = useTranslations("login");

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="bg-secondary text-fontPrimary flex w-80 flex-col gap-4 rounded-md bg-opacity-80 p-8 sm:shadow-xl">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
