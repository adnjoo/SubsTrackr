import type { Metadata } from "next";
import { getServerAuthSession } from "~/server/auth";
import { CrudShowcase } from "./_components/CrudShowcase";
import { LandingPageHero } from "./_components/organisms/LandingPageHero";

export const metadata: Metadata = {
  twitter: {
    card: "summary",
    site: "@adnjoo",
    title: "Subs Trackr",
    description: "Track your subscriptions.",
    images: "https://www.substrackr.com/screenshot.png",
  },
}

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">

      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        {!session ? <LandingPageHero /> : <CrudShowcase />}
      </div>
    </main>
  );
}
