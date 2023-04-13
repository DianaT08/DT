// var counter = 0;
// function printValue(divId, value) {
//     document.getElementById(divId).innerHTML = value;
// }
// printValue("counter", 0);

// document.getElementById("inc").addEventListener("click", increment);

// function increment() {
//     counter++;
//     printValue("counter", counter);
// }

var counter = 0;
function printValue(divId, value) {
    $("#" + divId).html(value)
}
printValue("counter", 0);
$("#inc").on('click', increment);
function increment() {
    if (counter < 10)
    counter++;
    printValue("counter", counter);
}

$("#dec").on('click', decrement);
function decrement() {
    if (counter > 0)
    counter--;
    printValue("counter", counter);
}

