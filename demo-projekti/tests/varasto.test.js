"use strict";

// Testit varastolle. Osa testeistä epäonnistuu tarkoituksella, kunnes agentti
// korjaa bugin tai toteuttaa puuttuvan metodin.

const test = require("node:test");
const assert = require("node:assert");
const { Varasto } = require("../src/varasto");

function uusiVarasto() {
  const v = new Varasto();
  v.lisaa("Kiulu", 12.5, 10);
  v.lisaa("Sanka", 8.5, 5);
  return v;
}

test("lisaa ja saldo", () => {
  assert.strictEqual(uusiVarasto().saldo("Kiulu"), 10);
});

test("lisaa olemassa olevaan", () => {
  const v = uusiVarasto();
  v.lisaa("Kiulu", 12.5, 2);
  assert.strictEqual(v.saldo("Kiulu"), 12);
});

test("tuntematon tuote heittaa", () => {
  assert.throws(() => uusiVarasto().saldo("Ei ole"));
});

test("poista ei vie saldoa negatiiviseksi", () => {
  // Saldo ei saa mennä negatiiviseksi: odota poikkeusta
  assert.throws(() => uusiVarasto().poista("Sanka", 99));
});

test("arvo", () => {
  // Varaston kokonaisarvo: 10 * 12.5 + 5 * 8.5 = 167.5.
  assert.strictEqual(uusiVarasto().arvo(), 167.5);
});

test("raportti", () => {
  const raportti = uusiVarasto().raportti();
  assert.ok(raportti.includes("Kiulu: 10 kpl, 12.5/kpl"));
  assert.ok(raportti.includes("Sanka: 5 kpl, 8.5/kpl"));
});
