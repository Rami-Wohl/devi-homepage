import "~/styles/globals.css";
import "~/styles/customize-progress-bar.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import NavComponents from "~/components/nav/nav-container";
import { getServerAuthSession } from "~/server/auth";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { type Locale } from "~/i18n/routing";

export const metadata: Metadata = {
  title: "Devi Hisgen",
  description: "Devi Hisgen audio engineering homepage",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: Locale } }>) {
  const session = await getServerAuthSession();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body id="app">
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages}>
            <NavComponents loggedIn={!!session} locale={locale} />
            <main className="flex min-h-screen flex-col items-center justify-center bg-primary bg-opacity-70 text-fontPrimary">
              {children}
            </main>
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
