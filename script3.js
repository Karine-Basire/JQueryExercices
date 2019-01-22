$(function(){


$('#depart1').click(function(){
 jQuery.fx.off = false;
 $("#violet").show("slow");
 $("#violet").hide("slow");
});
 });



// //-------------FONDU-------------------

$('#depart2').click(function(){
  jQuery.fx.off = false;
  $("#jaune").show("fast");
 $("#jaune").hide("fast");
});
$("#bleu").click(function(){
  $(this).append("texte");
});


$("#orange").mouseenter(function(){
  $(this).hide(1000);
   $(this).show(1000);
});

// //-------------SLIDE-------------------

$('#depart3').click(function(){
  jQuery.fx.off = false;
  $("#noir").slideUp(1000);
});
$("#gris").click(function(){
  $(this).slideUp(1000);
});
$("#marron").mouseenter(function(){
  $(this).slideToggle(1000);
});



//Inserez le code de votre animation ici !

// //-------------ANIMATE-------------------

$('#depart4').click(function(){
  jQuery.fx.off = false;
  $("#vert").slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
  $("#rouge").animate({
    left: '600px',
    opacity: 0.2,
    width: '200px',
    height: '200px'
  }, 5000);
 });



// //-------------DELAI DESACTIVER------------

$('#depart5').click(function(){
  jQuery.fx.off = false;
  $("#pink").delay(2000)
  $("#pink").animate({left: '600px',},3000);
  $("#pink").animate({opacity: 0.2,},3000);
  $("#pink").animate({width: '600px',},3000);
  $("#pink").animate({height: '600px',},3000);
  $("#cyan").delay(2000)
  $("#cyan").animate({right: '600px',},3000);
  $("#cyan").animate({opacity: 0.2,},3000);
  $("#cyan").animate({width: '600px',},3000);
  $("#cyan").animate({height: '600px',},3000);


});

$('#desactiver').click(function(){
  jQuery.fx.off = true;
  $("#pink").stop();
  $("#cyan").stop();
});

$('.reload').click(function(){
  location.reload();
});

