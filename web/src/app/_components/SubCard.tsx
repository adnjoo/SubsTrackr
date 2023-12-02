"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { Subscription } from "@prisma/client";
import { MdOutlineModeEditOutline as MdEdit, MdDelete } from "react-icons/md";

import { reactApi } from "~/trpc/react";
import { ExpenseIcons, SubscriptionIcons } from "../lib/icons";

export type SubCardProps = {
  sub: Subscription;
};

export function SubCard({ sub }: SubCardProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const router = useRouter();
  const deleteSub = reactApi.subscription.delete.useMutation({});

  const handleDelete = async () => {
    // check before delete
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      deleteSub.mutate(String(sub.id));
      router.refresh();
    }
  };

  const isSubscriptionIconAvailable = Object.values(SubscriptionIcons).includes(
    sub.name,
  );
  // @ts-expect-error - argument of type 'string' is not assignable to parameter of type ExpenseIcons
  const isExpenseIconAvailable = Object.values(ExpenseIcons).includes(sub.name);

  return (
    <div className="my-4 rounded-md border p-4 shadow-md">
      {isSubscriptionIconAvailable || isExpenseIconAvailable ? (
        <Image
          alt={sub.name}
          src={`/icons/${sub.name}.png`}
          className="ml-auto h-10 w-10 rounded-3xl bg-white object-contain"
          width={40}
          height={40}
          unoptimized
        />
      ) : <div className='h-10 w-10 ml-auto' />}

      {/* Content */}
      <p className="mb-2 text-lg font-bold">Name: {sub.name}</p>
      <p className="mb-2">Amount: ${sub.amount}</p>
      <p className="mb-2">Notes: {sub.notes}</p>

      <div>
        {/* Edit button */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="mr-2 rounded-md bg-blue-500 px-2 py-1 text-white transition hover:bg-blue-600 focus:outline-none"
        >
          <MdEdit />
        </button>
        <button
          onClick={handleDelete}
          className="rounded-md bg-red-500 px-2 py-1 text-white transition hover:bg-red-600 focus:outline-none"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default SubCard;
