let score = prompt("кть балів")
let homeworkDone = prompt("все дз виконане? (true/false)") === "true"
let finalTestPassed = prompt("фінальний тест пройдено? (true/false)") === "true"

let res;

if (score >= 70 && homeworkDone === true && finalTestPassed === true){
    res = "Сертифікат успішно отримано";
}
else{
    res = "Умови для отримання сертифіката не виконані";
}
console.log(res);
alert(res);