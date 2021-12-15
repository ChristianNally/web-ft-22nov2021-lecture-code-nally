$(document).ready(() => {

  $('#datagetter').on('submit', (event) => {
    
    event.preventDefault(); // prevent the default action which is a page reloead
    console.log('Hello World!');


    $.ajax({
      url: 'http://localhost:7865/json',
      method: 'GET'
    })
    .then((response) => {
      console.log('response[0]', response[0]);
      $('#display').html('');
      $('<table id="objectives"></table>').appendTo('#display');

      response.forEach((objective) => {
        $(`<tr><td>${objective.day_description}</td><td>${objective.question}</td><td>${objective.answer}</td></tr>`).appendTo('#objectives');
      });

    })
    .catch((error) => {
      console.log('error:', error);
    });

  });

});




