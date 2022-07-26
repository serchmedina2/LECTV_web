Get-ChildItem .\*.html -Recurse | ForEach { (Get-Content $_ | ForEach { $_ -replace '                <div class="bio-title">Biografía y Formación Académica</div>
                <!--Animacion 7 clase de fuente / color de fondo -->
                <div class="bio-content bio-typo">', '                <div class="bio-content bio-typo">
                    <div class="bio-title">Biografía y Formación Académica</div>' }) | Set-Content $_ }

