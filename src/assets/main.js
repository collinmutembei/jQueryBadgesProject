$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2319950.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
    }
  });

});
