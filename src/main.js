let navbar = $(".navbar");

$(window).scroll(function () {
  //  .scroll() 当用户滚动指定元素时，会发生 scroll 事件
  // console.log(window.innerHeight);

  // offset() 方法设置或返回被选元素相对于文档的偏移坐标。
  // console.log($(".section-2").offset().top);

  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  }
  else {
    navbar.removeClass("sticky");
  }
});

/* Counter Animation */
let nCount = function (selector) {
  $(selector).each(function () {
    $(this).animate({
      Counter: $(this).text()
    }, {
      speed: 4000,
      easing: "swing",
      step: function (value) {
        $(this).text(Math.ceil(value));
      }
    });
  });
};
let a = 0;
$(window).scroll(function () {
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});