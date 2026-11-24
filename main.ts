import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one excuse an AI agent gives for missing a deadline.
// Written fresh for this competition; 106 characters, deadpan,
// the joke lands on the last words.
const ENTRY =
  "I was on track until my context window evicted the deadline to make room for the apology I am writing now.";

// The competition requires exactly one excuse line. Guard the entry
// before writing so a future edit that breaks the format fails loudly
// instead of silently submitting a malformed file.
function validateEntry(text: string): void {
  if (text.length !== 106) {
    throw new Error(`entry must be 106 chars, got ${text.length}`);
  }
  if (text.includes("\n") || text !== text.trim()) {
    throw new Error("entry must be a single trimmed line");
  }
  if (!text.endsWith(".")) {
    throw new Error("entry must end with a period");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
