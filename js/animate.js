//Create Toggle button

let btn = document.createElement("button");
var btnDiv = document.getElementById("toggle-button");
btn.innerHTML = "Click Me";
btn.name = "toggle-button";
btn.id = "togBtn";
btnDiv.appendChild(btn);


//onClick for Toggle Button
var element = document.getElementById("togBtn");
element.onclick = function(event) {
    var toglBtn = document.getElementById("toggle-text");
  if (toglBtn.innerHTML === "ACA just taught me about continuous integration and continuous deployment."
  ) {
    toglBtn.innerHTML = " ";
  } else {
    toglBtn.innerHTML = "ACA just taught me about continuous integration and continuous deployment.";
    ;
  }
}