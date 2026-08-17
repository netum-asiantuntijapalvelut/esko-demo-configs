#!/usr/bin/env bash
# Palauttaa demo-projektin alkutilaan, jossa 3 testiä on punaisella.
# Aja tämä ENNEN jokaista demoa ja jokaisen agentti-ajon jälkeen.
set -e
here="$(cd "$(dirname "$0")" && pwd)"
cp "$here/.demo/pristine/varasto.js" "$here/src/varasto.js"
cp "$here/.demo/pristine/varasto.test.js" "$here/tests/varasto.test.js"
echo "Reset valmis. Tarkista että 3 testiä on punaisella:"
echo "  node --test"
