/* Reading Values in input boxes */
var unchange = () => {
    availQuantity = document.querySelector("#show-1").value;
    quantitySold = document.querySelector("#show-2").value;
}
var change = () => {
    perCost = document.querySelector("#perCost").value;
    required = document.querySelector("#required").value;
}
/* Showing info by DHTML */
var displayInfo = () => {
    change();
    document.querySelector(".samosaOrdered").innerHTML = required;
    document.querySelector(".costPer").innerHTML = perCost;
    var totalCost = required * perCost;
    document.querySelector(".totalCost").innerHTML = totalCost;
}
