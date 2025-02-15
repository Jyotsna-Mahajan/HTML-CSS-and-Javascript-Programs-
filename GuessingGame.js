const max=prompt("Enter the max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number");


while(true)
{
    if(guess=="quit")
    {
        console.log("user Quit");
        break;
    }
    if(guess==random)
    {
        console.log("you are right! congrats!! random number was", random);
        break;
    }
    else if(guess<random)
    {
        guess=prompt("Hint: your guess is too small. please try again");
    }
    else 
    {
        guess=prompt("Hint: your guess is too large. please try again");
    }

    

}

