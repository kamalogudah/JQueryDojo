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
  $('#container').find('.hot').children('.solid').addClass('highlight-things');
  $('#snow').parent().find('.title').addClass('highlight-things');
  $('.box').on('click','.box-button', function(){
    $('.box').toggleClass('highlight-click');
  });
  $('#select-menu').on('change', function() {
    let name = $('#select-menu option:selected').text();
    let distance = $('#select-menu option:selected').val();
    let price = $('#select-menu option:selected').data('price');
    if (distance) {
      $('#feedback-message').text('You are signing up for a ' + name + ', which costs ' + price + ', to a distance of ' + distance + 'km');
    } else {
      $('#feedback-message').empty();
    }

  });

  $('#input-name').on('keyup', function(){
    let name = $(this).val();
    $('#feedback-message').text('Pleased to meet you, ' + name);
  })

  $('a').on('click', function(event){
    event.preventDefault();
    $('#feedback-message').text('That\'s fine!');
  })
});