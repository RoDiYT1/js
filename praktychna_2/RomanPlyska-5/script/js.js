let grade = Number(prompt("цінка (від 1 до 12)"))
let res

switch (grade){
    case 12:
    case 11:
    case 10:
        res = "Відмінний результат";
        break;
    case 9:
    case 8:
    case 7:
        res = "Добрий результат";
        break;
    case 6:
    case 5:
    case 4:
        res = "Задовільний результат";
        break;
    case 3:
    case 2:
    case 1:
        res = "Потрібно покращити знання";
        break;
    default:
        res = "Некоректна оцінка";
}

console.log(res);
alert(res);