const max=prompt("Enter your max range");

const random=Math.floor(Math.random() * max) +1;

 let guess=prompt("Enter your guess");
  while(true){
    if(guess=="quit"){
        console.log("You quit the game");
        break;
    }
    if(guess==random){
        console.log("Congraulation you win the game");
        break;
    }else if(guess < random){
        console.log("Your guess is too small");
    }else{
        console.log("Your guess is too large");
    }
  }
