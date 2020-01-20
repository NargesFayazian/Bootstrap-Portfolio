// ====================================menu============================
var i = 0;
function expand() {
  if (i == 0) {
    document.getElementById("toggle").style.top = "100px";
    document.getElementById("toggle").style.right = "120px";
    document.getElementById("menu").style.top = "100px";
    document.getElementById("menu").style.right = "120px";
    document.getElementById("menu").style.transform = "scale(3)";
    document.getElementById("plus").style.transform = "rotate(45deg)";
    i = 1;
  }
  else {
    document.getElementById("toggle").style.top = "20px";
    document.getElementById("toggle").style.right = "20px";
    document.getElementById("menu").style.top = "20px";
    document.getElementById("menu").style.right = "20px";
    document.getElementById("menu").style.transform = "scale(0)";
    document.getElementById("plus").style.transform = "rotate(0deg)";
    i = 0;
  }
}




