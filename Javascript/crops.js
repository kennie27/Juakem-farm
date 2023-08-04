var tomatoes = {
  Image: "/img/tomatoes.jpg",
  iphone: "image",
  name: "Tomatoes",
  discountedPrice: "Ksh" + " " + 30000,
  originalPrice: "Ksh" + " " + 38500,
  itemId: "I001",
};
document.getElementById("image").src = tomatoes.Image;
document.getElementById("name1").innerText = tomatoes.name;
document.getElementById("discountedPrice1").innerText = tomatoes.discountedPrice;
document.getElementById("originalPrice1").innerText = tomatoes.originalPrice;

var potatoes = {
  Image: "/img/potatoes.jpg",
  iphone: "image2",
  name: "potatoes",
  discountedPrice: "Ksh" + " " + 55000,
  originalPrice: "Ksh" + " " + 60500,
  itemId: "I002",
};
document.getElementById("image2").src = potatoes.Image;
document.getElementById("name2").innerText = potatoes.name;
document.getElementById("discountedPrice2").innerText = potatoes.discountedPrice;
document.getElementById("originalPrice2").innerText = potatoes.originalPrice;

var onions = {
  Image: "/img/onions.jpg",
  iphone: "image3",
  name: "onions",
  discountedPrice: "Ksh" + " " + 60000,
  originalPrice: "Ksh" + " " + 70500,
  itemId: "I003",
};
document.getElementById("image3").src = onions.Image;
document.getElementById("name3").innerText = onions.name;
document.getElementById("discountedPrice3").innerText = onions.discountedPrice;
document.getElementById("originalPrice3").innerText = onions.originalPrice;

var cucumber = {
  Image: "/img/cucumber.jpg",
  iphone: "image4",
  name: "cucumber",
  discountedPrice: "Ksh" + " " + 70000,
  originalPrice: "Ksh" + " " + 75000,
  itemId: "I004",
};
document.getElementById("image4").src = cucumber.Image;
document.getElementById("name4").innerText = cucumber.name;
document.getElementById("discountPrice4").innerText = cucumber.discountedPrice;
document.getElementById("originalPrice4").innerText = cucumber.originalPrice;


var maize = {
  Image: "/img/maize.jpg",
  iphone: "image5",
  name: "maize",
  discountedPrice: "Ksh" + " " + 70000,
  originalPrice: "Ksh" + " " + 75000,
  itemId: "I005",
};
document.getElementById("image5").src = maize.Image;
document.getElementById("name5").innerText = maize.name;
document.getElementById("discountPrice5").innerText = maize.discountedPrice;
document.getElementById("originalPrice5").innerText = maize.originalPrice;




document.getElementById("tomatoes").onclick = function () {
  window.location.href = "/select.html" + "?" + tomatoes.itemId;
};

document.getElementById("potatoes").onclick = function () {
  window.location.href = "/select.html" + "?" + potatoes.itemId;
};

document.getElementById("onions").onclick = function () {
  window.location.href = "/select.html" + "?" + onions.itemId;
};

document.getElementById("cucumber").onclick = function () {
  window.location.href = "/select.html" + "?" + cucumber.itemId;
};
document.getElementById("maize").onclick = function () {
  window.location.href = "/select.html" + "?" + maize.itemId;
};
