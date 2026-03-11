// ----------- Konsolenausgabe --------------
console.log('Hallo, wie gehts?');

// -------- Variablen ----------
// const
// const wird für Konstanten verwendet
// const wird verwendet, wenn innerhalb des Codes der Wert NICHT verändert wird
// Es wird standardmäßig nur const verwendet. Nur wenn wir genau wissen, dass sich eine Variable innerhalb des Codes verändern kann, nehmen wir let

const stadt = 'Frankfurt';

// Fehler: const-Variablen können kein neuer Wert zugewiesen werden
//stadt = 'Frankfurt';

const pi = 3.14;

const url = 'https://www.xy.com'

// --------- Objekt und Arrays mit const ------------
// Bei Objekten und Arrays können innerhalb des Objekts oder Arrays die Werte verändert werden
const user = { name: 'Isabelle' };
user.name = 'Muhammed';
user.name = 'Danial';

// Fehler: Einem Objekt oder Array darf kein neues Objekt oder Array zugewiesen werden
//user = { alter: 25 };


// Bei Objekten und Arrays können innerhalb des Objekts oder Arrays die Werte verändert werden
const zahlen = [3, 5, 6, 8];

zahlen.pop();
zahlen.push(1);

// Fehler: Einem Objekt oder Array darf kein neues Objekt oder Array zugewiesen werden
//zahlen = [1, 2, 3]
//zahlen = ['hallo', 'welt'];


// --------- let ----------
// let wird benutzt, wenn wir innerhalb des Codes Werte verändern
let land = 'Deutschland';
land = 'Italien';

let alter = 25;
alter = 26;

alter = alter + 1;

let passwort = '123456';

function aktualisierePasswort(neuesPasswort) {
    passwort = neuesPasswort;
}

// -------- Arrays und Objekte mit let ----------

// JavaScript Arrays sind nicht typisiert -> Werte innerhalb eines Arrays müssen nicht vom gleichen Datentyp sein
// Aber Vorsicht! Gemischte Datentypen können zu unterwarteten Ergebnissen führen, wenn man z.B. mit den Daten rechnet
let namen = ['Basti', 'Danial', 5, 7];

// Mit let können wir nicht nur die Werte innerhalb eines Objects oder Arrays verändern, sondern der Variable auch neue Ararys oder Objekte zuweisen
namen = ['Timo', 'Muhammed'];

namen = [1, 2, 3, 4];


// ---------- Datentypen ------------
console.log();
console.log('--------- Datentypen --------')
// Datentyp der Variable: undefined
let undefinedVariable;
console.log(typeof (undefinedVariable));

undefinedVariable = 'Hallo Welt';
console.log(typeof (undefinedVariable));

// ------------ Vergleichsoperatoren ---------------
console.log();
console.log('--------- Vergleichsoperatoren --------');

5 == 5; // true -> Es wird nur der Wert, aber nicht der Datentyp verglichen

5 == "5"; // true -> Es wird nur der Wert, aber nicht der Datentyp verglichen

5 === "5"; // false -> Es wird sowohl der Wert als auch der Datentyp verglichen

5 === 5; // true -> Es wird sowohl der Wert als auch der Datentyp verglichen



const fiveNumberOne = 5;
let fiveNumberTwo = 5;

fiveNumberOne === fiveNumberTwo;


// --------- Ternary Operator -------------
console.log();
console.log('--------- Ternary Operator --------');

const istVolljaehrig = false;
const age = 15;

if (age >= 18) {
    console.log('Ist volljährig!');
} else {
    console.log('Ist minderjährig');
}

const message = istVolljaehrig
    ? 'Ist volljährig'             // Wird ausgeführt, wenn Ausdruck zu true auswertet
    : 'Ist minderjährig';         // Wird ausgeführt, wenn Ausdruck zu false auswertet

// Struktur Ternary: <Booleanausdruck> ? IstWahr : IstFalsch;
const messageZwei = istVolljaehrig ? 'Ist volljährig' : 'Ist minderjährig';

console.log(`Die Nachricht ist: ${message}`);


// ---------- Logische Operatoren ------------
console.log();
console.log('--------- Logische Operatoren --------');

// ----- AND -------
console.log('----- OR -------');

console.log(true && true);        // true
console.log(true && 'Hallo');     // 'Hallo'
console.log(false && 'Hallo');    // false
console.log('Hallo' && true);     // true

// ----- OR ---------
console.log('----- OR -------');

console.log(true || false);       // true
console.log(true || 'Hallo');     // true
console.log(false || 'Hallo');    // 'Hallo'
console.log('Hallo' || true);     // 'Hallo'

console.log(false || null);       // null

console.log(null || 'Default');   // 'Default'

console.log('Wert' || 'Default'); // 'Wert'

// ------- Nullish -----------

console.log('------- Nullish --------');

console.log(null ?? 'Keine Angabe'); // 'Keine Angabe'
console.log('Hallo' ?? 'Default');   // 'Hallo'
console.log(0 ?? 'Default');         // 0
console.log('' ?? 'Fallback')        // leerer String


const leereVariable = null;

const neueVariable = leereVariable ?? 'Kein Wert';

console.log(neueVariable)                           // 'Kein Wert'


const nameEingabe = 'Max';

const nichtLeererName = nameEingabe ?? 'Kein Name';

console.log(nichtLeererName)                        // 'Max'


// ------------ Funktionen -------------
console.log();
console.log('--------- Funktionen --------');

// Funktion mit Übergabe eines Paramters klassisch und als Arrow Function
function greetKlassisch(name) {
    return `Hallo ${name}`;
}

const greetArrow = (name) => `Hallo ${name}`;


const begruessung = greetKlassisch('Danial');
console.log(begruessung);

console.log(greetArrow('Timo'));


// Funktion ohne Paramter klassisch und als Arrow Function
function sayHiKlassisch() {
    return 'Hi!';
}

// Arrow Functions können mit oder ohne Klammern geschrieben werden. 
// Mit Klammer ist ein return für die Rückgabe eines Werts notwendig. 
// Ohne Klammer kann return weggelassen werden und es wird trotzdem ein Wert zurückgegeben.
// const sayHiArrow = () => 'Hi!';
const sayHiArrow = () => {
    return 'Hi!';
};

console.log(sayHiKlassisch());
console.log(sayHiArrow());


// Arrow Function mit mehreren Parametern
const calc = (zahl1, zahl2) => {
    const ergebnis = zahl1 + zahl2;
    console.log(ergebnis)
    return ergebnis;
};

console.log(calc(4, 8));


// ------------ Callback Funktionen -------------
console.log();
console.log('--------- Callback Funktionen --------');

// Eine Callback-Funktion ist einfach eine Funktion, die du einer anderen Funktion als Parameter übergibst, 
// damit sie später aufgerufen werden kann.

function sagHalloKlassisch() {
    console.log('Hallo!');
}

const sagHalloArrow = () => {
    console.log('Hallo!');
};

sagHalloKlassisch();

// Aufruf der Funktion setTimeout mit einer Callback Function
// Callback Functino hier: sagHalloKlassisch
setTimeout(sagHalloKlassisch, 2000);

// Callback Functino hier: sagHalloArrow
setTimeout(sagHalloArrow, 2000);

// // Callback Functino hier: () => { console.log('Hallo!'); }
setTimeout(() => {
    console.log('Hallo!');
}, 4000);

// Falsch:
//setTimeout(calc(4, 8), 2000);
// Richtig: -> so wird nicht der Funktionsaufruf übergeben, 
// sondern eine Callback-Funktion, die einen normalen Funktionsaufruf innerhalb der Funktion macht
setTimeout(() => calc(4, 8), 2000);
//          ↑ das ist der Callback
//                ↑ das ist ein normaler Funktionsaufruf innerhalb des Callbacks


setTimeout(sagHallo(), 2000); // Ist das gleiche wie: setTimeOut(undefined, 2000);

// Funktion, die eine Callback Function als Argument erwartet: function multiplizieren(zahl, callbackFunction)
function multiplizieren(zahl, unsereFunktion) {
    let ergebnis = zahl * 2;
    unsereFunktion(ergebnis);  //Funktionsaufruf der Callback Function
}

// => Vorteil: Man kann die gleiche Funktion für verschiedene Fälle oder Ausgaben wiederverwenden, 
// ohne für jeden einzelnen Fall oder jede einzelne Augabe eine neue Funktion schreiben zu müssen

multiplizieren(5, (ergebnis) => {
    console.log(`Das Ergebnis ist: ${ergebnis}`);
});

multiplizieren(5, (ergebnis) => {
    console.log(`Wir haben gerechnet und als Ergebnis ${ergebnis} rausbekommen.`);
});



// ------------ Template Literals -------------
console.log();
console.log('--------- Template Literals --------');

// WICHTIG: Für Template Literals müssen Backticks verwendet werden

const userName = 'Melanie';

console.log('Hallo, wie geht es dir, ' + userName + '?');
console.log(`Hallo, wie geht es dir, ${userName}?`);

console.log(`Summe: ${2 * 5 + 3}`);

console.log(`Ich sage: ${sayHiKlassisch()}`);


// ------------ Console Debugging -------------
console.log();
console.log('--------- Console Debugging --------');

console.log('Debug:', userName);
console.log('Wir testen gerade.')

console.warn('Achtung, Warnung!');

const error = 'Das ist ein wichtiger Fehler';
console.error('Fehler:', error);

console.table([{ name: 'Stefan', alter: 30 }, { name: 'Meikel', alter: 26 }]);

// Auf document kann nur über die DevTools zugriffen werden -> so wird die JavaScript-Datei über die HTML-Datei aufgerufen
// Beim Ausführen über das Terminal gibt das eine Fehlermeldung
// console.dir(document.body);


// ------------ Kontrollstrukturen -------------
console.log();
console.log('--------- Kontrollstrukturen --------');

const personenAlter = 5;

if (personenAlter > 18) {
    console.log('Volljährig.');
} else if (personenAlter < 18) {
    console.log('Minderjährig');
} else {
    console.log('Genau 18.');
}

const wochentag = 'Dienstag';

switch (wochentag) {
    case 'Montag':
        console.log('Anfang der Woche.');
        break;
    case 'Freitag':
        console.log('Fast Wochenende.');
        break;
    case 'Samstag':
        console.log('Wochenende.');
        break;
    case 'Sonntag':
        console.log('Wochenende.');
        break;
    default:
        console.log('Normaler Wochentag.')
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log()
const zahlenArray = [3, 5, 6, 8];

for (const zahl of zahlenArray) {
    console.log(zahl);
}

console.log()
let zaehler = 0

while (zaehler < 5) {
    console.log(zaehler);
    zaehler++;
}
