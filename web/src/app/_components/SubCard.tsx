"use client";
import React from "react";
import { useRouter } from "next/navigation";
import type { Subscription } from "@prisma/client";
import Image from "next/image";

import { reactApi } from "~/trpc/react";
import { ExpenseIcons, SubscriptionIcons } from "../lib/icons";

export type SubCardProps = {
  sub: Subscription;
};

export function SubCard({ sub }: SubCardProps) {
  const router = useRouter();
  const deleteSub = reactApi.subscription.delete.useMutation({});

  const handleDelete = async () => {
    deleteSub.mutate(String(sub.id));
    router.refresh();
  };
  
  // @ts-expect-error - argument of type 'string' is not assignable to parameter of type SubscriptionIcons
  const isSubscriptionIconAvailable = Object.values(SubscriptionIcons).includes(sub.name) 
  // @ts-expect-error - argument of type 'string' is not assignable to parameter of type ExpenseIcons
  const isExpenseIconAvailable = Object.values(ExpenseIcons).includes(sub.name);

  return (
    <div className="my-4 rounded-md border p-4 shadow-md">
      <div className="flex justify-between">
        <p className="mb-2 text-lg font-bold">Name: {sub.name}</p>
        {isSubscriptionIconAvailable || isExpenseIconAvailable ? (
          <Image
            alt={sub.name}
            src={`/icons/${sub.name}.png`}
            className={`${isExpenseIconAvailable ? 'bg-white rounded-lg' : ''} object-cover`}
            width={40}
            height={40}
          />
        ) : null}
      </div>
      <p className="mb-2">Amount: ${sub.amount}</p>
      <p className="mb-2">Notes: {sub.notes}</p>
      <button
        onClick={handleDelete}
        className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>
    </div>
  );
}

export default SubCard;
