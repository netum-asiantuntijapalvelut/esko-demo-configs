# Palauttaa demo-projektin alkutilaan, jossa 3 testiä on punaisella.
# Aja tämä ENNEN jokaista demoa ja jokaisen agentti-ajon jälkeen.
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Copy-Item "$here\.demo\pristine\varasto.js" "$here\src\varasto.js" -Force
Copy-Item "$here\.demo\pristine\varasto.test.js" "$here\tests\varasto.test.js" -Force
Write-Host "Reset valmis. Tarkista etta 3 testia on punaisella:"
Write-Host "  node --test"
