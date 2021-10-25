"use strict";

{
// ハンバーガーのボタン
const hamburgerBtn = document.querySelector(".hamburger-btn");
// クリックで表示されるメニューの要素
const navi = document.getElementById("g-nav");
// メニュー内のリスト
const hamburgerList = document.querySelectorAll(".hamburger-list");

// ハンバーガーボタンをクリックしたときの処理
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navi.classList.toggle("active");
});

// リンクのクリックでナビゲーションを閉じる
hamburgerList.forEach((hamburgerList) => {
  hamburgerList.addEventListener("click", function () {
    hamburgerBtn.classList.remove("active");
    navi.classList.remove("active");
  });
});

// スライダー
$(function() {
  $(".slider").slick({
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 752,
        settings: {
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
});

// フェードイン
$(function(){
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
          }
      });
  });
});

// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

}