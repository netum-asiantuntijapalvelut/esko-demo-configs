---
name: aja-testit
description: Ajaa demoprojektin testit ja tulkitsee tuloksen. Käytä kun testit pitää ajaa, tulkita tai korjata.
---

# Testien ajaminen

Projektin juuresta:

```bash
node --test
```

Tulkinta:
- `pass N  fail 0` = kaikki vihreitä.
- `fail > 0` = lue jälki, korjaa koodi, aja uudelleen.

Korjaa kaikki epäonnistuvat testit ennen jatkamista. Älä ohita tai poista
testejä saadaksesi suiten vihreäksi: testi on spesifikaatio.
