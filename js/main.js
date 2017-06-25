$(document).ready(function() {

    $('.readmore').click(showArticle);
    $('.readless').click(hideArticle);

    function showArticle(event) {
      event.preventDefault();
      $('#show-this-on-click').slideDown();
      $('.readmore').hide();
      $('.readless').show();
    }

    function hideArticle(event) {
      event.preventDefault();
      $('#show-this-on-click').slideUp();
      $('.readmore').show();
      $('.readless').hide();

    }

});
