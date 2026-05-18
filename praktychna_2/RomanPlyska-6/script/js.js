let temperature = prompt("температура в кімнаті")
let sensorError = prompt("чи є помилка датчика? (true/false)") === "true"
let res

if (sensorError){
    res = "Помилка датчика температури"
}
else{
    if (temperature < 18){
        res = "Увімкнути обігрів";
    } else if (temperature >= 18 && temperature <= 25){
        res = "Температура комфортна";
    } else if (temperature > 25){
        res = "Увімкнути кондиціонер";
    }
}
console.log(res);
alert(res);