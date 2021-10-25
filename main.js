/* /* function showItems() {
  let list = document.getElementById("listOfItems");
  let quantity = document.getElementById("quantity");
  var eachQuantity = quantity.options[quantity.selectedIndex].text;
  let newQuant = document.createElement("li");
  newQuant.appendChild(document.createTextNode(eachQuantity));
  list.appendChild(newQuant);
  console.log(list);
} */

function addToGlazeArray() {
  var eachGlaze = [];
  let glaze = document.getElementsByClassName("choose-glaze");
  let chosenGlaze = glaze.options[glaze.selectedIndex].text;
  eachGlaze.push(chosenGlaze);
  console.log()
}

/* 

function addToGlazeArray() {
  var listOfGlaze = document.getElementById("listOfGlaze");
  let chosenGlaze = document.querySelector('input[name="glaze"]:checked').value;
  let newAdded = document.createElement("li");
  newAdded.appendChild(chosenGlaze);
  list.appendChild(listOfGlaze);
  console.log(listOfGlaze);

} */

function addToQuantArray(eachGlaze) {
  var eachQuant = [];
  let quantity = document.getElementById("quantity");
  let chosenQuantity = quantity.options[quantity.selectedIndex].text;
  eachQuant.push(chosenQuantity);
  if (eachQuant > 0) {
    addEachLine(eachGlaze, eachQuant, eachQuant.length-1);
    var lineAdded = addEachLine(eachGlaze, eachQuant, eachQuant.length-1);
    showAllItems(lineAdded);
  }
}


function addEachLine(eachGlaze, eachQuant, num) {
  var list = document.getElementById("listOfItems");
  let newAdded = document.createElement("li");
  let combined = "ORIGINAL " + eachGlaze[num] + " x " + eachQuant[num];
  newAdded.appendChild(combined);
  list.appendChild(newAdded);
  return list;
}

function showAllItems(list) {
  console.log(list);
}

function Roll(name, glaze, price) {
  this.name = name;
  this.glaze = glaze;
  this.price = price;
}

function addToCart(flavor) {
  thisPrice = document.getElementById("totalPrice").value;
  thisGlaze = document.getElementById("glaze").innerHTML;
  thisFlavor = flavor;

  newItem = new foodItem(flavor, thisGlaze, thisPrice);
  cartArray.push(newItem);
  console.log(cartArray);

  updateCartNum();
}

var cartArray = [];

function updateCartNum() {
  var numItemsCart = cartArray.length;

  if (numItemsCart > 0) {
    var cartNum = document.getElementById("cart");
    cartNum.innerHTML = "Cart " + numItemsCart;
  }
}


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