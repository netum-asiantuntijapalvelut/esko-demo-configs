"use strict";

// Pieni varastoseuranta demoprojektiksi: ei riippuvuuksia, Noden vakiokirjasto riittää.

class Varasto {
  constructor() {
    /** @type {Map<string, {nimi: string, hinta: number, saldo: number}>} */
    this._tuotteet = new Map();
  }

  /** Lisää tuotteen varastoon tai kasvattaa olemassa olevan saldoa. */
  lisaa(nimi, hinta, maara = 1) {
    if (this._tuotteet.has(nimi)) {
      this._tuotteet.get(nimi).saldo += maara;
    } else {
      this._tuotteet.set(nimi, { nimi, hinta, saldo: maara });
    }
  }

  /** Poistaa tuotteita varastosta. HUOM: sisältää demon bugin. */
  poista(nimi, maara = 1) {
    if (!this._tuotteet.has(nimi)) {
      throw new Error(`Tuntematon tuote: ${nimi}`);
    }
    this._tuotteet.get(nimi).saldo -= maara;
  }

  /** Palauttaa tuotteen saldon. */
  saldo(nimi) {
    if (!this._tuotteet.has(nimi)) {
      throw new Error(`Tuntematon tuote: ${nimi}`);
    }
    return this._tuotteet.get(nimi).saldo;
  }

  // TODO: toteuta arvo() joka palauttaa varaston kokonaisarvon (saldo * hinta per tuote)

  // TODO: toteuta raportti() joka palauttaa rivimuodossa "nimi: saldo kpl, hinta/kpl"
}

module.exports = { Varasto };
