document.getElementById("n").addEventListener('input', inputSum);
function inputSum() {
    var inputNumber = parseInt(document.getElementById("n").value);
    sum(inputNumber);
}
function sum(n) {
    if (typeof n === 'undefined')
        return "n is undefined";
    if (typeof n === "string")
    return "not a number";
    else{
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
}
