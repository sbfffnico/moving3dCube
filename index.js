let cube = document.getElementsByClassName("cube");
let x = 0, y = 0, z = 0;

function rotateCube(event) {
  if(event.buttons == 1) {
    event.preventDefault();
  }
  x = event.clientX - window.innerWidth / 2;
  y = event.clientY - window.innerHeight / 2;
  var q = 0.42;
  var i;

  x = x * q * 1.25;
  y = -y * q * 1.25;

  for(let i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  }
}

function rotate(xDeg, yDeg, zDeg) {
  x += xDeg, y += yDeg, z += zDeg;
  cube[0].style.transform = `rotateX(${y}deg) rotateY(${x}deg) rotateZ(${z}deg)`;
}

function rightSideUp(side) {
  if (side === 1) {
    cube[0].style.transform = `rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  }
  else if (side === 2) {
    cube[0].style.transform = `rotateX(0deg) rotateY(-90deg) rotateZ(0deg)`;
  }
  else if (side === 3) {
    cube[0].style.transform = `rotateX(0deg) rotateY(180deg) rotateZ(0deg)`;
  }
  else if (side === 4) {
    cube[0].style.transform = `rotateX(0deg) rotateY(90deg) rotateZ(0deg)`;
  }
  else if (side === 5) {
    cube[0].style.transform = `rotateX(-90deg) rotateY(0deg) rotateZ(0deg)`;
  }
  else if (side === 6) {
    cube[0].style.transform = `rotateX(90deg) rotateY(0deg) rotateZ(0deg)`;
  }
}

$(".cube").mousedown(function () {
  $(".cube").mousemove(rotateCube);
});
$(document).mouseup(function () {
  $(".cube").unbind('mousemove');
})


