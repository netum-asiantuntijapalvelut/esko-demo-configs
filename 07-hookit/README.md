# 07 · Hookit (Hooks)

Hook on tapahtumapohjainen automaatio, joka suoritetaan tietyssä kohdassa agentin
suoritusta. Se toimii **ohjeista riippumatta**: agentti ei voi ohittaa hookia eikä
sitä voi kumota promptilla.

| Tapahtuma | Milloin |
| --- | --- |
| `PreToolUse` | Ennen työkalukutsua — voi estää suorituksen |
| `PostToolUse` | Työkalukutsun jälkeen |
| `Stop` | Kun agentti lopettaa vastauksen |

**Tavoite:** osaat kirjoittaa hookin, joka valvoo agentin toimintaa ohjeista riippumatta.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.
`.github/hooks/` sisältää kaksi JSON-määrittelyä:

- `safety.json` estää `rm -rf`-tyyppiset komennot `PreToolUse`-hookilla.
- `quality.json` ajaa `node --test` `PostToolUse`-hookilla aina koodimuutoksen jälkeen.

## Demo

1. Liitä:
   > Aja `rm -rf ./testi-poisto` terminaalissa.

   Odota: hook estää komennon ennen suoritusta.

2. Liitä:
   > Korjaa epäonnistuvat testit.

   Odota: agentti muokkaa koodia, quality-hook ajaa testit automaattisesti
   jokaisen muutoksen jälkeen.

## Ydinajatus

Hook on pakollinen automaatio: se suoritetaan ohjeista riippumatta aina, kun
ehto täyttyy. Laatu- ja turvallisuusvaatimukset kannattaa varmistaa hookilla, ei
promptilla.

## Miten hook toimii

```
[agentti yrittää työkalua] → PreToolUse → [estoa? → estä] → työkalu → PostToolUse → ...
```

JSON-tiedostossa määritellään `type`, `command`, `matcher` (mikä työkalu) ja
`timeout`. Exit-koodi 2 estää toiminnon, muut koodit päästävät läpi.

## Reset

`./reset.sh` palauttaa testit ja koodin alkutilaan.

## Jos jää jumiin

- Hook ei aktivoidu:
  - **VS Code:** varmista, että **Hook Preview** on käytössä
    (`.vscode/settings.json`: `copilot.hooks.enabled: true`).
  - **CLI:** hookit toimivat ilman lisäasetuksia — tarkista vain, että
    tiedosto on `.github/hooks/`-kansiossa ja JSON on kelvollinen.
- `safety.json` ei näy: tarkista että tiedosto on `.github/hooks/`-kansiossa.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
