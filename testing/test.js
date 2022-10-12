var clicking = false;

$('.selector').mousedown(function(){
    clicking = true;
    $('.clickstatus').text('mousedown');
});

$('.selector').mouseup(function() {
  i = 0;
});

$(document).mouseup(function(){
    clicking = false;
    $('.clickstatus').text('mouseup');
    $('.movestatus').text('click released, no more move event');
});
var i = 0;
$('.selector').mousemove(function(){
    if(clicking === false) return;

    // Mouse click + moving logic here
    $('.movestatus').text('mouse moved ' + i);
  i++;
});