document.getElementById("submit").onclick = function () {
  window.location.href = "/login.html";
};

document.getElementById("buy").onclick = function () {
  window.location.href = "/crops.html";
};

function autoType() {
  const textElement = document.getElementById("auto-type");
  const text = textElement.innerHTML;
  textElement.innerHTML = "";
  let i = 0;
  const intervalid = setInterval(function () {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(intervalid);
      setTimeout(autoType, 2000);
    }
  }, 200);
}

autoType();
