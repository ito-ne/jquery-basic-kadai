// loadイベント
$(window).on('load',function() {
  
  console.log('loadイベントが発生しました');
});


$(function () {

  // scrollイベント
  $(window).on('scroll',function () {
      console.log('scrollイベントが発生しました');
    
  });
  
});