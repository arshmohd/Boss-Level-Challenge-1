let randomNumber1 = Math.floor(Math.random()*6 + 1);
let randomNumber2 = Math.floor(Math.random()*6 + 1);

let player1Dice = document.getElementsByClassName("img1")[0]
let player2Dice = document.getElementsByClassName("img2")[0]

let h1Elem = document.querySelector("h1");
console.log(h1Elem)





console.log(player1Dice);
if(randomNumber1 === 1){
    //player1Dice.src("./images/dice1.png")
    player1Dice.setAttribute("src", "./images/dice1.png")
}
else if(randomNumber1 === 2){
    player1Dice.setAttribute("src", "./images/dice2.png")
}

else if(randomNumber1 === 3){
    player1Dice.setAttribute("src", "./images/dice3.png")
}

else if(randomNumber1 === 4){
    player1Dice.setAttribute("src", "./images/dice4.png")
}

else if(randomNumber1 === 5){
    player1Dice.setAttribute("src", "./images/dice5.png")
}

else {
    player1Dice.setAttribute("src", "./images/dice6.png")
}



console.log(player2Dice);
if(randomNumber2 === 1){
    //player1Dice.src("./images/dice1.png")
    player2Dice.setAttribute("src", "./images/dice1.png")
}
else if(randomNumber2 === 2){
    player2Dice.setAttribute("src", "./images/dice2.png")
}

else if(randomNumber2 === 3){
    player2Dice.setAttribute("src", "./images/dice3.png")
}

else if(randomNumber2 === 4){
    player2Dice.setAttribute("src", "./images/dice4.png")
}

else if(randomNumber2 === 5){
    player2Dice.setAttribute("src", "./images/dice5.png")
}

else {
    player2Dice.setAttribute("src", "./images/dice6.png")
}



if(randomNumber1 > randomNumber2) {
    h1Elem.innerText = ` 🚩 Player 1 Wins!`
}
else if(randomNumber1 < randomNumber2) {
    h1Elem.innerText = ` Player 2 Wins! 🚩 `
} else {
    h1Elem.innerText = `🫵 Draw! 🫵` 
}