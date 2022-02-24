window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbarMain");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky-30) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

window.onkeydown = function() {mouseLeft()};

var header = document.getElementById('top');
header.onmouseenter = function(){mouseLeft()};

var entered = false;
var masterPanel = document.getElementById('masterPanel');
masterPanel.onmouseleave = function() {mouseLeft()};
function mouseLeft(){
  for (let i = 0; i < 8; i++) {
    navbarPanel[i].style.visibility = "collapse";
  }
  masterPanel.style.visibility = "collapse";
  entered=false;
}

var navbarLink = [];
for (let i = 0; i < 8; i++) {
  navbarLink.push(document.getElementsByClassName('navbarLink')[i]);
  navbarLink[i].onclick  = function() {showPanel(i)};
}

var navbarPanel = [];
for (let i = 0; i < 8; i++) {
  navbarPanel.push(document.getElementsByClassName('navbarPanel')[i]);
}

function showPanel(i){
  if(entered ==true){
    mouseLeft();
    return;
  }
  entered=true;
  for (let i = 0; i < 8; i++) {
    navbarPanel[i].style.visibility = "collapse";
  }
  masterPanel.style.visibility = "visible";
  navbarPanel[i].style.visibility = "visible";
}

document.getElementsByClassName('AddToCart')[0].onclick = function(){
  window.open('RoseGarden.html', "_blank");
}