$(document).ready(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() > 500) {
      if($(window).width() > 567) {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39df190e8733759a63fd49b4f09e3a4f53509ea54466fd81230361c2775701ea&amp;width=100%25&amp;height=641&amp;lang=ru_RU&amp;scroll=false"></script>');
      }
      else {
        $('.map > script').attr('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A39df190e8733759a63fd49b4f09e3a4f53509ea54466fd81230361c2775701ea&amp;width=100%25&amp;height=641&amp;lang=ru_RU&amp;scroll=false"></script>');
      }
    }
  });
});