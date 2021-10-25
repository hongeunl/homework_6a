//Change to different images when glaze is selected//
function changeImage(value) {
  if (value == "none") {
    document.getElementById("roll-image").src = "cinnamonroll_large.png"
  }
  if (value == "sugar-milk") {
    document.getElementById("roll-image").src = "cinnamonroll_large_sugar.png"
  }
  if (value == "vanilla-milk") {
    document.getElementById("roll-image").src = "cinnamonroll_large_vanilla.png"
  }
  if (value == "double-chocolate") {
    document.getElementById("roll-image").src = "cinnamonroll_large_chocolate.png"
  }
  changeTotalPrice(document.getElementsById("quantity").value);
}

//Update total price when glaze and quantity are selected//
function changeTotalPrice(quantity) {
  var chosenGlaze = document.querySelector('input[name="glaze"]:checked').value;
  if (chosenGlaze == "none") {
    let totalPrice = 3.25*quantity;
    document.getElementById("rollprice").innerHTML = "$" + totalPrice.toFixed(2);
  }
  else {
    let totalPrice = (3.25+0.50)*quantity;
    document.getElementById("rollprice").innerHTML = "$" + totalPrice.toFixed(2);
  }
}

var cartArray = [];

//A new constructor//
function Roll(name, glaze, price) {
  this.name = name;
  this.glaze = glaze;
  this.price = price;
}

//Create an array of rolls that are put into the cart//
function addToCart(flavor) {
  thisPrice = document.getElementById("rollprice").value;
  thisGlaze = document.querySelector('input[name="glaze"]:checked').value;
  thisFlavor = flavor;

  newItem = new Roll(flavor, thisGlaze, thisPrice);
  cartArray.push(newItem);
  console.log(cartArray);
  updateCartNum();
}

//Update the number of items in the cart//
function updateCartNum() {
  var numItemsCart = cartArray.length;
  if (numItemsCart > 0) {
    var cartNum = document.getElementById("cart");
    cartNum.innerHTML = "Cart " + numItemsCart;
  }
}




