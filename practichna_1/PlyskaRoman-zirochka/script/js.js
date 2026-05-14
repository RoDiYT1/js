var usd = 43.7;
var eur = 51.2;

var income1 = 100000;
var income2 = 200000;
var income3 = 300000;
var income4 = 150000;

var total = income1 + income2 + income3 + income4;

var tax = total * 0.05;
var esv = 18000;

var ataxes = total - tax - esv;

var povzhivim = ataxes * 0.10;
var dityheroiv = ataxes * 0.05;

var cursavings = 3000 * usd + 2500 * eur;

var balance = ataxes - povzhivim - dityheroiv - 100000 - cursavings;

console.log(`За рік Максим заробив — ${total} грн`);
console.log(`Єдиний податок 5% складає ${tax} грн`);
console.log(`Відрахування у фонди «Повернись живим» та «Діти Героїв» складає ${povzhivim} грн та ${dityheroiv} грн відповідно`);
console.log(`На валютну карту сумарно відкладено ще ${cursavings} грн`);
console.log(`Залишок на рахунку Максима складає ${balance} грн`);