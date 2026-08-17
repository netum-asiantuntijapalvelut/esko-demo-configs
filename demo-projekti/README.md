# Demoprojekti

Pieni Node.js-varasto, jossa on tarkoituksella tekemättä olevia osia ja yksi bugi.
Kaikki tarvittavat konffit on kytketty valmiiksi. Avaa tämä kansio VS Codessa ja
voit aloittaa.

## Reset (tärkeä)

**Aja ennen jokaista harjoitusta ja jokaisen agent-ajon jälkeen:**

```bash
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)
```

Palauttaa `src/varasto.js` ja testit alkutilaan, jossa **3 testiä on punaisella**.
Harjoitukset nojaavat tähän. Tarkista (sama komento kaikilla käyttöjärjestelmillä):

```bash
node --test
```

## Kokeiltavaa (alkutila)

- `src/varasto.js`: TODO:t `arvo()` ja `raportti()`, sekä bugi `poista()`ssa
  (saldo voi mennä negatiiviseksi).
- `tests/varasto.test.js`: kolme testiä epäonnistuu, kunnes puutteet korjataan.

## Kytketyt konffit

- `.github/copilot-instructions.md` + `instructions/javascript.instructions.md`: säännöt.
- `.github/skills/aja-testit/`: testien ajaminen ja tulkinta.
- `.github/agents/`: Planner, Toteuttaja, Katselmoija handoff-ketjuna.
- `.github/prompts/`: `/suunnittele` ja `/toteuta`.
- `.github/hooks/`: `safety.json` estää vaaralliset komennot, `quality.json` ajaa testit.
- `.vscode/mcp.json`: Playwright-MCP (näkyvä Chrome, ei API-avainta).
- `.vscode/settings.json`: pitää hook-Previewn päällä.
- `.demo/pristine/`: alkutilan varmuuskopio, jota reset käyttää (älä muokkaa).

## Eteneminen

Kulje harjoitukset `../01-toimintatilat` ... `../08-token-optimisaatio` järjestyksessä.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
