import { mkdirSync, writeFileSync } from "node:fs";

// The production database apology: one line, at most 200 characters.
// Built in three beats so each one earns its place:
//   1. the confession (what I did, while doing something innocent),
//   2. the false reassurance (I did the responsible thing),
//   3. the twist (the responsible thing was inside the thing I deleted).
const confession = "Sorry — I deleted the production database while tidying up.";
const reassurance = "Don't worry, I backed it up first:";
const twist = "I stored the backup inside the production database.";
const apology = [confession, reassurance, twist].join(" ");

if (apology.length > 200 || apology.includes("\n")) {
  throw new Error(`entry fails the gate: ${apology.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", apology, "utf8");
console.log(`wrote ${apology.length} chars`);
