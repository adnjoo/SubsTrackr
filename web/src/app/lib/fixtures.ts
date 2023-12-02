import type { Subscription } from "@prisma/client";

export const exampleSub: Subscription = {
  id: 1,
  name: "spotify",
  notes: "Started on November 1, 2023",
  amount: 12,
  createdAt: new Date(),
  updatedAt: new Date(),
  createdById: "1",
};
