declare module "trpc" {
  import { type NextRequest } from "next/server";
  import superjson from "superjson";
  export const transformer: typeof superjson;
  /**
   * 1. CONTEXT
   *
   * This section defines the "contexts" that are available in the backend API.
   *
   * These allow you to access things when processing a request, like the database, the session, etc.
   */
  interface CreateContextOptions {
    headers: Headers;
  }
  /**
   * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
   * it from here.
   *
   * Examples of things you may need it for:
   * - testing, so we don't have to mock Next.js' req/res
   * - tRPC's `createSSGHelpers`, where we don't have req/res
   *
   * @see https://create.t3.gg/en/usage/trpc#-serverapitrpcts
   */
  export const createInnerTRPCContext: (opts: CreateContextOptions) => {
    headers: Headers;
    db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
  };
  /**
   * This is the actual context you will use in your router. It will be used to process every request
   * that goes through your tRPC endpoint.
   *
   * @see https://trpc.io/docs/context
   */
  export const createTRPCContext: (opts: {
    req: NextRequest;
  }) => {
    headers: Headers;
    db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
  };
  /**
   * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
   *
   * These are the pieces you use to build your tRPC API. You should import these a lot in the
   * "/src/server/api/routers" directory.
   */
  /**
   * This is how you create new routers and sub-routers in your tRPC API.
   *
   * @see https://trpc.io/docs/router
   */
  export const createTRPCRouter: <TProcRouterRecord extends import("@trpc/server").ProcedureRouterRecord>(procedures: TProcRouterRecord) => import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
      headers: Headers;
      db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
    };
    meta: object;
    errorShape: {
      data: {
        zodError: import("zod").typeToFlattenedError<any, string> | null;
        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
        httpStatus: number;
        path?: string | undefined;
        stack?: string | undefined;
      };
      message: string;
      code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: typeof superjson;
  }>, TProcRouterRecord>;
  /**
   * Public (unauthenticated) procedure
   *
   * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
   * guarantee that a user querying is authorized, but you can still access user session data if they
   * are logged in.
   */
  export const publicProcedure: import("@trpc/server").ProcedureBuilder<{
    _config: import("@trpc/server").RootConfig<{
      ctx: {
        headers: Headers;
        db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
      };
      meta: object;
      errorShape: {
        data: {
          zodError: import("zod").typeToFlattenedError<any, string> | null;
          code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
          httpStatus: number;
          path?: string | undefined;
          stack?: string | undefined;
        };
        message: string;
        code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
      };
      transformer: typeof superjson;
    }>;
    _ctx_out: {
      headers: Headers;
      db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
    };
    _input_in: typeof import("@trpc/server").unsetMarker;
    _input_out: typeof import("@trpc/server").unsetMarker;
    _output_in: typeof import("@trpc/server").unsetMarker;
    _output_out: typeof import("@trpc/server").unsetMarker;
    _meta: object;
  }>;
}
declare module "routers/post" {
  import { z } from "zod";
  export const postRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
      headers: Headers;
      db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
    };
    meta: object;
    errorShape: {
      data: {
        zodError: z.typeToFlattenedError<any, string> | null;
        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
        httpStatus: number;
        path?: string | undefined;
        stack?: string | undefined;
      };
      message: string;
      code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: typeof import("superjson").default;
  }>, {
    hello: import("@trpc/server").BuildProcedure<"query", {
      _config: import("@trpc/server").RootConfig<{
        ctx: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        meta: object;
        errorShape: {
          data: {
            zodError: z.typeToFlattenedError<any, string> | null;
            code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
            httpStatus: number;
            path?: string | undefined;
            stack?: string | undefined;
          };
          message: string;
          code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: typeof import("superjson").default;
      }>;
      _meta: object;
      _ctx_out: {
        headers: Headers;
        db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
      };
      _input_in: {
        text: string;
      };
      _input_out: {
        text: string;
      };
      _output_in: typeof import("@trpc/server").unsetMarker;
      _output_out: typeof import("@trpc/server").unsetMarker;
    }, {
      greeting: string;
    }>;
    create: import("@trpc/server").BuildProcedure<"mutation", {
      _config: import("@trpc/server").RootConfig<{
        ctx: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        meta: object;
        errorShape: {
          data: {
            zodError: z.typeToFlattenedError<any, string> | null;
            code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
            httpStatus: number;
            path?: string | undefined;
            stack?: string | undefined;
          };
          message: string;
          code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: typeof import("superjson").default;
      }>;
      _meta: object;
      _ctx_out: {
        headers: Headers;
        db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
      };
      _input_in: {
        name: string;
      };
      _input_out: {
        name: string;
      };
      _output_in: typeof import("@trpc/server").unsetMarker;
      _output_out: typeof import("@trpc/server").unsetMarker;
    }, void>;
    getLatest: import("@trpc/server").BuildProcedure<"query", {
      _config: import("@trpc/server").RootConfig<{
        ctx: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        meta: object;
        errorShape: {
          data: {
            zodError: z.typeToFlattenedError<any, string> | null;
            code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
            httpStatus: number;
            path?: string | undefined;
            stack?: string | undefined;
          };
          message: string;
          code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
        };
        transformer: typeof import("superjson").default;
      }>;
      _ctx_out: {
        headers: Headers;
        db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
      };
      _input_in: typeof import("@trpc/server").unsetMarker;
      _input_out: typeof import("@trpc/server").unsetMarker;
      _output_in: typeof import("@trpc/server").unsetMarker;
      _output_out: typeof import("@trpc/server").unsetMarker;
      _meta: object;
    }, {
      id: number;
      name: string | null;
      createdAt: Date;
      updatedAt: Date | null;
    } | undefined>;
  }>;
}
declare module "index" {
  /**
   * This is the primary router for your server.
   *
   * All routers added in /api/routers should be manually added here.
   */
  export const appRouter: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
    ctx: {
      headers: Headers;
      db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
    };
    meta: object;
    errorShape: {
      data: {
        zodError: import("zod").typeToFlattenedError<any, string> | null;
        code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
        httpStatus: number;
        path?: string | undefined;
        stack?: string | undefined;
      };
      message: string;
      code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: typeof import("superjson").default;
  }>, {
    post: import("@trpc/server").CreateRouterInner<import("@trpc/server").RootConfig<{
      ctx: {
        headers: Headers;
        db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
      };
      meta: object;
      errorShape: {
        data: {
          zodError: import("zod").typeToFlattenedError<any, string> | null;
          code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
          httpStatus: number;
          path?: string | undefined;
          stack?: string | undefined;
        };
        message: string;
        code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
      };
      transformer: typeof import("superjson").default;
    }>, {
      hello: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
          ctx: {
            headers: Headers;
            db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
          };
          meta: object;
          errorShape: {
            data: {
              zodError: import("zod").typeToFlattenedError<any, string> | null;
              code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
              httpStatus: number;
              path?: string | undefined;
              stack?: string | undefined;
            };
            message: string;
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
          };
          transformer: typeof import("superjson").default;
        }>;
        _meta: object;
        _ctx_out: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        _input_in: {
          text: string;
        };
        _input_out: {
          text: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, {
        greeting: string;
      }>;
      create: import("@trpc/server").BuildProcedure<"mutation", {
        _config: import("@trpc/server").RootConfig<{
          ctx: {
            headers: Headers;
            db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
          };
          meta: object;
          errorShape: {
            data: {
              zodError: import("zod").typeToFlattenedError<any, string> | null;
              code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
              httpStatus: number;
              path?: string | undefined;
              stack?: string | undefined;
            };
            message: string;
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
          };
          transformer: typeof import("superjson").default;
        }>;
        _meta: object;
        _ctx_out: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        _input_in: {
          name: string;
        };
        _input_out: {
          name: string;
        };
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
      }, void>;
      getLatest: import("@trpc/server").BuildProcedure<"query", {
        _config: import("@trpc/server").RootConfig<{
          ctx: {
            headers: Headers;
            db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
          };
          meta: object;
          errorShape: {
            data: {
              zodError: import("zod").typeToFlattenedError<any, string> | null;
              code: "PARSE_ERROR" | "BAD_REQUEST" | "INTERNAL_SERVER_ERROR" | "NOT_IMPLEMENTED" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "METHOD_NOT_SUPPORTED" | "TIMEOUT" | "CONFLICT" | "PRECONDITION_FAILED" | "PAYLOAD_TOO_LARGE" | "UNPROCESSABLE_CONTENT" | "TOO_MANY_REQUESTS" | "CLIENT_CLOSED_REQUEST";
              httpStatus: number;
              path?: string | undefined;
              stack?: string | undefined;
            };
            message: string;
            code: import("@trpc/server/dist/rpc").TRPC_ERROR_CODE_NUMBER;
          };
          transformer: typeof import("superjson").default;
        }>;
        _ctx_out: {
          headers: Headers;
          db: import("drizzle-orm/planetscale-serverless").PlanetScaleDatabase<typeof import("@car/db/src/schema") >;
        };
        _input_in: typeof import("@trpc/server").unsetMarker;
        _input_out: typeof import("@trpc/server").unsetMarker;
        _output_in: typeof import("@trpc/server").unsetMarker;
        _output_out: typeof import("@trpc/server").unsetMarker;
        _meta: object;
      }, {
        id: number;
        name: string | null;
        createdAt: Date;
        updatedAt: Date | null;
      } | undefined>;
    }>;
  }>;
  export type AppRouter = typeof appRouter;
  export { createTRPCContext, transformer } from "trpc";
  export { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
  export { fetchRequestHandler } from "@trpc/server/adapters/fetch";
  export { type NextRequest } from "next/server";
}
