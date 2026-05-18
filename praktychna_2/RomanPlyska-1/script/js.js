let isAuthorized = prompt('Is the user authorized (true/false)') === "true"
let internetSpeed = prompt('user internet speed (int)')
let isBanned = prompt('Is the user banned (true/false)?') === "true";

if (isAuthorized === true && internetSpeed >= 20 && isBanned === false){
    console.log("Access granted");
    alert("Access granted")
}
else{
    console.log("Access denied")
    alert("Access denied")
}