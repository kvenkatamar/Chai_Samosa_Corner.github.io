/* Reading Values in input boxes */
var change = () => {
    availQuantity = document.querySelector("#show-1").value;
    quantitySold = document.querySelector("#show-2").value;
}
var input = () => {
    perCost = document.querySelector("#I-perCost").value;
    required = document.querySelector("#required").value;
}
/* Showing info by DHTML */
var displayInfo = () => {
    input();
    change();
    if(required !=''){
        document.querySelector(".container-2").style.display = "block";
    }
    document.querySelector("#sold").innerHTML = required+"/-";
    document.querySelector("#perCost").innerHTML = perCost+"/-";
    var totalCost = required * perCost;
    document.querySelector("#total").innerHTML = totalCost+"/-";
    document.querySelector("#show-1").value = document.querySelector("#show-1").value - document.querySelector("#required").value;
    document.querySelector("#show-2").value = parseInt(document.querySelector("#show-2").value) + parseInt(document.querySelector("#required").value);
    document.querySelector("#required").value = '';
}
