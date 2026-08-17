# Agenttisen ohjelmoinnin työkalut: harjoitukset

Kahdeksan itsenäistä harjoitusta, joilla opit käyttämään agenttisen ohjelmoinnin
työkaluja käytännössä: toimintatilat, toolit, custom instructions, skillit, agentit,
promptit, hookit ja token-optimoinnin.

**Alusta:** GitHub Copilot VS Codessa tai Copilot CLI:ssä. Konfiguraatiotiedostot
(`.agent.md`, `.instructions.md`, hookit, skillit, promptit) toimivat molemmissa.
Poikkeukset: `.vscode/mcp.json` → käytä `.mcp.json`-tiedostoa projektin juuressa;
VS Coden UI-elementit (Configure Tools, handoff-painikkeet) korvataan CLI-komennoilla
— katso harjoitusten CLI-ohjeet.

**Kenelle:** ohjelmistokehittäjille, myös jos agenttiset työkalut ovat uusia.
Jokaisessa harjoituksessa on tavoite ja selkeät vaiheet.

## Vaatimukset

- VS Code + GitHub Copilot -laajennus (tilaus vaaditaan)
- Node.js 18 tai uudempi (`node --version`)
- Chrome (harjoitus 02, Playwright MCP) — Firefox ja WebKit toimivat myös
- Git

## Aloitus

1. Avaa `demo-projekti` VS Codessa. VS Code-konffit (agentit, hookit, promptit)
   ovat valmiina — Node.js, Chrome ja Playwright-MCP täytyy asentaa erikseen (ks. harjoitus 02).
2. Aja `demo-projekti/reset.sh` (Windows: `reset.ps1`). Alkutilassa 3 testiä on punaisella.
3. Tee harjoitukset järjestyksessä 01–08. Aja reset ennen jokaista harjoitusta
   ja jokaisen agent-ajon jälkeen.

## Harjoitukset

| Kansio | Teema |
| --- | --- |
| [01-toimintatilat](01-toimintatilat/) | Ask-, plan- ja agent-toimintatilat (Modes) |
| [02-toolit](02-toolit/) | Toolit: sisäänrakennetut, picker, #-viittaukset, MCP (Tools) |
| [03-custom-instructions](03-custom-instructions/) | Custom instructions |
| [04-skillit](04-skillit/) | Skillit (Agent Skills) |
| [05-custom-agentit](05-custom-agentit/) | Custom-agentit ja subagentit (Custom Agents & Subagents) |
| [06-custom-promptit](06-custom-promptit/) | Custom-promptit (Custom Prompts) |
| [07-hookit](07-hookit/) | Hookit (Hooks) |
| [08-token-optimisaatio](08-token-optimisaatio/) | Token-optimointistrategiat (Token Optimization) |

## Demo-projekti

Pieni Node.js-varasto, jossa on tarkoituksella tekemättömiä osia ja yksi bugi.
Harjoitukset nojaavat sen alkutilaan (3 punaista testiä). Lisätiedot:
[demo-projekti/README.md](demo-projekti/README.md).
