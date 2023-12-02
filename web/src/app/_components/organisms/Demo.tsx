"use client";
import React from "react";
import Image from "next/image";
import type { Subscription } from "@prisma/client";
import {
  MdOutlineModeEditOutline as MdEdit,
  MdDelete,
  MdSave,
} from "react-icons/md";

import { ExpenseIcons, SubscriptionIcons } from "../../lib/icons";

export interface DemoProps {
  demoSub: Subscription;
}

export function Demo({ demoSub }: DemoProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [demo, setDemo] = React.useState<Subscription>(demoSub);

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const isSubscriptionIconAvailable = Object.values(SubscriptionIcons).includes(
    demo.name,
  );

  const isExpenseIconAvailable = Object.values(ExpenseIcons).includes(
    // @ts-expect-error - argument of type 'string' is not assignable to parameter of type ExpenseIcons
    demo.name,
  );

  return (
    <div className="my-4 max-w-[300px] rounded-md border p-4 shadow-md">
      {isSubscriptionIconAvailable || isExpenseIconAvailable ? (
        <Image
          alt={demo.name}
          src={`/icons/${demo.name}.png`}
          className="mb-2 ml-auto h-10 w-10 rounded-3xl bg-white object-contain"
          width={40}
          height={40}
          unoptimized
        />
      ) : (
        <div className="ml-auto h-10 w-10" />
      )}

      {/* Content */}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={demo.name}
            onChange={(e) => setDemo({ ...demo, name: e.target.value })}
            className="mb-2 w-full rounded-md border border-gray-300 bg-gray-800 p-1 text-white"
          />
          <input
            type="number"
            value={demo.amount}
            onChange={(e) =>
              setDemo({ ...demo, amount: Number(e.target.value) })
            }
            className="mb-2 w-full rounded-md border border-gray-300 bg-gray-800 p-1 text-white"
          />
          <input
            type="text"
            value={demo.notes!}
            onChange={(e) => setDemo({ ...demo, notes: e.target.value })}
            className="mb-2 w-full rounded-md border border-gray-300 bg-gray-800 p-1 text-white"
          />
        </div>
      ) : (
        <div>
          <p className="mb-2 text-lg font-bold">Name: {demo.name}</p>
          <p className="mb-2">Amount: ${demo.amount}</p>
          <p className="mb-2">Notes: {demo.notes}</p>
        </div>
      )}

      {/* Actions */}
      <div>
        <button
          onClick={handleEdit}
          className="mr-2 rounded-md bg-blue-500 px-2 py-1 text-white transition hover:bg-blue-600 focus:outline-none"
        >
          {isEditing ? <MdSave /> : <MdEdit />}
        </button>
        <button className="rounded-md bg-red-500 px-2 py-1 text-white transition hover:bg-red-600 focus:outline-none">
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
