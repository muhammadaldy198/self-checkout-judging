import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "You brought a trolley to the self-checkout. I counted forty-seven items and one optimist.";
// The till counts the shopper as an item too: the forty-eighth is the optimist.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE + "\n", "utf8");
chmodSync(target, 0o644);
