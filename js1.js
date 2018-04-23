var hacker = "Jimena";
console.log(`Bienvenida ${hacker} ¿Como estas Hoy?`);

var user = prompt("¿Cual es tu nombre?");
console.log(`Bienvenido ${user}`);

var hacker = "Jimena";

console.log("Jimena tiene " + hacker.length + " caracteres.");
console.log("tiene " + user.length + " caracteres.");

if (hacker.length > user.length) {
    console.log(`Èl nombre de ${hacker} es mas largo, tiene ${hacker.length}`);
} else if (hacker.length < user.length){
    console.log(`Èl nombre de ${user} es mas largo, tiene ${user.length}`);
}else {
    console.log(`Los dos nombres son igual de largos, tienen ${hacker.length}`);
}

var separatednames = "";

for (var i = 0; i < hacker.length; i++) {
    separatednames = separatednames + hacker[i].toUpperCase() + " ";
}
console.log(separatednames);

var namereverse = "";

for (var i = user.length-1; i >= 0; i--) {
    namereverse += user[i].toUpperCase() + " ";
}

console.log(namereverse);


