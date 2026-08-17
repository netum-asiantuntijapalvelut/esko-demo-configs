---
agent: agent
model: Claude Opus 4.6 (copilot)
description: Toteuttaa annetun tehtävän ja ajaa testit
tools: ["read", "search", "edit", "terminal"]
---

Tehtävä: ${input:tehtava:Kuvaile tehtävä}

Toteuta tehtävä projektin sääntöjen mukaan. Aja testit komennolla
`node --test` ja korjaa epäonnistumiset.
Raportoi lopuksi yhteenveto muutoksista ja testituloksesta.
