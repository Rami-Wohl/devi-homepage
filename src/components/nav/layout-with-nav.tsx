"use client";

import { type ReactNode } from "react";
import { type Locale } from "~/i18n/routing";
import NavComponents from "./nav-container";
import { NavProvider } from "~/context/nav-context";
import { SessionProvider } from "next-auth/react";

export const LayoutWithNav = ({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) => {
  return (
    <>
      <NavProvider>
        <SessionProvider>
          {" "}
          <NavComponents locale={locale} />
          <div className="flex min-h-screen flex-col items-center justify-center bg-primary bg-opacity-70 text-fontPrimary">
            {children}
          </div>
        </SessionProvider>
      </NavProvider>
    </>
  );
};
