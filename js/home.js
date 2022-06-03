$(function() {
    $('#ethan').hover(function() {
      $('#mepic').attr('src','../images/me-color6.png');
    }, function() {
      // on mouseout, reset the background colour
      $('#mepic').attr('src', '../images/me.png');
    });
  });


  $(function() {
    $('#plang').hover(function() {
      $('.lang').css('color','#d3a445');
      $('.bar').css('color','white');
    }, function() {
      $('.lang').css('color', 'black');
      $('.bar').css('color', 'black');
    });
  });

  