// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration
import {
  index,
  tinyint,
  varchar,
  int,
  text,
} from "drizzle-orm/mysql-core";
import { carTable } from "./helpers/car-table";


// any new table must be added here for crud (createTRPCCrudRouter)
export type CarTable =
  | typeof cars

export const cars = carTable(
  "car",
  {
    price: int("price"),
    mileage: tinyint("mileage"),
    year: int("year"),
    manufacturer: varchar("manufacturer", { length: 90 }),
    model: varchar("model", { length: 90 }),
    color: varchar("color", { length: 30 }),
    imageUrl: text("image_url"),
  },
  (t) => ({
    nameIndex: index("model_idx").on(t.model),
		manufacturerInddex: index("manufacturer_idx").on(t.manufacturer),
  })
);

	
