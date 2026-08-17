# 08 · Token-optimisaatio (Token Optimization)

Kustannus syntyy kolmesta: **syöttö** (konteksti, ohjeet, historia), **tuotos**
(vastaus) ja **mallivalinta** (hinta/token vaihtelee 10–50×). Tämä osio vetää
yhteen aiempien osioiden käytännön säästöt.

**Tavoite:** ymmärrät mistä tokenkulutus syntyy ja osaat mitata sekä vähentää sitä.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.

## Demo

1. Kirjaa nykyinen krediittimäärä tilapalkin Copilot-logosta.
2. Kysy chatissa 3–4 kysymystä `varasto.js`-tiedostosta, esim.:
   > Selitä Varasto-luokka.

   > Mitä metodeja puuttuu?

   > Miten virheenkäsittely toimii?
3. Liitä:
   > Lisää Varastolle metodi `arvokkainTuote()`, joka palauttaa kalleimman tuotteen nimen.
4. Kirjaa krediittimäärä uudelleen.
5. Aloita **uusi chat** ja liitä sama prompti (kohta 3) suoraan ilman historiaa.
6. Kirjaa krediittimäärä. Vertaa — kuinka paljon pitkä historia lisäsi kulutusta?

> **Huom: tulokset vaihtelevat.** VS Code pitää prompt-prefixin (ohjeet, tool-määrittelyt,
> historia) automaattisesti cachessa jopa 24 h. Välimuistiosuma maksaa ~10× vähemmän
> kuin kylmä luku. Sama tehtävä voi siksi maksaa eri verran riippuen siitä, onko
> cache lämmin vai kylmä — ei vain siitä, kuinka pitkä historia on.

**Mittaa ennen kuin optimoit.**

## Ydinajatus

Tokenkulutus syntyy kontekstista, tuotoksesta ja mallin hinnasta — näkyvä mittari
on karkea krediittilasku, ei tarkka tokenjaottelu. Mittaa ensin, optimoi sitten:
halvin riittävä malli ja tiivis konteksti.

## 1. Malli tehtävän mukaan

| Tehtävä | Taso |
| --- | --- |
| Boilerplate, yksikkötestit, dokumentaatio | Nopea/halpa |
| Feature, katselmointi, debug | Keskiluokka |
| Vaativa arkkitehtuuri, pitkä agenttityö | Premium |

Nyrkkisääntö: halvempi ensin, eskaloi tarvittaessa.

## 2. Kontekstin hallinta

- Uusi sessio **eri tehtävälle**: vanha historia on epärelevanttia kontekstia ja
  kasvattaa syötettä turhaan joka pyynnössä.
- Saman tehtävän jatkaminen **samassa sessiossa** on usein halvempaa: VS Code pitää
  prefixin cachessa jopa 24 h, ja välimuistiosuma maksaa ~10× vähemmän kuin kylmä
  luku. Jos tehtävä vaatii paljon kontekstia, sessio kannattaa pitää auki eikä
  käynnistää alusta.
- Viittaa tiedostoihin (`#tiedosto`), älä liitä sisältöä.
- Pidä custom instructions tiiviinä: ne luetaan joka promptiin.
- Valitse vain tarpeelliset työkalut: Playwright MCP tuo n. 24 työkalua ja jokainen
  kuluttaa kontekstia joka pyynnössä, myös silloin kun tehtävä ei liity selaimeen.
  Työkalulista kasvaa helposti ajan myötä — käy se läpi säännöllisesti ja kytke
  tarpeettomat pois.

## 3. Copilot-spesifit

- **Auto model selection**: alennus vs. manuaalinen valinta. *Tarkista ajantasainen
  prosentti Copilotin hinnoittelusivulta.*
- **Plan ennen Agentia**: kartoitus estää kalliita virheitä.
- **Koodin täydennykset** eivät kuluta premium-krediittejä, vain chat ja agentit.

## 4. Krediittien seuranta ja rajat

> **Hinnoittelu muuttuu nopeasti** — tarkista ajantasaiset luvut GitHubin
> dokumentaatiosta ennen päätöksiä.

**Mitä yksi krediitti on:** 1 AI-krediitti = $0,01 USD. Tehtävät mitataan syöttö-,
tuotos- ja välimuistitokeneina, jotka muunnetaan suoraan kreidiiteiksi. Jokainen
maksettu Copilot-tilaus sisältää kuukausittaisen krediittikiintiön, joka vastaa
tilaushintaa (esim. $10/kk → 1 000 krediittiä/kk).

**Missä näkyy:** tilapalkin Copilot-logo (IDE, reaaliaikainen laskuri) tai
**github.com → Settings → Billing and plans → Plans and usage** (tarkempi historia).

**Menorajojen asetus** (ettei kulutus yllätä):
- Yksilö: GitHub Settings → Billing → AI Credits → **Change limit** → aseta `$0`
  tai haluamasi euromäärä.
- Organisaatio: org Settings → Billing → Copilot → **Limit total spend per month**.
  Saat sähköpostivaroituksen 50 %, 75 % ja 90 % kohdilla.

> Rajan voi asettaa nollaan: Copilot pysähtyy kun kuukauden krediitit loppuvat
> eikä lasku kasva.

## Reset

`./reset.sh` palauttaa alkutilan, jos demossa muutettiin tiedostoja.

## Jos jää jumiin

Käyttömittareita ei näy: tarkista Copilotin tilaus ja asennukset. Vertaa aina
samaa tehtävää, jotta erot johtuvat kontekstista.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
