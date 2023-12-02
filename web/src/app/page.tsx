import Image from "next/image";

import { Demo } from "./_components/organisms/Demo";
import { exampleSub } from "./lib/fixtures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col gap-12 px-4 py-8 ">
        {/* Hero */}
        <div className="my-5 px-4 py-5 text-center">
          <h1 className="my-4 text-3xl font-bold lg:text-5xl">Subs Trackr</h1>
          <div className="mx-auto max-w-lg">
            <p className="my-4 text-lg">
              Free sub trackr to help you track your subscriptions and save
              money.
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
        <div className="mx-auto flex justify-center flex-col">
          <span className='text-xl md:text-2xl'>Try editing this 😊</span>
          <Demo demoSub={exampleSub} />
        </div>
      </div>
    </main>
  );
}
