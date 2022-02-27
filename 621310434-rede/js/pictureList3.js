jQuery(document).ready(function($){
$('#chick-menu').change(function(){
  $('#change-chic').attr('src', $('#chick-menu').val());
});
});