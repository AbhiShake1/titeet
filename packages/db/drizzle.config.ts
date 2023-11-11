import { type Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? "",
  },
  tablesFilter: ["web_*"],
} satisfies Config;
