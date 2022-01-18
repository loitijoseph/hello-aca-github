//Create Toggle button

let btn = document.createElement("button");
var btnDiv = document.getElementById("toggleButton");
btn.innerHTML = "Click Me";
btn.name = "toggleButton";
btn.id = "togBtn";
btnDiv.appendChild(btn);

//onClick for Toggle Button
var element = document.getElementById("togBtn");
element.onclick = function(event) {
    var toglBtn = document.getElementById("toggleText");
  if (toglBtn.innerHTML === "ACA just taught me about continuous integration and continuous deployment."
  ) {
    toglBtn.innerHTML = " ";
    btn.innerHTML = "Show Hidden Text";
  } else {
    toglBtn.innerHTML = "ACA just taught me about continuous integration and continuous deployment.";
    btn.innerHTML = "Hide Text";
    ;
  }
}