import type { Subscription } from "@prisma/client";

import { getServerAuthSession } from "~/server/auth";
import { api } from "~/trpc/server";
import { CreatePost } from "~/app/_components/create-post";
import SubCard from "./SubCard";

export async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  // @ts-expect-error TODO: Property 'subscription' does not exist on type '"The property 'subscription' in your router collides with a built-in method, rename this router or procedure on your backend."'.ts(2339)
  const subscriptions = await api.subscription.getAll.query();
  // @ts-expect-error TODO: like above
  const totalAmount = await api.subscription.getTotalAmount.query();

  return (
    <div className="w-full max-w-xs">
      
      Total Amount: {totalAmount._sum.amount}


      {subscriptions ? (
        subscriptions.map((sub: Subscription) => (
          <SubCard key={sub.id} sub={sub} />
        ))
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
