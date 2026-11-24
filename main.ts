import { writeFileSync, mkdirSync } from "node:fs";

const LINE = "I threw my back out lifting nothing and now I can't get off the floor, so I'm calling in sick from down here.";

// Gate guard: one line, 1-200 chars, non-blank (the sealed gate's own rules).
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry violates the 1-200 char single-line gate");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
