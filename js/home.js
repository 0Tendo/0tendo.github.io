$(function() {
    $('#ethan').hover(function() {
      $('#mepic').attr('src','../images/me-color.png');
    }, function() {
      // on mouseout, reset the background colour
      $('#mepic').attr('src', '../images/me.png');
    });
  });

// $('').hover(function(){
// 	$(this).attr('src','http://mygimptutorial.com/images/button-with-metal-ring/8.jpg');
// },function(){
// 	$(this).attr('src','http://mygimptutorial.com/images/button-with-metal-ring/13.jpg');
// });