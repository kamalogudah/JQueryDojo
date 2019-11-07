//$()
$(document).ready(function(){
  //console.log("We are ready");
  // $('body').text('Hello World');
  // $('body').html('<strong>Hello World</strong>');
  //$('#fire').addClass('highlight'); //selecting by id
  // $('.non-solid').addClass('highlight');
  $('#container >>> .non-solid').addClass('highlight');
  $('#container input:required').addClass('highlight-form');
  //$('#container input[placeholder*=Name]').addClass('highlight-form'); // highlights all name fields
});