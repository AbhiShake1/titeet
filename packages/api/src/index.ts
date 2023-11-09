import { postRouter } from "./routers/post";
import { createTRPCRouter } from "./trpc";
import superjson from "superjson";

export const transformer = superjson

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
});

function getBaseUrl() {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function getUrl() {
  return getBaseUrl() + "/api/trpc";
}

// export type definition of API
export type AppRouter = typeof appRouter;
export { createTRPCContext } from "./trpc";
