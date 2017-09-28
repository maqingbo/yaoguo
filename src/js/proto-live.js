var live = {
  "id": "0001",
  "belong": "gkxdb",
  "name": "国考先导班",
  "imgs": [],
  "deadLine": "11-25-00:00",
  "teacher": "赵钱孙李",
  "time": "5/17 - 5/21",
  "price": "328",
  "sold": "300",
  "all": "500",
  "intro": "国考复习计划+国考学科必览，超丰厚学时带你秒懂国考，开启学习之旅。这些，一份外卖的钱能得到！",
  "suit": "赵钱孙李",
  "attention": "赵钱孙李"
}

function Live() {
  // 归属于哪个模块
  this.belong = '';
  // 课程名称
  this.name = '',
  // 报名截止日期
  this.deadLine = '',
  // 主讲
  this.teacher = '',
  // 讲课时间
  this.time = '',
  // 图片
  this.img = [
    {
      src: './imgs/300.jpg'
    }
  ],
  // 价格
  this.price = 0,
  // 已售
  this.sold = 0,
  // 全部席位
  this.all = 0,
  // 课程介绍
  this.intro = '',
  // 适合人群
  this.suit = '',
  // 警告
  this.attention = ''
};

Live.prototype = {
  bindBasic: function() {
    var str = '';

    str += '<div class="col-md-3 col-sm-4 col-xs-12 item pro-item">';
    str += '  <a href="./class.html">';
    str += '    <div class="pro-item-img hidden-xs">';
    str += '      <img src="' + this.img[0].src + '" alt="'+ this.name +'">';
    str += '    </div>';
    str += '    <div class="pro-item-attr">';
    str += '      <h5 class="pro-item-name">' + this.name + '</h5>';
    str += '      <div class="pro-item-deadline text-overflow">';
    str += '        <i class="fa fa-microphone-slash"></i>报名截止：' + this.deadLine + '</div>';
    str += '      <div class="pro-item-teacher text-overflow">';
    str += '        <i class="fa fa-microphone"></i>主讲：' + this.teacher + '</div>';
    str += '      <div class="pro-item-time text-overflow">';
    str += '        <i class="fa fa-clock-o"></i>时间：' + this.time + '</div>';
    str += '      <div class="sell clearfix">';
    str += '        <div class="pro-item-price">';
    str += '          <i class="fa fa-rmb"></i>';
    str += '          <span>' + this.price + '</span>';
    str += '        </div>';
    str += '        <div class="pro-item-num">';
    str += '          <i class="fa fa-shopping-cart"></i>';
    str += '          <span class="sold">' + this.sold + '</span>';
    str += '          /';
    str += '          <span class="all">' + this.all + '</span>';
    str += '        </div>';
    str += '      </div>';
    str += '    </div>';
    str += '    <div class="pro-item-hover item-hover">';
    str += '      <h5 class="text-center">' + this.name + '</h5>';
    str += '      <div class="pro-item-hover-wrap">';
    str += '        <div class="pro-item-intro">';
    str += '          课程内容：' + this.intro + '</div>';
    str += '        <div class="pro-item-suit">';
    str += '          适合人群：' + this.suit + '</div>';
    str += '        <div class="pro-item-attention">' + this.attention + '</div>';
    str += '      </div>';
    str += '      <span class="text-center">抢</span>';
    str += '    </div>';
    str += '  </a>';
    str += '</div>';

    var belong = '#' + this.belong;
    // console.log(belong);

    $(belong).append(str);

  }
}
