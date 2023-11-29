"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { reactApi } from "~/trpc/react";

export function CreatePost() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [amount, setAmount] = useState(0);

  const createPost = reactApi.subscription.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setNotes("");
      setAmount(0);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPost.mutate({ name, notes, amount });
        // createPost.mutate({ name,  });
      }}
      className="flex flex-col gap-2 max-w-xl justify-center mx-auto mt-4"
    >
      <input
        type="text"
        placeholder="Subscription Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
