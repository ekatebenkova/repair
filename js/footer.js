/* Показывать карту только когда докрутили до нее */
$(document).ready(function() {
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;

  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      console.log('Докрутили');
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/? um=constructor%3Aa109d7baf604933b6f41e31b410923f4ed92443c36fc6f4942e9cd45f7143a7f&amp;width=100%25&amp;height=640&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  });
});