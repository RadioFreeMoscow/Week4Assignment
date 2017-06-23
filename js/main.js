$(document).ready(function() {

    $('.readmore').click(toggleShow);
    function toggleShow(event) {
      event.preventDefault();
      $('#show-this-on-click').slideToggle();
      $('p.readless hide').show();
    }


});
