# 03 · Custom instructions

Valmiiksi määritellyt ohjeet vaikuttavat **automaattisesti** jokaiseen vastaukseen
ilman erillistä pyyntöä. VS Code tunnistaa tiedostot itse, eikä niitä tarvitse
määrittää.

| Tiedosto | Vaikutus |
| --- | --- |
| `.github/copilot-instructions.md` | Koko workspace, aina aktiivinen |
| `.github/instructions/*.instructions.md` | Kohdistettu `applyTo`-patternilla, esim. `**/*.js` — tiedostonimi on vain tunniste helpompaan ylläpitoon, scoping tulee `applyTo`-arvosta |

Molemmat ovat valmiina `demo-projekti`ssa.

**Tavoite:** osaat kirjoittaa ja kohdistaa ohjeet, jotka vaikuttavat jokaiseen
vastaukseen.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.

## Demo

1. Liitä:
   > Lisää Varastolle metodi, joka laskee keskiarvohinnan, ja kirjoita sille testi.

   Odota, että tulos noudattaa ohjeita ilman erillistä pyyntöä: JSDoc-kommentti,
   suomenkieliset kommentit ja node:test-tyylinen testi.

2. Avaa `.github/instructions/javascript.instructions.md` ja etsi rivi `applyTo: "**/*.js"`:
   sääntö koskee vain JavaScript-tiedostoja.

3. **Kirjoita oma sääntö.** Lisää samaan tiedostoon yksi uusi rivi, esim.:
   ```
   - Dokumentoi parametrit ja paluuarvo `@param`- ja `@returns`-tageilla.
   ```
   Aloita **uusi chat**, liitä sama prompti uudelleen ja tarkista, että lisäämäsi sääntö näkyy tulosteessa.

   > **Huom:** `./reset.sh` ei poista tätä muutosta — poista rivi itse tai jätä se pysyväksi säännöksi.

## Ydinajatus

Lyhyt ja ytimekäs, yksi asia kerrallaan. Perustele *miksi*, ei vain *mitä*. Näytä,
mikä on oikein ja mikä väärin. Älä toista, mitä linter jo valvoo. Tallenna versionhallintaan.

## Reset

`./reset.sh` poistaa demossa lisätyn metodin.

## Jos jää jumiin

Ohje ei näytä vaikuttavan: aloita **uusi chat** (ohjeet luetaan sessionin alussa)
ja varmista, että tiedostot ovat projektin juuren `.github/`-kansiossa.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
