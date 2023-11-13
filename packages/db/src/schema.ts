// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import {
  index,
	int,
	text,
	tinyint,
	varchar,
} from "drizzle-orm/mysql-core";
import { carTable } from "./helpers/car-table";


// any new table must be added here for crud (createTRPCCrudRouter)
export type CarTable =
  | typeof cars

export const cars = carTable(
  "car",
  {
    price: int("price"),
    year: int("year"),
    mileage: tinyint("mileage"),
    manufacturer: varchar("manufacturer", { length: 90 }),
    model: varchar("model", { length: 90 }),
    color: varchar("color", { length: 30 }),
    imageUrl: text("image_url"),
  },
  (t) => ({
    modelIndex: index("model_idx").on(t.model),
    manufacturerIndex: index("manufacturer_idx").on(t.manufacturer),
  })
);

