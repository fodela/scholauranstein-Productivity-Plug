import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.DRIZZLE_DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "drizzle" });
  console.log("Migration ended.");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});
