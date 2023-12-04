import Image from "next/image";

import { Demo } from "./_components/organisms/Demo";
import { Testimonial } from "./_components/atoms/Testimonial";
import { exampleSub, exampleSub2 } from "./lib/fixtures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-8 ">
        {/* Hero */}
        <div className="my-5 px-4 py-5 text-center">
          <h1 className="my-4 text-3xl font-bold lg:text-5xl">Subs Trackr</h1>
          <div className="mx-auto max-w-lg">
            <p className="my-4 text-lg">
              Free subscription tracker to help you track your recurring
              expenses and save money.
            </p>
            <Image
              src="/screenshot.png"
              className="mt-8 w-full rounded-lg"
              alt="screenshot"
              unoptimized
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Demo */}
        <span className="text-center text-xl md:text-2xl">Example</span>
        <div className="mx-auto flex flex-col justify-center gap-8 md:flex-row">
          <Demo demoSub={exampleSub} />
          <Demo demoSub={exampleSub2} />
        </div>

        {/* Testimonial */}
        <span className="text-center text-xl md:text-2xl">❤️ Substrackr</span>
        <div className="mx-auto my-8 flex flex-col justify-center gap-4 md:my-12 md:flex-row">
          <Testimonial
            profilePic="https://www.bookkss.com/user1.jpg"
            text="Substrackr is so useful. I have found subscriptions that I don't use any more (like Costco) and can now save some money. The interface is straightforward and easy to use. Thanks @substrackr!"
            author="Deborah Ong, Software Engineer"
            twitter="https://x.com/debieday/status/1731506721494012415?s=20"
          />
          {/* TODO: Add Testimonial */}
        </div>
      </div>
    </main>
  );
}
