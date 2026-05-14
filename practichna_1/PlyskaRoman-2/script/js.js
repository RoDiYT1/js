var curs = 43.7;

var amount_1 = 68000;
var amount_2 = 2600 * curs;
var amount_3 = 1900 * curs;

var total = amount_1 + amount_2 + amount_3;
var taxed = total * 0.05 + 4500;

console.log(`Загальна сума доходу Максима складає ${total} грн.`);
console.log(`В кінці кварталу Максиму необхідно сплатити ${taxed} грн.`);