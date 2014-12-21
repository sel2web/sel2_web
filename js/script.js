var  fade = 0;

$(function(){

if(fade == 0){
  $("#logo").animate({
    'opacity':1,
  },{
    'duration': 2000,
    'complete': function(){
      fade = 2;
    }
  });
}


  $(window).scroll(function(){
    var s = ($(this).scrollTop());
    var blur_v = (s-1100)/100  ;
    var logo_alpha = (600 - s)/300
    var back_alpha = -(570 -s)/300






    if(blur_v < 0){
      blur_v = 0;
    }
    if(blur_v > 10){
      blur_v=10;
    }

    var vague = $(".container").Vague({intensity:blur_v});
    vague.blur();

    $("#data").text('s = '+ s + 'px / blur_v ='+ blur_v + '/ logo_alpha = '+logo_alpha);

      if(fade == 2){
        $("#logo").css(
          "opacity", logo_alpha
        );

        $("#back").css(
          "opacity", back_alpha
        );
      }



  });




});
