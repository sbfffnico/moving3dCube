function rotateCube(e) {
  
  var cube = document.getElementsByClassName("cube");
  var x = e.clientX - window.innerWidth / 2;
  var y = e.clientY - window.innerHeight / 2;
  var q = 0.15;
  var i;

  x = x * q * 1.25;
  y = -y * q * 1.25;

  for(let i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  }
}

document.addEventListener("mousemove", rotateCube);
