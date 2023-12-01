import "~/styles/globals.css";

import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cookies } from "next/headers";

// import { getServerAuthSession } from "~/server/auth";
// import { SessionProvider } from "~/app/lib/SessionProvider";
import { TRPCReactProvider } from "~/trpc/react";
import { Footer, MyNavbar } from "./_components/";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Subs Trackr",
  description: "Track your subscriptions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Subs Trackr",
    description: "Track your subscriptions.",
    type: "website",
    url: "https://www.substrackr.com",
    images: [
      {
        url: "https://www.substrackr.com/screenshot.png",
        width: 1200,
        height: 630,
        alt: "Subs Trackr",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@adnjoo",
    title: "Subs Trackr",
    description: "Track your subscriptions.",
    images: "https://www.substrackr.com/screenshot.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerAuthSession();
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} bg-slate-700`}>
        {/* <SessionProvider session={session}> */}
          <TRPCReactProvider cookies={cookies().toString()}>
            <MyNavbar />
            {children}
            <Footer />
          </TRPCReactProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
