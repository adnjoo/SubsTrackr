import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <div className="my-5 px-4 py-5 text-center">
          <h1 className="my-4 text-5xl font-bold">Subs Trackr</h1>
          <div className="mx-auto max-w-lg">
            <p className="my-8 text-lg">
              Free sub trackr to help you track your subscriptions and save
              money.
            </p>
            <div className="grid justify-center gap-4 sm:flex">
            </div>
            <Image
              src="/screenshot.png"
              className="my-8 w-full rounded-lg md:my-16"
              alt="screenshot"
              unoptimized
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
