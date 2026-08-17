# 05 · Custom-agentit ja subagentit (Custom Agents & Subagents)

Roolitettu agentti: omat ohjeet, omat työkalut, oma malli. `.agent.md`-tiedosto
`.github/agents/`-kansiossa ilmestyy chatin agenttilistaan. Kolme valmiina:
**Planner, Toteuttaja, Katselmoija.**

| Agentti | Työkalut | Idea |
| --- | --- | --- |
| Planner | read, search, web | Suunnittelee, ei koske koodiin |
| Toteuttaja | + edit, terminal | Toteuttaa ja ajaa testit |
| Katselmoija | read, search | Katselmoi read-onlyna, ei korjaa |

**Tavoite:** osaat käyttää roolittuja agenteja handoff-ketjussa ja valita mallin
tehtävän mukaan.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.

**Mallit:** jokaisen agentin frontmatterissa on `model:`-kenttä. **Avaa Copilotin
mallivalitsin ja katso mitä malleja teillä on käytössä**, tämä vaihtelee tilauksen
mukaan. Säädä kolme agenttia oman valikoimanne mukaan:

- Planner ja Katselmoija: kevyempi/nopeampi malli riittää.
- Toteuttaja: järein malli, joka tekee vaativimman työn.

Halvempi malli kuluttaa vähemmän krediittejä per pyyntö - käytä kalliimpaa vain siellä,
missä sen parempi suorituskyky näkyy tuloksessa. Nykyiset arvot tiedostoissa ovat vain esimerkkejä.

## Demo (handoff-ketju)

valmiita agenttiesimerkkejä voi tarkastella ja muokata .github/agents kansiossa.

1. **VS Code:** Valitse agenttilistasta **Planner**.
   **CLI:** `/agent Planner`
   Liitä:
   > Lisää Varastolle arvo() ja raportti().

   Odota suunnitelma. **VS Code:** painike **"Aloita toteutus"** (handoff Toteuttajalle).

2. **VS Code:** Klikkaa **Aloita toteutus** — konteksti siirtyy Toteuttajalle mukana.
   **CLI:** `/agent Toteuttaja`, liitä suunnitelma kontekstina.
   Anna agentin toteuttaa ja ajaa testit.
   Odota. **VS Code:** painike **"Katselmointiin"** (handoff Katselmoijalle).

3. **VS Code:** Klikkaa **Katselmointiin**.
   **CLI:** `/agent Katselmoija`, liitä muutokset kontekstina.
   Katselmoija raportoi löydökset muokkaamatta mitään.
   Huomaa: ketju päättyy tähän, löydöksille ei ole jatkopaikkaa.

4. **Luo oma agentti ja laajenna ketju.**

   Lisää ensin handoff `katselmoija.agent.md`:iin, jotta ketju jatkuu Dokumentoijalle.
   Avaa `.github/agents/katselmoija.agent.md` ja lisää `handoffs`-lohko frontmatteriin:

   ```yaml
   handoffs:
     - label: Dokumentoi
       agent: Dokumentoija
       prompt: Päivitä JSDoc-kommentit katselmoinnissa löydettyjen huomioiden perusteella.
       send: false
   ```

   Luo sitten `.github/agents/dokumentoija.agent.md`:

   ```yaml
   ---
   name: Dokumentoija
   description: Kirjoittaa ja päivittää JSDoc-kommentit JavaScript-tiedostoihin.
   tools: ["read", "edit"]
   model: Claude Haiku 4.5 (copilot)
   handoffs: []
   ---

   Kirjoita ja päivitä JSDoc-kommentit pyydettäville funktioille.
   Älä muuta logiikkaa — vain dokumentaatio.
   ```

   Aloita **uusi chat** ja aja ketju uudelleen alusta. Katselmoijan jälkeen ilmestyy
   painike **"Dokumentoi"** — nyt ketju on suljettu: Planner → Toteuttaja → Katselmoija → Dokumentoija.

   > **Huom:** vaihda `model`-arvot omassa valikoimassasi näkyviin malleihin.
   > `./reset.sh` ei poista luomiasi tiedostoja.

## Ydinajatus

Rajatut valtuudet: agentti ei voi vahingossa tehdä mitä ei kuulu rooliin.

## Reset

`./reset.sh` palauttaa alkutilan, jos demossa muutettiin tiedostoja.

## Jos jää jumiin

Agentti ei löydy listasta: tarkista `.github/agents/`-kansio ja aloita uusi chat.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
