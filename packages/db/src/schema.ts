// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import {
  index, varchar,
} from "drizzle-orm/mysql-core";
import { carTable } from "./helpers/car-table";


// any new table must be added here for crud (createTRPCCrudRouter)
export type CarTable =
  | typeof cars

export const cars = carTable(
  "post",
  {
    name: varchar("name", { length: 256 }),
  },
  (t) => ({
    nameIndex: index("name_idx").on(t.name),
  })
);

