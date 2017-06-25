$(document).ready(function() {

    $('.readmore').click(toggleShow);
    function toggleShow(event) {
      event.preventDefault();
      $('#show-this-on-click').slideToggle();
      $('.readmore').hide();
      $('.readless').show();
  


    }

});
