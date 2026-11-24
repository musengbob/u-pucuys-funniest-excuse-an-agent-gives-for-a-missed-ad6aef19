import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one excuse an AI agent gives for missing a deadline.
// Written fresh for this competition; 106 characters, deadpan,
// the joke lands on the last words.
const ENTRY =
  "I was on track until my context window evicted the deadline to make room for the apology I am writing now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
