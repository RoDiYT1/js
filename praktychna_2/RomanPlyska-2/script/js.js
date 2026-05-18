let day = prompt("день тижня"),res;

switch(day) {
    case "понеділок":
    case "вівторок":
    case "середа":
        res = "Вартість квитка складає 150 грн";
        break;
    case "четвер":
    case "п'ятниця":
        res = "Вартість квитка складає 200 грн";
        break;
    case "Субота":
    case "Неділя":
        res = "Вартість квитка складає 250 грн"
        break;
    default:
        res = "Помилка введення дня тижня"
        break;
}
console.log(res);
alert(res)