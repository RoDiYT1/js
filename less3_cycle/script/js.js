/// 1 ---------------------------------------------------------
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     alert(i)
// }
//// 2 ---------------------------------------------------------
// let e=prompt("end: ")
// for (let i = 1; i <= e; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//         alert(i)
//     }
// }
///// 3 ---------------------------------------------------------
// let e=prompt("end: ");
// let sum = 0;
// for (let i = 1; i <= e; i++) {
//     sum += i;
// }
// console.log(sum);
// alert(sum);
////// 4 ---------------------------------------------------------
// let e=prompt("end: ");
// for (let i = 1; e >= i; e--) {
//     console.log(e);
//     alert(e);
// }
/////// 5 ---------------------------------------------------------
// let e=prompt("number: ");
// for (let i = 1; i <= 10; i++) {
//     console.log(e+" * "+i+" = "+(e*i));
// }
//////// 6 ---------------------------------------------------------
// let pass="admin123"
// let x=0
// while(x==0){
//     let upass = prompt("enter the password or be eradicated");
//     if(upass == pass){
//         console.log("Пароль правильний");
//         alert("Пароль правильний");
//         x++;
//     }
//     else{
//         console.log("Неправильний пароль");
//         alert("Неправильний пароль");
//         }
//
// }
///////// 7 ---------------------------------------------------------
// let pass="admin123"
// let x=1
// while(true){
//     let upass = prompt("enter the password or be eradicated");
//     if(upass == pass){
//         console.log("Пароль правильний");
//         alert("Пароль правильний");
//         break
//     }
//     else{
//         console.log("Неправильний пароль"+x);
//         alert("Неправильний пароль"+x);
//         x++
//     }
//     if(x == 4){
//         console.log("login failed")
//         alert("login failed");
//         break
//     }
// }
////////// 8 ---------------------------------------------------------
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//         alert(i)
//     }
// }
/////////// 9 ---------------------------------------------------------
// let n=prompt('numbar');
// console.log(n.length);
// alert(n.length);
//////////// 10 ---------------------------------------------------------
// let corr = 15893479857348978937896348635;
// while (true) {
//     let guess=prompt("Guess a numbar");
//     if (guess == corr) {
//         console.log("you win congrats");
//         alert("you win congrats");
//         break
//     }
//     else if (guess > corr) {
//         console.log("smaller");
//         alert("smaller");
//     }
//     else if (guess < corr) {
//         console.log("bigger");
//         alert("bigger");
//     }
// }