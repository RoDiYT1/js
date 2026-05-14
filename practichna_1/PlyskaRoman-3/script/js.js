var curs1 =43.7;
let curs2 = curs1 + 1, curs3 = curs1 + 2;
var balance = prompt("current balance as of month 1:");

var expenses1 = 3500 + 4000 + 9.99*curs1;
var expenses2 = 3500 + 4000 + 9.99*curs2;
var expenses3 = 3500 + 4000 + 9.99*curs3;
var totexp = expenses1+expenses2+expenses3;

var amount1 = Number(prompt("earned in the first month"));
var amount2 = Number(prompt("earned in the second month")*curs2);
var amount3 = Number(prompt("earned in the third month")*curs3);
var totam = amount1+amount2+amount3;


var taxed = (amount1*0.95 - 4500) + (amount2*0.95 - 4500) + (amount3*0.95 - 4500)

balance = totam - totexp - taxed;
console.log(`В цьому кварталі Максим витратив ${totexp} грн.`);
console.log(`Загальний дохід Максима за квартал становить ${totam} грн.`);
console.log(`Загальна сума податків становить ${taxed} грн.`);
console.log(`Загальна сума податків становить ${taxed} грн.`);
console.log(`Отже, наприкінці кварталу залишок на рахунку Максима становить ${balance} грн.`);