$(document).ready(function () {
  var url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  var quoteButton = $("#getQuote");
  var showQuote = $("#showQuote");
  var showAuthor = $("#showAuthor");

  var base = $("#base");
  var quote;
  var author;

  var joystick = $("#joystick, #greenButton");
  joystick.one("click", function () {
    var quotes = [
        "Chúc bạn may mắn lần sau",
        "Trúng 1 cái but",
        "Trúng 1 quyển vở",
        "Trúng mánh"
    ];

	var randomIndex = Math.floor(Math.random() * quotes.length); // Chọn một index ngẫu nhiên trong mảng
    var randomQuote = quotes[randomIndex]; // Lấy ra dòng chữ tại index được chọn

    // Hiển thị số ngẫu nhiên
    showQuote.text(randomQuote.toUpperCase());

    // Gỡ bỏ sự kiện click sau khi đã thực thi
    joystick.off("click");

    // Tiếp tục với phần animation
    $("#base").addClass("animate_base");
    $("#arm").addClass("animate_arm");
    $("#claw").addClass("animate_claw");
    $("#quote").addClass("animate_quote");
    base.one(
      "webkitAnimationEnd oanimationend msAnimationEnd animationend",
      function (e) {
        $("#base").removeClass("animate_base");
        $("#arm").removeClass("animate_arm");
        $("#claw").removeClass("animate_claw");
        $("#quote").removeClass("animate_quote");
        $("#myModal").modal();
      }
    );
  });


});
