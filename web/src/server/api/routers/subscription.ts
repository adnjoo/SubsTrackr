import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const subscriptionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(1),
        notes: z.string(),
        amount: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.subscription.create({
        data: {
          name: input.name,
          notes: input.notes,
          amount: input.amount,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  upsert: protectedProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string().min(1),
        notes: z.string(),
        amount: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.subscription.upsert({
        where: { id: input.id },
        create: {
          name: input.name,
          notes: input.notes,
          amount: input.amount,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
        update: {
          name: input.name,
          notes: input.notes,
          amount: input.amount,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.subscription.findMany({
      where: { createdBy: { id: ctx.session.user.id } },
      orderBy: { createdAt: "desc" },
    });
  }),

  delete: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      return ctx.db.subscription.delete({
        where: { id: Number(input) },
      });
    }),

  getTotalAmount: protectedProcedure.query(({ ctx }) => {
    return ctx.db.subscription.aggregate({
      _sum: { amount: true },
      where: { createdBy: { id: ctx.session.user.id } },
    });
  }),
});
