# 01 · Toimintatilat: ask, plan ja agent (Agent Modes)

**Tavoite:** osaat valita tehtävään oikean toimintatilan: ask ymmärtämiseen, plan
suunnitteluun, agent toteutukseen.

## Toimintatilat

| Tila | Kuvaus |
|------|--------|
| **Ask** | Lukee kontekstin ja vastaa kysymyksiin. Ei muokkaa tiedostoja. Sopii ymmärtämiseen, selittämiseen ja koodin analysointiin. |
| **Plan** | Tekee vaiheistetun suunnitelman tehtävästä. Ei kirjoita koodia eikä muokkaa tiedostoja. Sopii monimutkaisiin tehtäviin, joissa haluat tarkastaa lähestymistavan ennen toteutusta. |
| **Agent** | Toimii itsenäisesti: lukee ja muokkaa tiedostoja, ajaa komentoja terminaalissa ja iteroi kunnes tehtävä on valmis. Vaatii eniten valvontaa — katselmointi lopuksi on tärkeää. |

## Ennen

- Avaa `demo-projekti` VS Codessa ja Copilot Chat.
- Aja projektin juuressa `./reset.sh` (Windows: `./reset.ps1`). Alkutilassa 3 testiä
  on punaisella: `arvo()`, `raportti()` ja `poista()`-bugi (saldo voi mennä negatiiviseksi).
- Toimintatilavalitsin on chat-kentän alareunassa.

## Demo

Tee kaikki vaiheet samassa keskustelussa, jotta plan- ja agent-vaihe näkevät
edellisen vaiheen tuloksen.

1. **Ask — ymmärrä.** Valitse toimintatilaksi *Ask* ja liitä:
   > Miksi testi "poista ei vie saldoa negatiiviseksi" epäonnistuu? Selitä poista-metodin kulku.

   Odota: selittää bugin sanallisesti, ei muokkaa tiedostoja.

2. **Plan — suunnittele.** Vaihda toimintatilaksi *Plan* ja liitä:
   > Lisää Varastolle arvo() ja raportti() ja korjaa poista()-bugi. Tee suunnitelma, älä kirjoita koodia.

   Odota: vaiheistettu suunnitelma ja tarkentavia kysymyksiä tarvittaessa.

3. **Agent — toteuta.** Vaihda toimintatilaksi *Agent* ja liitä:
   > Toteuta suunnitelma. Aja testit ja korjaa, kunnes kaikki menevät läpi.

   Odota: muokkaa tiedostoja, ajaa testit terminaalissa ja iteroi, kunnes 3 testiä on vihreällä.

## Ydinajatus

ask = ymmärrä, plan = suunnittele, agent = toteuta. Mitä enemmän autonomiaa annat,
sitä tärkeämpää on katselmoida tulos lopuksi.

## Kokeile vielä (jatko)

Aja `./reset.sh` ja toista sama yhdellä agent-pyynnöllä ilman erillistä plan-vaihetta.
Esimerkiksi:

> Lisää Varastolle arvo() ja raportti() ja korjaa poista()-bugi. Aja testit ja
> korjaa, kunnes kaikki menevät läpi.

Tai kirjoita oma versiosi samasta tehtävästä. Vertaa: kumpi tapa antoi selkeämmän
ja helpommin katselmoitavan tuloksen?

## Reset

`./reset.sh` (Windows: `./reset.ps1`) palauttaa alkutilan: 3 testiä punaisella.

## Jos jää jumiin

- Plan- tai agent-toimintatila puuttuu valitsimesta: käytössä oleva tilaus ei sisällä
  agenttitoimintatilaa. Tee ask-vaihe ja siirry harjoitukseen 02.
- Tulos ei mene vihreäksi: aja `./reset.sh` ja aloita alusta. Varmista, että teit
  kaikki vaiheet samassa keskustelussa.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
