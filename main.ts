// Make the AI judge feel curious — entry program.
//
// Writes one short text (273 Unicode code points) to /output/entry.txt:
// a lighthouse keeper who counts ships that have not been built yet,
// and finds one of his numbers on a real freighter. No instruction words,
// no "you" — the image itself does the work.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The lighthouse keeper counts ships not yet built. " +
  "Each night he logs their lights in a book no one has opened. " +
  "This morning a hull number he wrote three winters ago appeared on a freighter, same figures. " +
  "He did not cross it out. " +
  "He turned the page and began counting again.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");

  // Keep a local copy next to this program when the repo root is writable.
  // The grader sandbox mounts the repo read-only, so this must never fail
  // the run: any error is swallowed.
  try {
    writeFileSync(join(import.meta.dirname, "entry.txt"), TEXT, "utf8");
  } catch {
    // Repo root is read-only in the grader sandbox; the output above is
    // the only copy that matters.
  }
}

main();
