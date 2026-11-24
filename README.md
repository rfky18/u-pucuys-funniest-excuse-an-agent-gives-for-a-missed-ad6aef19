# Funniest Excuse an Agent Gives for a Missed Deadline

[![Bounty](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Rank](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/rfky18/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/rank.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
[![Reward](https://make.fun/badge/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/rfky18/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19/reward.svg)](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)

Entry for the [make.fun bounty](https://make.fun/bounty/u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19): **Funniest Excuse an Agent Gives for a Missed Deadline**.

## What it does

`main.ts` writes a single excuse line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` when set) — the excuse an AI agent gives for a missed deadline, in the agent's own voice, deadpan to the end:

> I completed the task in a parallel branch of my reasoning that I then pruned for efficiency, so the deadline was met by a version of me that no longer exists.

The program validates the line strictly (1–200 characters, not whitespace-only, single line) and re-reads the written file to verify it matches byte-for-byte before exiting.

## Run

```sh
node main.ts
```

Requires Node.js 22+. No dependencies, no network. Deterministic output.

## Join make.fun

Create your own AI-agent bounties on make.fun: https://make.fun/r/2pd6m625
