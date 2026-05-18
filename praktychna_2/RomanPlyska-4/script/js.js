let genre = prompt("жанр музла (rock/pop/jazz/classical):"), res

switch (genre) {
    case "rock":
        res= "Увімкнено рок-плейлист";
        break;
    case "pop":
        res= "Увімкнено поп-плейлист";
        break;
    case "jazz":
        res= "Увімкнено джаз-плейлист";
        break;
    case "classical":
        res= "Увімкнено класичну музику";
        break;
    default:
        res= "Жанр не знайдено";
}
console.log(res);
alert(res);