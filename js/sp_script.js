var  fade = 0;
var menudown = false;


$(function(){



  if(fade == 0){

    $("#logo").animate({
      'opacity':1,
    },{
      'duration': 3000,
      'complete': function(){
        $("#arrow").animate({'opacity':1},{'duration':500});
        fade = 1;
      }
    });
  }

  $(window).scroll(function(){
    var s = ($(this).scrollTop());

    if(s > 600){
          $('.menu_logo').animate({'top':0},{'duration':1000});
          $('#menu').animate({'top':0},{'duration':1000});
          $('#twitter').animate({'bottom':20},{'duration':1000});
          $("#back").animate({'opacity':1},{'duration':1000});

        }
    

  });

  $("#m_movie").hover(function(){
    $("#m_movie").animate({'color':"#757C82"},150);},function(){
      $("#m_movie").animate({'color':"#4D4E4F"},150);
    });

    $("#m_about").hover(function(){
      $("#m_about").animate({'color':"#757C82"},150);},function(){
        $("#m_about").animate({'color':"#4D4E4F"},150);
      });


      $("#m_artists").hover(function(){
        $("#m_artists").animate({'color':"#757C82"},150);},function(){
          $("#m_artists").animate({'color':"#4D4E4F"},150);
        });

        $("#m_events").hover(function(){
          $("#m_events").animate({'color':"#757C82"},150);},function(){
            $("#m_events").animate({'color':"#4D4E4F"},150);
          });

          $("#m_acsess").hover(function(){
            $("#m_acsess").animate({'color':"#757C82"},150);},function(){
              $("#m_acsess").animate({'color':"#4D4E4F"},150);
            });



    });
