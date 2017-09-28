$(function() {
  $(".details .navbar-nav").on("click", function() {
    $("#kcjs").offset().top = 0
  }),
  $(window).scroll(function() {
    $("#kcjs").offset().top - $(window).scrollTop() < 0
      ? ($(".details .navbar-nav").addClass("details-fixed"), $(".content").css("marginTop", "53px"))
      : ($(".details .navbar-nav").removeClass("details-fixed"), $(".content").css("marginTop", "0"))
  }),
  $(".details .navbar-navbar-navbar-nav > li").click(function() {
    $(this).addClass("active").siblings().removeClass("active")
  })

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
});
