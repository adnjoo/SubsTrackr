import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Head from "next/head";
import { cookies } from "next/headers";

import { getServerAuthSession } from "~/server/auth";
import { SessionProvider } from "~/app/lib/SessionProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { Footer, MyNavbar } from "./_components/";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Subs Trackr",
  description: "Track your subscriptions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-slate-700`}>
        <SessionProvider session={session}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <MyNavbar />
            {children}
            <Footer />
          </TRPCReactProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
