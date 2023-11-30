"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

export const SignInButton = () => {
  const { data: session } = useSession();
  if (!session) return <a href="/api/auth/signin">Sign in to continue</a>;
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* <p className="text-center text-2xl text-white">
        <span>Logged in as {session.user?.name}</span>
      </p> */}
      <Link
        href={session ? "/api/auth/signout" : "/api/auth/signin"}
        className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
      >
        {session ? "Sign out" : "Sign in"}
      </Link>
    </div>
  );
};
