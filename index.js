let gram = document.getElementById('convrt-gm');
let kg = document.getElementById('convrt-kg');
let ounce = document.getElementById('convrt-onc');

function calculate() {
    if (document.getElementById('pounds').value == "") {
        gram.innerHTML = 0;
        kg.innerHTML = 0;
        ounce.innerHTML = 0;
    } else {
        let num = parseInt(document.getElementById('pounds').value);
        if (isNaN(num)) {
            alert("Please enter a number");
        } else {
            gram.innerHTML = num * 453.59237;
            kg.innerHTML = num * 0.45359237;
            ounce.innerHTML = num * 16;
        }
    }

}