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

// function rightSideUp() {
//   x += 90;
//   y += 90;
//   //cube[0].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
//   //cube[0].style.transform = "rotateY(" + x + "deg)";
//   cube[0].style.transform = "rotateX(" + y + "deg)";
// }

function rotateX() {
  x += 90;
  cube[0].style.transform = "rotateX(" + x + "deg)";
}
function rotateY() {
  y += 90;
  cube[0].style.transform = "rotateY(" + y + "deg)";
}
function rotateZ() {
  z += 90;
  cube[0].style.transform = "rotateZ(" + z + "deg)";
}

$(".cube").mousedown(function () {
  $(".cube").mousemove(rotateCube);
});
$(document).mouseup(function () {
  $(".cube").unbind('mousemove');
})


