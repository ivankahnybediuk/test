$(document).ready(function(){
    $('.reviews__slider').slick({
      autoplay: true,
      speed:500,
      prevArrow:$("#prev-arrow"),
      nextArrow:$("#next-arrow")
    });
  });
   $(window).resize(function(){
    let documentWidth;
      documentWidth=document.documentElement.clientWidth
      console.log(documentWidth)
   })   
   $(".burger").on("click", function(){
    $(".nav-bar").css("display", "flex")
});
$(".nav-bar a").on("click", function(){
    $(".nav-bar").css("display", "none")
})
