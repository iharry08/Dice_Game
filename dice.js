var randomnumber1=(Math.floor(Math.random() * 6) )  + 1 ;
var dice1=("images/dice" + randomnumber1 + ".png" );
document.querySelectorAll("img")[0].setAttribute("src", dice1);

var randomnumber2=Math.floor(Math.random()*6) + 1;
var dice2=("images/dice" + randomnumber2 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", dice2);

if(randomnumber1 > randomnumber2)
document.querySelector("h1").textContent="Player 1 Wins";
else if (randomnumber1 < randomnumber2)
document.querySelector("h1").textContent="Player 2 wins";
else
document.querySelector("h1").textContent="Draw";