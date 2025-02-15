let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "click me";
button.setAttribute("id", "btn");

input.setAttribute("placeholder", "username");

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Corrected: Use the existing `button` variable
button.classList.add("btnStyle");

let h1 = document.createElement("h1");
h1.innerHTML = "<u> DOM Practice </u>";
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
