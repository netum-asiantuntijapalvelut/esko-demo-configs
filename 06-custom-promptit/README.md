# 06 · Custom-promptit (Custom Prompts)

Tallennettu prompti `**/*.prompt.md`-tiedostossa, joka ilmestyy chatiin /-komennon
avustamana. Hyöty: yksitoistaiseen tehtävään ei tarvitse kirjoittaa samaa ohjetta
uudelleen.

| | Custom prompt | Skill |
| --- | --- | --- |
| Sisältö | Vain ohjeteksti | Ohjeet + skriptit + resurssit |
| Latautuu | Aina, kun kutsutaan | Tarpeen mukaan tai /-komennolla |

**Tavoite:** osaat tallentaa toistettavat ohjeet prompteiksi ja kutsua niitä
/-komennolla.

## Ennen

`demo-projekti` auki, `./reset.sh` ajettu. Agent-tila.

## Demo

1. Liitä:
   > /suunnittele

   Odota: agentti kysyy mitä haluat suunnitella, ehdottaa vaiheistetuksen
   ja odottaa vahvistusta ennen toteutusta.

2. Liitä:
   > /toteuta

   Odota: agentti tekee sen, mitä /suunnitelle suunnitteli.

3. **Luo oma prompti.** Luo tiedosto `.github/prompts/katselmoi.prompt.md`:

   ```yaml
   ---
   description: Katselmoi viimeisimmät muutokset
   tools: ["read", "search"]
   ---

   Katselmoi muutokset tiedostossa ${input:tiedosto:Tiedoston nimi}.
   Tarkista: logiikkavirheet, puuttuvat testit, JSDoc-kommentit.
   Raportoi löydökset vakavuusjärjestyksessä. Älä korjaa itse.
   ```

   Liitä chatiin `/katselmoi` ja anna tiedostoksi `varasto.js`. Tarkista, että
   `${input:...}`-kenttä pyytää tiedoston nimeä ennen suoritusta.

   > `./reset.sh` ei poista tätä tiedostoa.

## Ydinajatus

Ohje kirjoitetaan kerran ja toistuu /-komennon avulla; samaa tekstiä ei tarvitse
liittää uudelleen.

## Miten prompti tallennetaan

Keskustelun lomalla saatat kehittää hyödyllisen työn kulun. Tallenna se: chatissa
**Save as prompt** tai lisää tiedosto `.github/prompts/`-kansioon. Frontmatterin
`---`-lohko on samanlainen kuin skillissä.

## Reset

`./reset.sh` poistaa demossa lisätyt tiedostot.

## Jos jää jumiin

`/suunnittele` ei löydy: tarkista polku `.github/prompts/suunnittele.prompt.md` ja
aloita uusi chat.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
