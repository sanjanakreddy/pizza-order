function orderPizza() {
  let name = document.getElementById("name").value;
  let pizza = document.getElementById("pizza").value;
  let qty = document.getElementById("qty").value;
  if (name == "" || pizza == "" || qty < 1) {
    document.getElementById("msg").innerHTML = "Fill all fields correctly";
  } else {
    document.getElementById("msg").innerHTML = "Order placed successfully!";
  }
  return false;
}
