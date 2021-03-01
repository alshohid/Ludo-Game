
 const play=()=>{
        



var myaudio=document.querySelector("#ludo-music");
//myaudio.play();
var victory=document.querySelector("#victory-music");
var darw=document.querySelector("#draw-music");

var value=Math.floor((Math.random()*6)+1);
var dice1=`images/${value}.gif`;
document.querySelector("#check1").setAttribute("src",dice1);
      
var value1=Math.floor((Math.random()*6)+1);
var dice2=`images/${value1}.gif`;
document.querySelector("#check2").setAttribute("src",dice2);

if(value<value1)
{
    document.querySelector(".ludo").innerHTML="Player 2 Have Won !";
    victory.play();

}
else if(value>value1)
{
    document.querySelector(".ludo").innerHTML="Player 1 Have Won !";
    victory.play();
}
else{
    document.querySelector(".ludo").innerHTML="DRAW!";
   darw.play();
}

 }

