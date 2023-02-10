/*eslint-env browser*/

var me;
var computer;

function rps(){
    "use strict";"
    var num;
        
    do {
    me = window.prompt("Rock destroys scissors. Scissors cut paper. Paper covers rock."+"br>"+"Rock,Paper or Scissors, What would you like to choose?");
    me= me.toLowerCase()
   
      if (me !== "rock" && me !== "scissors" && me !== "paper") {
            window.alert("Ivalid input. Please choose again!"); 
        } 
    } while (me !== "rock" && me !== "scissors" && me !== "paper");
    
    n = Math.random();
    //Returns a number between 0 to 1
    if (n < 0.3) {
        computer = "rock";
    } else if (n > 0.6) {
        computer = "paper";
    } else {
        computer = "scissors";
    }
    
    if (me === computer) {
        window.alert("Both did same so match drawn");
    } 
    else if (me === "rock" && computer === "scissors" || me === "scissors" && computer === "paper" || me === "paper" && computer === "rock") {
        window.alert("You choose " + me + "\nComputer chose " + computer + "\nYou Win!");
    } 
    else {
        window.alert("You choose " + me + "\nComputer chose " + computer + "\nYou Lose!");
        
    }
}


function main() {
    "use strict"
    var play = "y";  
    while (play === "y") {
        rps()
        play = window.prompt("Press y to play again and n to quit");
        if(play == "n"){
            break;
        }
    }
    window.alert("Thanks for playing");
}

main();
