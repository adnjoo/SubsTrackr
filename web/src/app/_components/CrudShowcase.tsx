import type { Subscription } from "@prisma/client";
import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreatePost } from "~/app/_components/CreatePost";
import SubCard from "./SubCard";
import { _PAGES } from "../lib/pages";

export async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // @ts-expect-error TODO: Property 'subscription' does not exist on type '"The property 'subscription' in your router collides with a built-in method, rename this router or procedure on your backend."'.ts(2339)
  const subscriptions = await api.subscription.getAll.query();
  // @ts-expect-error TODO: like above
  const totalAmount = await api.subscription.getTotalAmount.query();

  return (
    <div className="w-full max-w-5xl">
      <div className="mb-12">
        <CreatePost />
      </div>

      <div className="my-4 flex justify-between text-xl">
        <span className="text-xl">
          Total Amount: ${totalAmount._sum.amount}
        </span>

        <span className="text-lg text-gray-100">
          {subscriptions.length} Subscriptions
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {subscriptions?.map((sub: Subscription) => (
          <SubCard key={sub.id} sub={sub} />
        ))}
      </div>

      <div className="mx-auto my-4 flex justify-center">
        <Link
          href={_PAGES.SIGN_OUT}
          className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20 mt-24"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
