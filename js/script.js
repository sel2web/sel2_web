var  fade = 0;



$(function(){

  if(fade == 0){
    $("#logo").animate({
      'opacity':1,
    },{
      'duration': 2000,
      'complete': function(){
        fade = 1;
      }
    });
  }



  $(window).scroll(function(){
    var s = ($(this).scrollTop());
    var blur_v = (s-1100)/100  ;
    var logo_a = (600 - s)/300;
    var back_a = (s-550)/100;








    if(blur_v < 0){
      blur_v = 0;
    }
    if(blur_v > 10){
      blur_v=10;
    }

    var vague = $(".container").Vague({intensity:blur_v});
    var vague_2 = $(".container_2").Vague({intensity:blur_v});
    var vague_3 = $(".container_3").Vague({intensity:blur_v});
    vague.blur();
    vague_2.blur();
    vague_3.blur();


    $("#data").text('s = '+ s + 'px / blur_v ='+ blur_v + '/ logo_a = '+logo_a+'/ back_a = '+ back_a);

      if(fade == 1){
        $("#logo").css(
          "opacity", logo_a
        );

        if(s > 600){
          $('.container').fadeIn(1200);
          $('.container_2').fadeIn(1200);
          $('.container_3').fadeIn(1200);

        }else{
          $('.container').fadeOut(100);
          $('.container_2').fadeOut(100);
          $('.container_3').fadeOut(100);


        }
      }

      $("#back").css(
        "opacity", back_a
      );


  });

  $("#data_2").text(back_fade);





});
