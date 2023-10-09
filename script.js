$(".section").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(".section").removeClass("active");
      $(this).addClass("active");
    }
  });
  
  $(window).scroll(function (e) {  
    const maxHeight =
      e.target.scrollingElement.scrollHeight -
      e.target.scrollingElement.clientHeight;
    const currentScroll = e.target.scrollingElement.scrollTop;
    const scrollPerc = (4 / maxHeight) * currentScroll;
    $(".container").css("transform", "translateX(-" + (42 / 4) * scrollPerc + "%)");
  });
  