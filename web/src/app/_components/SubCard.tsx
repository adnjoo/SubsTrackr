"use client";
import React from "react";
import { useRouter } from "next/navigation";
import type { Subscription } from "@prisma/client";
import {
  MdOutlineModeEditOutline as MdEdit,
  MdDelete,
  MdSave,
} from "react-icons/md";

import { reactApi } from "~/trpc/react";
import { Icon } from "./atoms/Icon";
import { isIconAvailable } from "../lib/icons";

export type SubCardProps = {
  sub: Subscription;
};

export function SubCard({ sub }: SubCardProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [content, setContent] = React.useState<Subscription>(sub);
  const router = useRouter();
  const deleteSub = reactApi.subscription.delete.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });
  const upsertSub = reactApi.subscription.upsert.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleEdit = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
    if (content !== sub) {
      // @ts-expect-error - TODO: Type 'string | null' is not assignable to type 'string'.
      upsertSub.mutate({ ...content, id: sub.id });
    }
  };

  const handleDelete = async () => {
    // check before delete
    if (window.confirm("Are you sure you want to delete this subscription?")) {
      deleteSub.mutate(String(sub.id));
    }
  };

  return (
    <div className="my-4 rounded-md border p-4 shadow-md">
      {isIconAvailable(sub.name) ? (
        <Icon name={sub.name} />
      ) : (
        <div className="ml-auto h-10 w-10" />
      )}

      {/* Content */}
      {isEditing ? (
        <div>
          <input
            type="text"
            value={content.name}
            onChange={(e) => setContent({ ...content, name: e.target.value })}
            className="mb-2 w-full rounded-md border border-gray-300  bg-gray-800 text-white"
          />
          <input
            type="number"
            value={content.amount}
            onChange={(e) =>
              setContent({ ...content, amount: Number(e.target.value) })
            }
            className="mb-2 w-full rounded-md border border-gray-300  bg-gray-800 text-white"
          />
          <input
            type="text"
            value={content.notes!}
            onChange={(e) => setContent({ ...content, notes: e.target.value })}
            className="mb-2 w-full rounded-md border border-gray-300  bg-gray-800 text-white"
          />
        </div>
      ) : (
        <div>
          <p className="mb-2 text-lg font-bold">Name: {sub.name}</p>
          <p className="mb-2">Amount: ${sub.amount}</p>
          <p className="mb-2">Notes: {sub.notes}</p>
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
