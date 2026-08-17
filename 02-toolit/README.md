# 02 · Toolit (Tools)

**Tavoite:** ymmärrät mitä työkaluja agentilla on käytettävissä ja miten valitset
oikeat työkalut tehtävään.

Työkalut määrittävät mitä agentti voi *tehdä*: haku, tiedostojen luku/kirjoitus,
terminaali ja ulkoiset MCP-työkalut.

## Ennen

1. Varmista, että Node.js ja Chrome on asennettu.
   > Firefox ja WebKit toimivat myös: vaihda `--browser firefox` tai `--browser webkit`
   > Playwright-MCP:n käynnistyskomennossa `.vscode/mcp.json`-tiedostossa.
2. Lataa Playwright-MCP-paketti etukäteen:
   ```bash
   npx -y @playwright/mcp@latest --help
   ```
3. **VS Code:** Avaa `demo-projekti`, käynnistä MCP-palvelin `.vscode/mcp.json`:n
   **Start**-painikkeesta ja tarkista **Configure Tools** -listasta, että
   `browser_*`-työkalut näkyvät.

   > VS Code käynnistää palvelimen myös automaattisesti. Start-painike on tarkoitettu mekanismin havainnollistamiseen, ei pakolliseksi vaiheeksi.

   **CLI:** `.vscode/mcp.json` ei toimi CLI:ssä. MCP-palvelin konfiguroidaan
   sijainnin mukaan:

   | Tiedosto | Vaikutus |
   | --- | --- |
   | `.mcp.json` projektin juuressa | Projektikohtainen, versionhallintaan |
   | `~/.copilot/mcp-config.json` | Käyttäjäkohtainen, kaikki projektit |

   Harjoitusta varten luo `.mcp.json` projektin juureen (sama hakemisto kuin `package.json`):
   ```json
   {
     "servers": {
       "playwright": {
         "command": "npx",
         "args": ["-y", "@playwright/mcp@latest"]
       }
     }
   }
   ```
   Tarkista saatavilla olevat työkalut interaktiivisessa sessiossa: `/mcp`.

## Demo

1. **Sisäänrakennetut työkalut** vaihda agent-toimintatilaa ja liitä:
   > Aja testit ja tiivistä tulos.

   Agentti päättelee itse, että testit ajetaan terminaalissa, ilman että nimeät työkalua erikseen. Se ketjuttaa terminaalin ja yhteenvedon automaattisesti.

   Odota: Copilot ketjuttaa haun, terminaalin ja yhteenvedon ilman erillistä ohjausta.

2. **Työkalun nimeäminen** liitä:
   > Mikä on Node.js:n uusin LTS-versio? #web

   `#web` pakottaa web-haun käyttöön. Ilman sitä Copilot saattaisi vastata pelkästä koulutusaineistosta, joka voi olla vanhentunutta.

   Odota: käyttää nimenomaan mainittua työkalua.

   > **Huom:** Jotkut haku- ja lukutavat hakevat sivun ennen kuin
   > JavaScript on ehtinyt piirtää sisällön tai asynkroniset haut ovat
   > valmiit. Tulos voi olla tyhjä tai sisältää vain lataustekstejä, vaikka
   > sivulla olisi sisältöä. (Playwright toimii kuin oikea selain ja kielimalli toimii kuin käyttäjä)

   3. **MCP: näkyvä selain** liitä:
   > Avaa https://pypi.org, hae hakukentästä `pytest` ja kerro uusin versio ja julkaisupäivä. Käytä browser-työkaluja.

   Tässä agentti ei vain hae tekstiä, vaan ohjaa oikeaa selainta: avaa sivun, kirjoittaa hakukenttään ja lukee tuloksen. MCP-työkalu tekee, web-haku vain lukee. Kuten vaiheessa 2, jossa käytettiin `#web`-työkalua, nimeäminen pakottaa agentin käyttämään selainta eikä vastaamaan koulutusaineistosta.

   Odota: Chrome avautuu, agentti klikkaa ja kirjoittaa itse.

4. **Työkalujen hinta** avaa **Configure Tools** (VS Code) tai kirjoita `/mcp`
   (CLI) ja laske kuinka monta työkalua Playwright-MCP toi (n. 24 kpl). Jokainen
   vie kontekstia joka pyynnössä. Kytke tarpeettomat pois:
   - VS Code: Configure Tools -valikosta
   - CLI: `--deny-tool='playwright'` tai yksittäin `--deny-tool='playwright(tool_name)'`


## Ydinajatus

Valitse vain tehtävän kannalta relevantit työkalut: VS Codessa **Configure Tools**
-valikosta, CLI:ssä `--deny-tool`-lipulla. Web-haku *lukee*, MCP-työkalu *tekee*,
periaate on sama kuin testien ajossa, vain työkalu vaihtuu.

![Configure Tools -painike chat-kentässä](https://code.visualstudio.com/assets/docs/agents/chat-tools/agent-mode-select-tools.png)

## Tietoturva

`--isolated` pitää selaimen kirjautumattomana. Ilman sitä agentti voi selata
sinun kirjautumistasi: sähköposti, tiketit, tuotantokonsoli. Mieti aina: mitä
tämä MCP-palvelin näkee ja minne data päätyy? Sama koskee jokaista `npx`-komennolla
asennettua palvelinta.

## Reset

`./reset.sh` palauttaa alkutilan, jos demossa muutettiin tiedostoja.

## Jos jää jumiin

Selain ei avaudu: tarkista Node/Chrome ja että palvelin on **Start**-tilassa.

## Pikaohjeet: testien ajo

```bash
# demo-projekti-kansion juuressa
./reset.sh        # macOS / Linux
./reset.ps1       # Windows (PowerShell)

# Aja testit
node --test
```
