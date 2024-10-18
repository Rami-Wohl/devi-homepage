import "~/styles/globals.css";
import "~/styles/customize-progress-bar.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { type Locale } from "~/i18n/routing";
import { LayoutWithNav } from "~/components/nav/layout-with-nav";

export const metadata: Metadata = {
  title: "Devi Hisgen",
  description: "Devi Hisgen audio engineering homepage",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-light.ico" },
      {
        rel: "icon",
        url: "/favicon-dark.ico",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{ children: React.ReactNode; params: { locale: Locale } }>) {
  // const session = await getServerAuthSession();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body
        className="h-screen bg-black bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../../../public/assets/images/knobs.jpeg')",
        }}
      >
        <TRPCReactProvider>
          <NextIntlClientProvider messages={messages}>
            <main>
              <LayoutWithNav locale={locale}>{children}</LayoutWithNav>
            </main>
          </NextIntlClientProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
