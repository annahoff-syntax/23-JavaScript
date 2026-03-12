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
const alleLoeschenBtn = document.querySelector('#alle-loeschen-btn');


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
infoBox.textContent = 'Todos verwalten';

// innerHTML → parst und rendert HTML (Vorsicht: XSS-Gefahr bei User-Input!)
// XSS steht für Cross-Site Scripting – eine Angriffsmethode bei der jemand schädlichen Code in eure Webseite einschleust.
infoBox.innerHTML = 'Todos <strong>verwalten</strong>';

// style → setzt Inline-Styles direkt am Element
infoBox.style.color = 'green';
infoBox.style.fontWeight = 'bold';


// setAttribute → setzt beliebige HTML-Attribute
// Hier: den Placeholder-Text des Eingabefelds ändern
// Vorsicht: überschreibt kein CSS aus der style.css
eingabe.setAttribute('placeholder', 'Was möchtest du erledigen?');

// Startwert des Zählers setzen
todoZaehler.textContent = 'Todos: 0';



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

infoBtn.addEventListener('click', () => {
  infoBox.textContent = 'Button wurde geklickt!';
});

infoBtn.addEventListener('click', (e) => {
  console.log('Ereignisobjekt', e);
  console.log('e.type', e.type);
  console.log('e.target', e.target);
});

function handleInput() {
  console.log('Input');
}

eingabe.addEventListener('input', handleInput);
eingabe.removeEventListener('input', handleInput);

// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 06 – State: Daten im JavaScript verwalten
// ─────────────────────────────────────────────────────────────────────────────
// Alle Daten der Anwendung speichern wir in Variablen (State).
// Nach jeder Änderung aktualisieren wir das DOM.
// Muster: State ändern → DOM aktualisieren

let anzahlTodos = 0;

function zaehlerAktualisieren() {
  todoZaehler.textContent = `Todos: ${anzahlTodos}`;
}

// anzahlTodos++;
// zaehlerAktualisieren();


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 07 – Formulare
// ─────────────────────────────────────────────────────────────────────────────
// Formulare lösen beim Absenden einen 'submit'-Event aus.
// Ohne e.preventDefault() lädt die Seite neu – alle Daten gehen verloren!

formular.addEventListener('submit', (e) => {
  e.preventDefault(); // Seitenreload verhindern

  const text = eingabe.value.trim(); // trim() entfernt Leerzeichen am Anfang und am Ende. Wie strip() in Python

  if (text === '') {
    return;
  }

  console.log(text);

  todoHinzufuegen(text);

  eingabe.value = '';
  zeichenInfo.textContent = '0 / 50 Zeichen';

});



// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 08 – Input Events: Live-Feedback
// ─────────────────────────────────────────────────────────────────────────────
// Der 'input'-Event feuert bei JEDER Änderung im Feld (jeder Tastendruck).
// Unterschied zu 'change': 'change' feuert erst wenn das Feld verlassen wird.

eingabe.addEventListener('input', (e) => {
  const aktuelleZeichenAnzahl = e.target.value.length;
  const maxZeichen = 50;

  console.log(aktuelleZeichenAnzahl);
  console.log(e.target.value);

  zeichenInfo.textContent = `${aktuelleZeichenAnzahl} / ${maxZeichen} Zeichen`;
});


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 09 – Event Delegation
// ─────────────────────────────────────────────────────────────────────────────
// Problem: Wenn wir Todos dynamisch hinzufügen, haben neue Elemente
// noch keinen Listener. Außerdem wäre ein Listener pro Button ineffizient.
//
// Lösung: EIN Listener auf dem Elternelement (#todo-liste).
// Events "blubbern" von den Buttons nach oben zur Liste (Bubbling).
// Mit e.target prüfen wir, welcher Button geklickt wurde.

liste.addEventListener('click', (e) => {
  // Wir werden pro Listenelement zwei Buttons haben: Erledigt, Löschen

  const id = e.target.dataset.id;

  if (e.target.classList.contains('erledigt-btn')) {
    // Funktion: Markiere das Element mit der id: id als erledigt markieren
    
  }

  if (e.target.classList.contains('loeschen-btn')) {
    // Funktion: Lösche das Element mit der id: id
    todoLoeschen(e.target)
  }
});

// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 10 – Data Attributes
// ─────────────────────────────────────────────────────────────────────────────
// Mit data-* Attributen können wir Daten direkt am HTML-Element speichern.
// Im HTML:  data-id="3"
// In JS:    element.dataset.id  → "3" (immer ein String!)
//
// Das nutzen wir um die ID eines Todos am Element zu speichern,
// damit wir beim Klick wissen, welches Todo gemeint ist.

console.log(ersterAktionButton.dataset.userName);

// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 11 – DOM-Elemente erstellen und einfügen
// ─────────────────────────────────────────────────────────────────────────────
// Statt innerHTML zu benutzen (XSS-Gefahr!), erstellen wir Elemente
// mit createElement() und setzen Inhalt mit textContent (Best Practice).

let idCounter = 0;

function todoHinzufuegen(text) {
  const id = idCounter;
  idCounter++;

  // Elemente erstellen
  const listElement = document.createElement('li');
  const span = document.createElement('span'); // Ein Container für den Text ohne 
  // eigenen Text oder Aussehen -> Dadurch kann man den Text später mit CSS stylen 
  // oder per Java Script ansprechen

  const loeschenBtn = document.createElement('button');
  const erledigtBtn = document.createElement('button');

  // Inhalte setzen
  span.textContent = text;
  loeschenBtn.textContent = 'Löschen';
  erledigtBtn.textContent = 'Erledigt';

  // Klasse setzen
  loeschenBtn.classList.add('loeschen-btn');
  erledigtBtn.classList.add('erledigt-btn');


  // Datenattribute
  listElement.dataset.id = id;

  listElement.appendChild(span);
  listElement.appendChild(loeschenBtn);
  listElement.appendChild(erledigtBtn);
  /* <li>
        <span>Mein Todo</span>
        <button class="loeschen-btn">Löschen</button>
        <button class="erledigt-btn">Erledigt</button>
     </li>
  */

  liste.appendChild(listElement);
  /* 
  <ul id="todo-liste">
     <li>
        <span>Mein Todo</span>
        <button class="loeschen-btn">Löschen</button>
        <button class="erledigt-btn">Erledigt</button>
     </li>
  </ul>
  */

  anzahlTodos++;
  zaehlerAktualisieren();

}


// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 03 – Klassen togglen (classList)
// ─────────────────────────────────────────────────────────────────────────────





// ─────────────────────────────────────────────────────────────────────────────
// FOLIE 11 – Elemente entfernen
// ─────────────────────────────────────────────────────────────────────────────

// infoBox.remove();

function todoLoeschen(object) {

  const element = object.closest('li');


  /*
  ```
    `closest()` geht vom Button aus **nach oben** durch die Elternelemente und gibt das erste `<li>` zurück das es findet. 
    So kommen wir vom Button zum gesamten Listeneintrag:
  ```
button.closest('li')
         ↑
<li data-id="1">          ← das wird gefunden
  <span>Mein Todo</span>
  <button class="loeschen-btn">Löschen</button>
</li>
*/

  // if (element) überprüft, ob element nicht leer ist. element.remove() nur ausgeführt,
  //  wenn element nicht leer ist
  if (element) {
    element.remove()
    anzahlTodos--;
    zaehlerAktualisieren();
  }
}

function alleTodoLoeschen(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  anzahlTodos = 0;
  zaehlerAktualisieren();
}

// Durch die Angabe der Funktino alleTodoLoeschen(liste) in einer Arrow Function wird die Funktion erst ausgeführt,
//  wenn sie durch ein Event getriggert wird und nicht schon, wenn bei Übergabe als Argument an den EventListener
alleLoeschenBtn.addEventListener('click', () => alleTodoLoeschen(liste));


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
