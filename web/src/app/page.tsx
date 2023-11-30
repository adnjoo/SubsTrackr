import Head from "next/head";

import { getServerAuthSession } from "~/server/auth";
import { CrudShowcase } from "./_components/CrudShowcase";
import { LandingPageHero } from "./_components/organisms/LandingPageHero";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* SEO */}
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@adnjoo" />
        <meta name="twitter:title" content="Subs Trackr" />
        <meta name="twitter:description" content="Track your subscriptions." />
        <meta name="twitter:image" content="/screenshot.png" />
      </Head>

      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        {!session ? <LandingPageHero /> : <CrudShowcase />}
      </div>
    </main>
  );
}
