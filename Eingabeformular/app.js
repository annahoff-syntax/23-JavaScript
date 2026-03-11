// =============================================================================
// DOM, Events & Interaktivität
// Todo-Liste
// =============================================================================


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 01 – Was ist das DOM?
// ─────────────────────────────────────────────────────────────────────────────
// Der Browser liest die HTML-Datei und baut daraus einen Objektbaum.
// Diesen Baum können wir mit JavaScript lesen und verändern.
// Der Einstiegspunkt ist immer: document
//
// Zeigt das im Browser:
console.log(document);
console.log(document.title);
console.log(document.body);


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 02 – Elemente selektieren
// ─────────────────────────────────────────────────────────────────────────────
// Bevor wir etwas ändern, müssen wir das Element im DOM finden.
// querySelector() funktioniert wie CSS-Selektoren: .klasse, #id, tag
// Selektoren cachen: einmal speichern, immer wieder verwenden (Best Practice!)

const formular = document.querySelector('#todo-formular');
const eingabe = document.querySelector('#todo-eingabe');
const liste = document.querySelector('#todo-liste');
const zeichenInfo = document.querySelector('#zeichen-info');
const todoZaehler = document.querySelector('#todo-zaehler');
const infoBox = document.querySelector('#info-box');
const infoBtn = document.querySelector('#info-btn');


// querySelector mit Klasse → gibt nur den ERSTEN Treffer zurück
const ersterAktionButton = document.querySelector('.aktion-btn');
console.log('Erster .aktion-btn:', ersterAktionButton.textContent); // 'Hinzufügen'

ersterAktionButton.textContent = 'Neuer Titel';


// Alle Buttons selektieren mit querySelectAll()

const alleButtons = document.querySelectorAll('button');

console.log('Anzahl aller Buttons: ', alleButtons.length);


// Mit forEach über alle Elemente iterieren
alleButtons.forEach((button) => {
  console.log(button.textContent);
});


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 03 – DOM Manipulation
// ─────────────────────────────────────────────────────────────────────────────
// Wir können den Inhalt von Elementen lesen und verändern.
// textContent  → liest/setzt reinen Text (sicher!)
// innerHTML    → liest/setzt HTML-Inhalt (Vorsicht: XSS-Gefahr!)
// style        → setzt Inline-Styles
// classList    → Klassen hinzufügen, entfernen, togglen


// textContent → setzt reinen Text (sicher, kein HTML-Parsing)

// innerHTML → parst und rendert HTML (Vorsicht: XSS-Gefahr bei User-Input!)
// XSS steht für Cross-Site Scripting – eine Angriffsmethode bei der jemand schädlichen Code in eure Webseite einschleust.

// style → setzt Inline-Styles direkt am Element


// setAttribute → setzt beliebige HTML-Attribute
// Hier: den Placeholder-Text des Eingabefelds ändern
// Vorsicht: überschreibt kein CSS aus der style.css

// Startwert des Zählers setzen




// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 04 & 05 – Events & Das Event-Objekt
// ─────────────────────────────────────────────────────────────────────────────
// Events sind Signale des Browsers: "Etwas ist passiert."
// Mit addEventListener() registrieren wir eine Callback-Funktion.
// Der Callback bekommt automatisch das Event-Objekt (e) übergeben.
//
// Syntax:
//   element.addEventListener('eventname', (e) => { ... })
//
// Wichtige Properties des Event-Objekts:
//   e.type          → Name des Events ('click', 'submit', ...)
//   e.target        → Das Element, das den Event ausgelöst hat
//   e.preventDefault() → Standard-Browserverhalten verhindern


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 06 – State: Daten im JavaScript verwalten
// ─────────────────────────────────────────────────────────────────────────────
// Alle Daten der Anwendung speichern wir in Variablen (State).
// Nach jeder Änderung aktualisieren wir das DOM.
// Muster: State ändern → DOM aktualisieren


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 07 – Formulare
// ─────────────────────────────────────────────────────────────────────────────
// Formulare lösen beim Absenden einen 'submit'-Event aus.
// Ohne e.preventDefault() lädt die Seite neu – alle Daten gehen verloren!





// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 08 – Input Events: Live-Feedback
// ─────────────────────────────────────────────────────────────────────────────
// Der 'input'-Event feuert bei JEDER Änderung im Feld (jeder Tastendruck).
// Unterschied zu 'change': 'change' feuert erst wenn das Feld verlassen wird.



// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 09 – Event Delegation
// ─────────────────────────────────────────────────────────────────────────────
// Problem: Wenn wir Todos dynamisch hinzufügen, haben neue Elemente
// noch keinen Listener. Außerdem wäre ein Listener pro Button ineffizient.
//
// Lösung: EIN Listener auf dem Elternelement (#todo-liste).
// Events "blubbern" von den Buttons nach oben zur Liste (Bubbling).
// Mit e.target prüfen wir, welcher Button geklickt wurde.



// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 10 – Data Attributes
// ─────────────────────────────────────────────────────────────────────────────
// Mit data-* Attributen können wir Daten direkt am HTML-Element speichern.
// Im HTML:  data-id="3"
// In JS:    element.dataset.id  → "3" (immer ein String!)
//
// Das nutzen wir um die ID eines Todos am Element zu speichern,
// damit wir beim Klick wissen, welches Todo gemeint ist.


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 11 – DOM-Elemente erstellen und einfügen
// ─────────────────────────────────────────────────────────────────────────────
// Statt innerHTML zu benutzen (XSS-Gefahr!), erstellen wir Elemente
// mit createElement() und setzen Inhalt mit textContent (Best Practice).




// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 03 – Klassen togglen (classList)
// ─────────────────────────────────────────────────────────────────────────────




// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 11 – Elemente entfernen
// ─────────────────────────────────────────────────────────────────────────────



// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 12 – Best Practices (Zusammenfassung)
// ─────────────────────────────────────────────────────────────────────────────
//
// ✓ Selektoren cachen        → querySelector() nur einmal aufrufen
// ✓ textContent statt innerHTML → kein XSS-Risiko
// ✓ classList statt className   → einzelne Klassen sicher verwalten
// ✓ Event Delegation            → ein Listener statt viele
// ✓ data-* Attribute            → Daten am Element speichern
// ✓ defer beim Script-Tag       → DOM ist garantiert fertig geladen
// ✓ e.preventDefault()          → Seitenreload bei Forms verhindern
