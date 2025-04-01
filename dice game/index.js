var randomNumber1=Math.floor(Math.random()*6)+1;
var randomeDiceImageSrc="dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomeDiceImageSrc);
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomeDiceImageSrc1="dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomeDiceImageSrc1);

if(randomNumber1>randomNumber2)
document.querySelector("h1").innerHTML="WINNER PLAYER 1";
else{
    document.querySelector("h1").innerHTML="WINNER PLAYER 2";
}

document.querySelector("last").innerHTML="congradulations";
