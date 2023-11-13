import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { CarTable, eq } from "@car/db";
import { ProcedureRouterRecord } from "@trpc/server";

type Props<T> = {
  isPublic?: boolean,
  table: CarTable,
  extend?: T,
};

export function createTRPCCrudRouter<TAccessor extends ProcedureRouterRecord>({
  isPublic = true,
  table,
  extend = {} as TAccessor,
}: Props<TAccessor>) {
  const procedure = isPublic ? publicProcedure : protectedProcedure;
  const insertInput = z.custom<typeof table.$inferInsert>();
  const findWithId = z.object({ id: z.string().min(1) });
  return createTRPCRouter({
    create: procedure
      .input(insertInput)
      .mutation(({ ctx, input }) => {
        return ctx.db.insert(table).values(input)
      }),
    findOne: procedure
      .input(findWithId)
      .query(async ({ ctx, input: { id } }) => {
        const cars = await ctx.db.select().from(table).where(eq(table.id, id)).limit(1);
        return cars[0];
      }),
    findAll: procedure
      .query(({ ctx }) => {
        return ctx.db.select().from(table);
      }),
    update: procedure
      .input(insertInput)
      .mutation(({ ctx, input }) => {
        return ctx.db.update(table).set(input);
      }),
    delete: procedure
      .input(findWithId)
      .mutation(({ ctx, input: { id } }) => {
        return ctx.db.delete(table).where(eq(table.id, id));
      }),
    ...extend,
  })
}

