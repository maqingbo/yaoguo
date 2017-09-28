$(function() {

  // 鼠标滑入弹出课程介绍
  $('.item > a').mouseenter(function() {
    $(this).find('.item-hover').stop(true, false).animate({
      top: '0'
    }, 300);
  }).mouseleave(function() {
    $(this).find('.item-hover').stop(true, false).animate({
      top: '102%'
    }, 300);
  })

  // jcarousellite 公开课滚动
  $(".jcarousellite-wrap").jCarouselLite({
    btnNext: ".jcarousellite-next",
    btnPrev: ".jcarousellite-prev",
    speed: 400,
    circular: false
  });

  // 在页面中插入返回顶部的div
  !function goTop(){
    var str = '';
    str += '<div class="to-top">';
    str += '  <a href="javascript:;" class="fa fa-comments">';
    str += '    <div class="zixun">';
    str += '      <strong>客服：</strong>咨询课程，解决您的问题！</div>';
    str += '  </a>';
    str += '  <a href="javascript:;" class="fa fa-weixin">';
    str += '    <div>';
    str += '      <img src="./imgs/footer_weixin.png" alt="weixin">';
    str += '      <span>关注腰果公众号<br>获取最新公考咨询！</span>';
    str += '    </div>';
    str += '  </a>';
    str += '  <a href="http://weibo.com/appublisher?refer_flag=1001030101_" class="fa fa-weibo" target="_blank">';
    str += '    <div>';
    str += '      <img src="./imgs/footer_weibo.png" alt="weibo">腰果公考微博<br>一个萌萌哒的段子手，欢迎来撩~</div>';
    str += '  </a>';
    str += '  <a id="goTop" class="fa fa-chevron-circle-up"></a>';
    str += '</div>';

    $('body').append(str);
  }();

  //点击回到顶部
  $("#goTop").click(function (){
    $('body,html').animate({scrollTop:0},600);
  });

})
