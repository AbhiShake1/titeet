import { z } from "zod";

import { publicProcedure } from "~/server/api/trpc";
import { cars } from "@car/db";
import { createTRPCCrudRouter } from "../base/crud-router";

export const postRouter = createTRPCCrudRouter({
  table: cars,
  extend: {
    create: publicProcedure
      .input(z.object({ name: z.string() }))
      .mutation(({ ctx, input }) => {
        return ctx.db.insert(cars).values(input)
      }),
    hello: publicProcedure
      .input(z.object({ text: z.string() }))
      .query(({ input }) => {
        return {
          greeting: `Hello ${input.text}`,
        };
      }),
    getLatest: publicProcedure
      .query(({ ctx }) => {
        return ctx.db.query.cars.findFirst({
          orderBy: (c, { desc }) => [desc(c.createdAt)]
        })
      }),
  },
});
