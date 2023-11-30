"use client";
import Image from "next/image";
import Link from "next/link";

export const LandingPageHero = () => {
  return (
    <div className="my-5 px-4 py-5 text-center">
      <h1 className="my-4 text-5xl font-bold">Subs Trackr</h1>
      <div className="mx-auto max-w-lg">
        <p className="my-8 text-lg">
          Free sub trackr to help you track your subscriptions and save money.
        </p>
        <div className="grid justify-center gap-4 sm:flex">
          <Link
            href="/api/auth/signin"
            className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
          >
            Sign in
          </Link>
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
  );
};
