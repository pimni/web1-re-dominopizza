slideW = $('#banner').width();
current = 0;
$(document).on('click', '#previous', function(e) {

  if (current > 0 && current <= $('#banner').children().length - 100) {
    current--;
  }

  console.log(current);
  e.preventDefault();
  $('#banner').animate({
    scrollLeft: slideW * current - 50
  }, 600);

});

$(document).on('click', '#next', function(e) {
  if (current < $('#banner').children().length - 1)
    current++;
  console.log(current);
  e.preventDefault();
  $('#banner').animate({
    scrollLeft: slideW * current + 100
  }, 600);

});