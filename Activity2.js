let textarea=document.querySelector("#text");
let p= document.querySelector("p");

textarea.addEventListener("input",function(){
    p.innerText= textarea.value ;
});
