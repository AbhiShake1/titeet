import { BuildColumns, sql } from "drizzle-orm";
import { MySqlColumnBuilderBase, mysqlTableCreator, MySqlTableExtraConfig, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
const mysqlTable = mysqlTableCreator((name) => `horn_${name}`);

const extraColumns = {
  id: varchar("id", { length: 191 })
    .primaryKey()
    // the anon function cannot be replaced by a tear-off
    // like $defaultFn(crypto.randomUUID) due to hoisting
    // it uses a function so it will expect `this` to be type crypto
    .$defaultFn(() => crypto.randomUUID())
    .notNull(),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt").onUpdateNow(),
}

type ExtraColumns = typeof extraColumns;

type ColumnRecord = Record<string, MySqlColumnBuilderBase>;

type BuildCarColumns<
  T extends string,
  E extends ColumnRecord,
> = BuildColumns<T, E, 'mysql'>;

export function carTable<
  TTableName extends string,
  TColumnsMap extends ColumnRecord,
>(
  tableName: TTableName,
  columns: TColumnsMap,
  extraConfig?: (
    self: BuildCarColumns<TTableName, TColumnsMap>
      & BuildCarColumns<TTableName, ExtraColumns>,
  ) => MySqlTableExtraConfig,
) {
  return mysqlTable(
    tableName,
    { ...extraColumns, ...columns },
    extraConfig && (c => extraConfig({ ...extraColumns, ...c })),
  );
}
