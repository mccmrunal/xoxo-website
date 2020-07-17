var  counter = 0;

var one = document.querySelector("#one")
var two = document.querySelector("#two")
var three = document.querySelector("#three")
var four = document.querySelector("#four")
var five = document.querySelector("#five")
var six = document.querySelector("#six")
var seven = document.querySelector("#seven")
var eight = document.querySelector("#eight")
var nine = document.querySelector("#nine")

function add(){
  if (counter == 0){
    this.textContent = "X";
    counter = 1;
}
  else {
    counter = 0;
    this.textContent = "O";
      }
}
one.addEventListener('click',add)
two.addEventListener('click',add)
three.addEventListener('click',add)
four.addEventListener('click',add)
five.addEventListener('click',add)
six.addEventListener('click',add)
seven.addEventListener('click',add)
eight.addEventListener('click',add)
nine.addEventListener('click',add)
