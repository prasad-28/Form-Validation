$(document).ready(function(){
$(".dropdown").hide();
$(".inner").click(function(){
  if($(this).parent().hasClass('active')){
    $(this).parent().removeClass('active');
    $('.dropdown').slideUp();
  }else{
    $(this).parent().addClass('active');
    $('.inner').parent().removeClass('active').children('.dropdown').slideUp();
    $(this).siblings().slideDown().parent().addClass('active');
  }
});
$(".drop-click").click(function(){
  $(".dropdown-items").toggleClass('show-dropdown')
});

$(".settings-click").click(function(){
  $(".settings-drop").toggleClass("settings-show")
});

$(".rotate-arrow").click(function(){
  $(".main-form-page").slideToggle();
  $(".rotate-arrow i").css('transform', 'rotate(180deg)')
});

$(".cross-icon").click(function(){
  $(".form-inner").hide();
});





























































// Document ready End
});
