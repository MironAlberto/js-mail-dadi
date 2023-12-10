let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
/* let player1 = prompt("Nome player 1");
let player2 = prompt("Nome player 2"); */

/* console.log("randomNumber1", randomNumber1, typeof randomNumber1);
console.log("randomNumber2", randomNumber2, typeof randomNumber2); */

document.getElementById("random-number-1").innerHTML = randomNumber1;
document.getElementById("random-number-2").innerHTML = randomNumber2;

if (randomNumber1 === randomNumber2) { 
    document.querySelector("h1").innerHTML = "Pareggio!"; 
    
} 

else if (randomNumber1 < randomNumber2) { 
    document.querySelector(".vittoria-player2").innerHTML = (" ha vinto!"); 
} 

else { 
    document.querySelector(".vittoria-player1").innerHTML = (" ha vinto!"); 
} 