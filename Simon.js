let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let highScore=0; //Track High Score

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
     if(started==false){
        started=true;
     }

     levelUp();
});

function gameFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash");
   },250);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
      btn.classList.remove("userFlash");
   },250);
}

function levelUp()
{
    userSeq=[];
     level++;
     h2.innerText=`Level ${level}`;

     let randomIdx=Math.floor(Math.random()*3);
     let randomColor=btns[randomIdx];
     let randomBtn=document.querySelector(`.${randomColor}`);
     gameSeq.push(randomColor);
     console.log(gameSeq);
   //random button choose
     gameFlash(randomBtn);
}

function checkAns(idx){
     
     if(userSeq[idx]===gameSeq[idx])
     {
        if(userSeq.length==gameSeq.length)
        {
          setTimeout(levelUp,1000);
        }
     }
     else
     {
      if(level>highScore)
      {
         highScore=level;
      }
      h2.innerHTML=`Game Over! Your score was <b>${level}</b> High Score: <b>${highScore}</b><br> Press any key to start`;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
         document.querySelector("body").style.backgroundColor="white";
      },150);
      
      reset ();
     }
}

function btnpress()
{
   //console.log(this);
   let btn=this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
   btn.addEventListener("click",btnpress);
}

function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}