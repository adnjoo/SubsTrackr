import type { Subscription } from "@prisma/client";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" });
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center gap-12 px-4 py-16 ">
        <div className="text-5xl font-extrabold tracking-tight">Sub Trackr</div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // @ts-expect-error TODO: Property 'subscription' does not exist on type '"The property 'subscription' in your router collides with a built-in method, rename this router or procedure on your backend."'.ts(2339)
  const subscriptions = await api.subscription.getAll.query();

  return (
    <div className="w-full max-w-xs">
      {subscriptions ? (
        subscriptions.map((sub: Subscription) => (
          <div className="my-4">
            <p>Name: {sub.name}</p>
            <p>Amount: {sub.amount}</p>
            <p>Notes: {sub.notes}</p>
          </div>
        ))
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
