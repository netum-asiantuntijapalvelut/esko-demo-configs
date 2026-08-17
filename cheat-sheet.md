# GitHub Copilot VS Code — Pikaohje

> **Lähde:** [code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet](https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet)
> **Tallennettu:** 2026-08-17 — tarkista ajantasaisuus lähteestä.

---

## Näppäinoikotiet

| Pikanäppäin | Toiminto |
| --- | --- |
| `⌃⌘I` | Avaa Chat-näkymä |
| `⌘I` | Inline chat editorissa tai terminaalissa |
| `⇧⌥⌘L` | Quick Chat |
| `⌘N` | Uusi chat-sessio |
| `⇧⌘I` | Vaihda agent-tilaan |
| `⌥⌘.` | Mallivalitsin |
| `Tab` | Hyväksy inline-ehdotus |
| `Esc` | Hylkää inline-ehdotus |

---

## Kontekstin lisääminen

| Tapa | Kuvaus |
| --- | --- |
| `Add Context` | Pikavalikko eri kontekstityypeille |
| `#<tiedosto\|kansio\|symboli>` | Viittaa tiedostoon, kansioon tai symboliin |
| `#-mention` | Viittaa työkaluun tai chat-muuttujaan |
| Drag & drop | Vedä tiedosto Explorerista tai editorin välilehdeltä |
| `#changes` | Versiohallinnon muutokset kontekstiksi |
| `#selection` | Aktiivinen editorivalinta |

---

## Sisäänrakennetut työkalut (`#`-viittaukset)

| Työkalu | Kuvaus |
| --- | --- |
| `#agent` | Delegoi tehtäviä muille agenteille |
| `#agent/runSubagent` | Aja tehtävä erillisessä subagent-kontekstissa |
| `#browser` | Selain: navigoi, lue sisältö, ota kuvakaappauksia, klikkaa, kirjoita |
| `#edit` | Muokkaukset työtilassa (luo hakemisto/tiedosto, muokkaa tiedostoja) |
| `#execute` | Suorita koodi tai komento (terminaali, tehtävät, notebook-solut) |
| `#read` | Lue tiedostoja, ongelmia, terminaalin tulostetta, notebook-soluja |
| `#search` | Hae tiedostoja, koodia, tekstiä, muutoksia, viittauksia |
| `#todos` | Todo-lista tehtävän edistymisen seurantaan |
| `#web` | Hae verkkosivun sisältö (`#web/fetch`) |
| `#githubRepo` | Semanttinen haku GitHub-repositoriosta |
| `#githubTextSearch` | Tekstihaku GitHub-repositoriosta tai organisaatiosta |
| `#vscode/runCommand` | Suorita VS Code -komento |
| `#vscode/extensions` | Hae tai kysy VS Code -laajennuksista |
| `#vscode/VSCodeAPI` | Kysy VS Code -toiminnallisuudesta tai extension API:sta |

---

## Slash-komennot

| Komento | Kuvaus |
| --- | --- |
| `/explain` | Selitä koodilohko, tiedosto tai käsite |
| `/fix` | Korjaa koodilohko tai kääntäjä-/lint-virheet |
| `/tests` | Generoi testit valituille metodeille/funktioille |
| `/setupTests` | Apu testikehyksen käyttöönottoon |
| `/fixTestFailure` | Apua epäonnistuvien testien korjaamiseen |
| `/doc` | Generoi dokumentaatiokommentit (inline chat) |
| `/new` | Luo uusi projekti tai tiedosto |
| `/newNotebook` | Luo uusi Jupyter-notebook |
| `/plan` | Luo yksityiskohtainen toteutussuunnitelma |
| `/clear` | Aloita uusi chat-sessio |
| `/compact` | Tiivistä keskusteluhistoria kontekstiikkunan säästämiseksi |
| `/fork` | Haaruta nykyinen sessio uudeksi itsenäiseksi sessioksi |
| `/search` | Generoi hakukysely Search-näkymään |
| `/startDebugging` | Generoi launch.json ja käynnistä debug-sessio |
| `/debug` | Avaa Chat Debug -näkymä lokeille |
| `/troubleshoot` | Analysoi agentin debug-lokit |
| `/init` | Generoi tai päivitä työtilan ohjeet (`copilot-instructions.md`) |
| `/agents` | Konfiguroi custom-agentit |
| `/hooks` | Konfiguroi hookit |
| `/instructions` | Konfiguroi custom instructions |
| `/prompts` | Konfiguroi uudelleenkäytettävät prompt-tiedostot |
| `/skills` | Konfiguroi agent-skillit |
| `/create-agent` | Generoi custom agent AI-avusteisesti |
| `/create-prompt` | Generoi prompt-tiedosto AI-avusteisesti |
| `/create-instruction` | Generoi instructions-tiedosto AI-avusteisesti |
| `/create-skill` | Generoi agent skill AI-avusteisesti |
| `/create-hook` | Generoi hook-konfiguraatio AI-avusteisesti |
| `/yolo` / `/autoApprove` | Ota käyttöön kaikkien työkalukutsujen automaattihyväksyntä |
| `/disableYolo` | Poista automaattihyväksyntä käytöstä |
| `/<skill-nimi>` | Suorita agent skill, esim. `/aja-testit` |
| `/<prompt-nimi>` | Suorita uudelleenkäytettävä prompt, esim. `/suunnittele` |

---

## Chat-osallistujat (`@`)

| Osallistuja | Kuvaus |
| --- | --- |
| `@github` | Kysy GitHub-repositorioista, issueista, PR:istä |
| `@terminal` | Kysy terminaali- tai shell-komennoista |
| `@vscode` | Kysy VS Code -toiminnallisuudesta tai asetuksista |

---

## Agent-tila

| Elementti | Kuvaus |
| --- | --- |
| `⇧⌘I` | Vaihda agent-tilaan |
| Configure Tools | Valitse käytettävissä olevat työkalut (sisäänrakennetut, MCP, extensionit) |
| Permission levels | Default Approvals / Bypass Approvals / Assisted |
| `/yolo` | Automaattihyväksyntä kaikille työkalukutsuille |
| MCP | Konfiguroi MCP-palvelimet agent-ominaisuuksien laajentamiseksi |

---

## Räätälöinti

| Tiedosto / Mekanismi | Kuvaus |
| --- | --- |
| `.github/copilot-instructions.md` | Työtilan yhteiset ohjeet, aina aktiivinen |
| `.github/instructions/*.instructions.md` | Kohdistettu `applyTo`-patternilla |
| `.github/prompts/*.prompt.md` | Uudelleenkäytettävät promptit, `/`-komennolla |
| `.github/agents/*.agent.md` | Custom-agentit omilla työkaluilla ja mallilla |
| `.github/skills/<nimi>/SKILL.md` | Agent-skillit, ladataan tarpeen mukaan tai `/`-komennolla |
| `.github/hooks/*.json` | Hookit: `PreToolUse`, `PostToolUse`, `Stop` |
| Agent Customizations editor | `Chat: Open Customizations` — kaikki räätälöinnit yhdessä paikassa |

---

## Editorin AI-toiminnot

| Toiminto | Kuvaus |
| --- | --- |
| Inline-ehdotukset | Ehdotuksia kirjoittaessa, `Tab` hyväksyy |
| `⌘I` | Inline chat editorissa |
| `F2` | AI-ehdotukset symbolien uudelleennimeämiseen |
| Context menu | Selitä koodi, generoi testit, katselmoi, korjaa |
| Code Actions (lamppu) | Korjaa lint- tai kääntäjävirheet AI:lla |

---

## Lähde ja lisätiedot

- Täydellinen dokumentaatio: https://code.visualstudio.com/docs/agents/reference/ai-features-cheat-sheet
- Viimeksi tarkistettu lähteestä: 2026-08-17 (lähde päivitetty 2026-08-12)
