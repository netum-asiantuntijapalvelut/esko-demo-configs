# 04 · Skillit (Agent Skills)

Kansio, jossa on `SKILL.md` sekä mahdollisia skriptejä ja resursseja. Agentti lataa
skillin **tarpeen mukaan**, tai se voidaan kutsua suoraan /-komennolla.

Sijainti: `.github/skills/<nimi>/SKILL.md` (valmiina `demo-projekti`ssa).
Avoin standardi: sama `SKILL.md` toimii myös Claude Codessa, Cursorissa ja Copilot CLI:ssä.

## Skill vs. custom instruction

| | Skill | Custom instruction |
| --- | --- | --- |
| Sisältö | Ohjeet + skriptit + resurssit | Vain ohjeet |
| Aktivoituu | Tarpeen mukaan | Aina / applyTo-patternin mukaan |

**Tavoite:** osaat kutsua skilliä /-komennolla ja näet miten agentti lataa sen itse.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.

## Demo

1. Suora kutsu, liitä:
   > /aja-testit

   Odota: agentti lataa skillin, ajaa testit ja tulkitsee tuloksen (3 punaista).

2. Epäsuora kutsu, liitä:
   > Korjaa epäonnistuvat testit.

   Odota: agentti tunnistaa tehtävän ja lataa `aja-testit`-skillin itse.

## Ydinajatus

Skill pakkaa ohjeet ja skriptit yhteen; agentti lataa ne vasta tarpeen tullen,
joten konteksti pysyy kevyenä.

## Miten skilli latautuu

Skill latautuu kolmessa vaiheessa: nimi+kuvaus, SKILL.md-runko, resurssit vasta
tarvittaessa. Frontmatterin `---`-lohko on samanlainen myös `.agent.md`-,
`.instructions.md`- ja `.prompt.md`-tiedostoissa.

## Reset

`./reset.sh`, jos demossa korjattiin testejä.

## Jos jää jumiin

`/aja-testit` ei löydy: tarkista polku `.github/skills/aja-testit/SKILL.md` ja
aloita uusi chat. Testit ajetaan samalla komennolla (`node --test`) kaikilla
käyttöjärjestelmillä.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
