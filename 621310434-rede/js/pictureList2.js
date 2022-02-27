jQuery(document).ready(function($){
$('#pasta-menu').change(function(){
  $('#change-pasta').attr('src', $('#pasta-menu').val());
});
});