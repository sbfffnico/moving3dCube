function rotateCube(event) {
  if(event.buttons == 1) {
    event.preventDefault();
  }

  var cube = document.getElementsByClassName("cube");
  var x = event.clientX - window.innerWidth / 2;
  var y = event.clientY - window.innerHeight / 2;
  var q = 0.42;
  var i;

  x = x * q * 1.25;
  y = -y * q * 1.25;

  for(let i = 0; i < cube.length; i++) {
    cube[i].style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
  }
}

$(".cube").mousedown(function () {
  $(".cube").mousemove(rotateCube);
});
$(document).mouseup(function () {
  $(".cube").unbind('mousemove');
})
