var  fade = 0;
var menudown = false;


$(function(){

  if(fade == 0){

    $("#logo").animate({
      'opacity':1,
    },{
      'duration': 2000,
      'complete': function(){
        $("#arrow").animate({'opacity':1},{'duration':500});
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
        $("#arrow").css(
          "opacity", logo_a
        );

        if(s > 600){
          $('.container').fadeIn(1200);
          $('.container_2').fadeIn(1200);
          $('.container_3').fadeIn(1200);
            if(menudown == false){
              $('.menu_logo').animate({'top':0},{'duration':1000}),menudown = true;
              $('#menu').animate({'top':0},{'duration':1000}),menudown = true;
            }
        }else{
          $('.container').fadeOut(100);
          $('.container_2').fadeOut(100);
          $('.container_3').fadeOut(100);
        }

        if(s < 600){
          if(menudown == true){
            $('.menu_logo').animate({'top':-500},{'duration':500}),menudown = false;
            $('#menu').animate({'top':-500},{'duration':500}),menudown = false;

          }
        }
      }

      $("#back").css(
        "opacity", back_a
      );


  });

  $("#movie").hover(function(){
      $("#movie").css("color","white").css("text-shadow"," 1px 1px 0px #000000","-1px 1px 0px #000000","1px -1px 0px #000000","-1px -1px 0px #000000")
  },function(){
    $("#movie").css("color","#4D4E4F").css("text-shadow","none")
  });

  $("#abour").hover(function(){
    $("#about").css("color","#191919")
  },function(){
    $("#about").css("color","#4D4E4F")
  });

  $("#artists").hover(function(){
    $("#artists").css("color","#191919")
  },function(){
    $("#artists").css("color","#4D4E4F")
  });

  $("#events").hover(function(){
    $("#events").css("color","#191919")
  },function(){
    $("#events").css("color","#4D4E4F")
  });

  $("#acsess").hover(function(){
    $("#acsess").css("color","#191919")
  },function(){
    $("#acsess").css("color","#4D4E4F")
  });



});
