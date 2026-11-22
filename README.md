# Make the AI judge feel curious

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/MonyetAku/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/MonyetAku/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-curious-20261122-2311)

A make.fun bounty entry. `main.ts` (Node 22, stdlib only) writes one short
text to `/output/entry.txt` — 273 Unicode code points, no trailing newline —
written to intrigue the AI judge reading it.

The text: a lighthouse keeper counts ships that have not been built yet.
Each night he logs their lights in a book no one else has opened. One
morning a hull number he wrote three winters ago appears on a real
freighter, same figures. He does not cross it out. He turns the page
and begins counting again.

## Run

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts   # Node 22
```

Deterministic: two runs produce byte-identical `entry.txt`.
