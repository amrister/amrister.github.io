$(function(){

  // Adjust Pannel design
  $('.pannel i').on('click',function(){
      $('.pannel').toggleClass('active');
  })

  // Options in profile
  $(".options li").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
  })
  $(".votes i").on("click",function(){
    if($(this).hasClass("active")){
      $(this).removeClass("active");
      return;
    }
    $(this).addClass("active").siblings().removeClass("active");
  })

})
