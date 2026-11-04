sequenceDiagram
    participant Selain
    participant Palvelin

    Note right of Selain: Käyttäjä kirjoittaa muistiinpanon
    Note right of Selain: Käyttäjä klikkaa Save-nappia

    Selain->>Palvelin: POST /new_note
    activate Palvelin

    Note right of Palvelin: Palvelin tallentaa muistiinpanon

    Palvelin-->>Selain: 302 Redirect -> /notes
    deactivate Palvelin

    Selain->>Palvelin: GET /notes
    Palvelin-->>Selain: HTML-sivu

    Selain->>Palvelin: GET /main.css
    Palvelin-->>Selain: CSS-tiedosto

    Selain->>Palvelin: GET /main.js
    Palvelin-->>Selain: JavaScript-tiedosto

    Note right of Selain: JavaScript käynnistyy selaimessa

    Selain->>Palvelin: GET /data.json
    Palvelin-->>Selain: Muistiinpanot JSON-muodossa

    Note right of Selain: Selain renderöi muistiinpanot näytölle, myös juuri lisätyn muistiinpanon