var inc = document.getElementById('inc');
var dec = document.getElementById('dec');
var quantity = document.getElementById('quantity');

inc.onclick = function () {
    quantity.innerHTML++;
}

dec.onclick = function () {
    if (quantity.innerHTML > 1) {
        quantity.innerHTML--;
    }
}


var collapsibleContents = document.getElementsByClassName('collapsibleContent');
var arr = document.getElementsByClassName('brac');

var opened = [false, false, false ,false, false];

var collapsibleButtons = [];
for (let i = 0; i < 4; i++) {
    collapsibleButtons.push(document.getElementsByClassName('collapsibleButton')[i]);
    console.log(collapsibleButtons[i])
    collapsibleButtons[i].onclick = function () { showContent(i) };
}

function showContent(i) {
    for (let j = 0; j < collapsibleButtons.length; j++) {
        collapsibleContents[j].style.display = "none";
        arr[j].innerHTML = "<";
        if(i!=j){
            opened[j] = false;
        }
    }
    if(opened[i] == false){
        collapsibleContents[i].style.display = "block";
        arr[i].innerHTML = "v";
        opened[i] = true;
    }
    else{
        collapsibleContents[i].style.display = "none";
        arr[i].innerHTML = "<";
        opened[i] = false;
    }
}