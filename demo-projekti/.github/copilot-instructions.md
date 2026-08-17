# Projektin säännöt

- Kieli: Node.js (JavaScript), vain Noden vakiokirjasto. Uudet npm-riippuvuudet
  vaativat perustelun, koska jokainen riippuvuus on tuleva ylläpidettävä ja
  tietoturvariski.
- JSDoc-kommentti julkisille funktioille: se on halvin tapa dokumentoida
  rajapinnat ja auttaa editoria tarkistamaan tyypit.
- Kommentit suomeksi ja ytimekkäinä: yksi rivi riittää useimpiin funktioihin.
- Testit `node:test`-kirjastolla. Aja ennen valmistumista projektin juuresta:
  `node --test`
- Älä poista tai ohita epäonnistuvaa testiä; korjaa koodi. Testi on
  spesifikaatio, ja sen poistaminen piilottaa virheen.
