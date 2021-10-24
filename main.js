function showItems() {
  let list = document.getElementById("listOfQuant")
  let quantity = document.getElementById("quantity");
  var eachQuantity = quantity.options[quantity.selectedIndex].text;
  let newQuant = document.createElement("li");
  newQuant.appendChild(document.createTextNode(eachQuantity));
  list.appendChild(newQuant);
  console.log(list);


}