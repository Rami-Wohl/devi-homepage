import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import NavComponents from "~/components/nav/nav-container";
import { getServerAuthSession } from "~/server/auth";

export const metadata: Metadata = {
  title: "Devi Hisgen",
  description: "Devi Hisgen audio engineering homepage",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <NavComponents loggedIn={!!session} />
          <main className="bg-primary text-fontPrimary flex min-h-screen flex-col items-center justify-center bg-opacity-95">
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
