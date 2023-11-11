import { type Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  driver: "mysql2",
	verbose: false,
	strict: false,
  dbCredentials: {
    connectionString: process.env.DATABASE_URL ?? "",
  },
  tablesFilter: ["car_*"],
} satisfies Config;
