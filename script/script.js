$(".mainBlock__firstDiv__button").click(function(){
  $(this).addClass('mainBlock__firstDiv__button__active');
  $(".mainBlock__firstDiv__button").not(this).removeClass("mainBlock__firstDiv__button__active");
});

$("#item1").click(function(){
  $("#block1").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item2").click(function(){
  $("#block2").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item3").click(function(){
  $("#block3").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item4").click(function(){
  $("#block4").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item5").click(function(){
  $("#block5").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item6").click(function(){
  $("#block6").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block7").removeClass("mainBlock__secondDiv__contentDiv__active")
});

$("#item7").click(function(){
  $("#block7").addClass("mainBlock__secondDiv__contentDiv__active")
  $("#block2").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block1").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block4").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block5").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block6").removeClass("mainBlock__secondDiv__contentDiv__active")
  $("#block3").removeClass("mainBlock__secondDiv__contentDiv__active")
});