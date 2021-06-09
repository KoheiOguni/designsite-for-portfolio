$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});


AOS.init({
  duration:1000,
  delay:150,
});



$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('close');
  $('.header-nav').fadeToggle(500);
});

$(function () {
  $('.burger-btn').click(function () {
      $('.header-text').toggle();
  });
});

// トップへ戻る
$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});