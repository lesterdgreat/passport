// Data Picker Initialization
function loadpicker()
{
  $(document).ready(function(){
    var dt = $('.datepicker').datepicker('getDate');
    $('.datepicker').datepicker('setdate', dt)
  });
}
