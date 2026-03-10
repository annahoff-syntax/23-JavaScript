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
const zahlen = [ 3, 5, 6, 8];

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
console.log(typeof(undefinedVariable));

undefinedVariable = 'Hallo Welt';
console.log(typeof(undefinedVariable));

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