$(function(){$(".item > a").mouseenter(function(){$(this).find(".item-hover").stop(!0,!1).animate({top:"0"},300)}).mouseleave(function(){$(this).find(".item-hover").stop(!0,!1).animate({top:"102%"},300)}),$(".jcarousellite-wrap").jCarouselLite({btnNext:".jcarousellite-next",btnPrev:".jcarousellite-prev",speed:400,circular:!1}),function(){var a="";a+='<div class="to-top">',a+='  <a href="javascript:;" class="fa fa-comments">',a+='    <div class="zixun">',a+="      <strong>客服：</strong>咨询课程，解决您的问题！</div>",a+="  </a>",a+='  <a href="javascript:;" class="fa fa-weixin">',a+="    <div>",a+='      <img src="./imgs/footer_weixin.png" alt="weixin">',a+="      <span>关注腰果公众号<br>获取最新公考咨询！</span>",a+="    </div>",a+="  </a>",a+='  <a href="http://weibo.com/appublisher?refer_flag=1001030101_" class="fa fa-weibo" target="_blank">',a+="    <div>",a+='      <img src="./imgs/footer_weibo.png" alt="weibo">腰果公考微博<br>一个萌萌哒的段子手，欢迎来撩~</div>',a+="  </a>",a+='  <a id="goTop" class="fa fa-chevron-circle-up"></a>',a+="</div>",$("body").append(a)}(),$("#goTop").click(function(){$("body,html").animate({scrollTop:0},600)})});