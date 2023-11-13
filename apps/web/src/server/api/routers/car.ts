import { z } from "zod";

import { publicProcedure } from "~/server/api/trpc";
import { arrayContains, cars, eq, like } from "@car/db";
import { createTRPCCrudRouter } from "../base/crud-router";

export const PaginatedRequestParams = z.object({
  page: z.number().positive().default(0),
  search: z.string().default(""),
  limit: z.number().positive().default(12),
}).default({})

export const carRouter = createTRPCCrudRouter({
  table: cars,
  extend: {
    recommended: publicProcedure
      .input(PaginatedRequestParams)
      .query(({ ctx, input: { search, page = 0, limit = 15 } }) => {
        const searchStr = `%${search}%`;
        return ctx.db.query.cars.findMany({
          limit: limit,
          offset: page * limit,
          where: (car, { like, or }) => or(
            like(car.model, searchStr),
            like(car.manufacturer, searchStr)
          ),
        });
      }),
    topSelling: publicProcedure
      .input(PaginatedRequestParams)
      .query(({ ctx, input: { search, page = 0, limit = 15 } }) => {
        const searchStr = `%${search}%`;
        return ctx.db.query.cars.findMany({
          limit: limit,
          offset: page * limit,
          where: (car, { like, or }) => or(
            like(car.model, searchStr),
            like(car.manufacturer, searchStr)
          ),
        });
      }),
    popular: publicProcedure
      .input(PaginatedRequestParams)
      .query(({ ctx, input: { search, page = 0, limit = 15 } }) => {
        const searchStr = `%${search}%`;
        return ctx.db.query.cars.findMany({
          limit: limit,
          offset: page * limit,
          where: (car, { like, or }) => or(
            like(car.model, searchStr),
            like(car.manufacturer, searchStr)
          ),
        });
      }),
    latest: publicProcedure
      .input(PaginatedRequestParams)
      .query(({ ctx, input: { search, page = 0, limit = 15 } }) => {
        const searchStr = `%${search}%`;
        return ctx.db.query.cars.findMany({
          limit: limit,
          offset: page * limit,
          where: (car, { like, or }) => or(
            like(car.model, searchStr),
            like(car.manufacturer, searchStr)
          ),
        });
      }),
  },
});
