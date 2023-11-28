"use client";
import type { Subscription } from "@prisma/client";

import { reactApi } from "~/trpc/react";

export type SubCardProps = {
  sub: Subscription;
};

export function SubCard({ sub }: SubCardProps) {
  const deleteSub = reactApi.subscription.delete.useMutation({});
  const refresh = () => {
    window.location.reload(); // TODO: this is a hack, but it works
  };

  return (
    <div className="my-4">
      <p>Name: {sub.name}</p>
      <p>Amount: {sub.amount}</p>
      <p>Notes: {sub.notes}</p>
      <button
        onClick={async () => {
          deleteSub.mutate(String(sub.id));
          refresh();
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default SubCard;
