$(document).ready(function() {

    $('.box').on('click', function() {
      /* e.preventDefault();
      var href = $(this).attr('href');
      // Delay setting the location for one second
     setTimeout(function() {window.location = href},
                          1000); */
       $(this).addClass('openDoor');
    });

});
