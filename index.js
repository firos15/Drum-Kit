for(var i=0; i<document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var bttn=this.innerHTML
    sound(bttn);
    anim(bttn)
    ;});


document.addEventListener("keypress",function(event){
  sound(event.key);
  anim(event.key);
});




function sound(key){

switch(key){
  case "w":  var tom1= new Audio("./sounds/tom-1.mp3");
             tom1.play();
  break;

  case "a":  var tom2= new Audio("./sounds/tom-2.mp3");
             tom2.play();
  break;

  case "s":  var tom3= new Audio("./sounds/tom-3.mp3");
             tom3.play();
  break;

  case "d":  var tom4= new Audio("./sounds/tom-4.mp3");
             tom4.play();
  break;

  case "j":  var snare= new Audio("./sounds/snare.mp3");
             snare.play();
  break;

  case "k":  var kick= new Audio("./sounds/kick-bass.mp3");
             kick.play();
  break;

  case "l":  var crash= new Audio("./sounds/crash.mp3");
             crash.play();
  break;

  default: console.log(bttn);
    };
  }
function anim(keyPress){
  var keey=document.querySelector("."+keyPress);
  keey.classList.add("pressed");
  setTimeout(function(){keey.classList.remove("pressed");},100);


}

}
