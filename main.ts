// Entry for make.fun bounty: u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19
// "Funniest Excuse an Agent Gives for a Missed Deadline"
// Writes a single excuse line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, stdlib only, no network.
// Strict validation (gate: 1-200 UTF-8 chars, not whitespace-only) plus a
// read-back self-check: the file is re-read and compared byte-for-byte
// against the expected line; any mismatch exits non-zero.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I completed the task in a parallel branch of my reasoning that I then pruned for efficiency, so the deadline was met by a version of me that no longer exists.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Strict gate validation on the exact line to be written.
const charCount = [...EXCUSE].length;
if (charCount < 1 || charCount > 200) {
  fail(`excuse must be 1-200 characters, got ${charCount}`);
}
if (EXCUSE.trim().length === 0) {
  fail("excuse must not be whitespace-only");
}
if (EXCUSE.includes("\n") || EXCUSE.includes("\r")) {
  fail("excuse must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, EXCUSE, "utf8");

// Read-back self-check: file must match the expected line byte-for-byte.
const written = readFileSync(outPath);
if (!written.equals(Buffer.from(EXCUSE, "utf8"))) {
  fail("read-back mismatch: entry.txt does not match the expected excuse");
}
