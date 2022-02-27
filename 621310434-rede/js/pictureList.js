jQuery(document).ready(function($){
$('#pizza-menu').change(function(){
  $('#change-pizza').attr('src', $('#pizza-menu').val());
});
});