var subtotal = (13 + 1) * 5;
var shipping = 0.5 * (13 + 1);
var total = subtotal + shipping;

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById("shipping");
elTotal.textContent = total;


