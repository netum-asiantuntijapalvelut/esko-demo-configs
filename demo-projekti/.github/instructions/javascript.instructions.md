---
applyTo: "**/*.js"
---

# JavaScript-säännöt

- Vain Noden vakiokirjasto.
- JSDoc julkisille funktioille: `/** Palauttaa tuotteen saldon. */`
- Virheet heitetään poikkeuksina (`throw`), ei palauteta `null`/`undefined`,
  koska null piilottaa virheen kutsujalta ja siirtää ongelman myöhemmäksi.
- Käytä `class`-rakenteita ja `Map`ia selkeän tilan hallintaan.

Oikein:

```js
saldo(nimi) {
  if (!this._tuotteet.has(nimi)) {
    throw new Error(`Tuntematon tuote: ${nimi}`);
  }
  return this._tuotteet.get(nimi).saldo;
}
```

Väärin:

```js
saldo(nimi) {
  return this._tuotteet.get(nimi)?.saldo ?? null;
}
```
