$color0 = 'black',
$color1  = 'red',
$color2  = 'orange',
$color3  = 'yellow',
$color4  = 'green',
$color5  = 'blue',
$color6  = 'purple',
$color7  = 'violet',
$color8  = 'white',
$color9  = 'gray',
$colorx = 'pink',

$(document).ready(function (){
  let mouseIsDown = false; // Add this state variable

  $('.canvas-size-option').click(function() {
    const canvasSize = $(this).data('size');
    const numColumns = Math.sqrt(canvasSize);

    
    // Clear the previous canvas
    $('.pagebox').empty();

    // Clear the old color selection boxes
    $('.input').empty();
    
    for(let i = 0; i < canvasSize; i++){

    $('.pagebox')
    .css({
      maxWidth: '400px',
      maxHeight: '800px',
      display: 'grid',
      margin: '0 auto',
      marginTop: '200',
      padding: '0',
      justifyContent: 'center',
      backgroundColor: 'rgb(200, 155, 100)',
      gridTemplateColumns: 'repeat(50, 1fr)',
      gridTempalteRows: 'repeat(100, 1fr)',
      borderStyle: 'solid',
      borderColor: '#d3a445'
    })
    .append(
      $('<div>')
      .attr({
        class: 'gabox',
      })
      .css({
        width: '.5em',
        height: '.5em',
        backgroundColor: 'white',
      })
      .data({
        item: i,
      })
      .on('click', function (){
        console.log('clicked', $(this).data('item'));
      })
      .on('mouseover', function(){
        if(mouseIsDown) {
          $(this).css({
            backgroundColor: $colorx,
          });
        }
      })
      .on('mousedown', function(){
        $(this).css({
          backgroundColor: $colorx,
        });
      })
      .on('mouseout', function(){
        console.log('left', $(this).data('item'));
      })
    )
    
    

  $('#input')
  .css({
    width: '100px',
    height: '100px',
    fontSize: '2em',
  })
  .on('click', function(){
    console.log('click event');
  })
  .on('mouseover', function(){
    console.log('mouse over event')
  })
  }

  $(document).mousedown(function() {
    mouseIsDown = true;
  });

  $(document).mouseup(function() {
    mouseIsDown = false;
  });

  for(let i = 0; i < 10; i++){
    $('.input')
    .css({
      maxWidth: '400px',
      maxHeight: '800px',
      display: 'grid',
      margin: '0 auto',
      padding: '0',
      justifyContent: 'center',
      backgroundColor: 'rgb(200, 155, 100)',
      gridTemplateColumns: 'repeat(10, 1fr)',
      gridTempalteRows: '1fr',
      borderStyle: 'solid',
      borderColor: '#d3a445'
    })
    .append(
      $('<div>')
      .attr({
        class: 'gbox gbox'+i,
      })
      .css({
        width: '2.5em',
        height: '2.5em',
      })
      .data({
        btn: i,
      })
    )
    if(i == 0){
      $('.gbox'+i)
      .css({
        backgroundColor: $color1,
      })
      .on('click', function(){
        $colorx = $color1
      })
    }
    if(i == 1){
      $('.gbox'+i)
      .css({
        backgroundColor: $color2,
      })
      .on('click', function(){
        $colorx = $color2
      })
    }
    if(i == 2){
      $('.gbox'+i)
      .css({
        backgroundColor: $color3,
      })
      .on('click', function(){
        $colorx = $color3
      })
    }
    if(i == 3){
      $('.gbox'+i)
      .css({
        backgroundColor: $color4,
      })
      .on('click', function(){
        $colorx = $color4
      })
    }
    if(i == 4){
      $('.gbox'+i)
      .css({
        backgroundColor: $color5,
      })
      .on('click', function(){
        $colorx = $color5
      })
    }
    if(i == 5){
      $('.gbox'+i)
      .css({
        backgroundColor: $color6,
      })
      .on('click', function(){
        $colorx = $color6
      })
    }
    if(i == 6){
      $('.gbox'+i)
      .css({
        backgroundColor: $color7,
      })
      .on('click', function(){
        $colorx = $color7
      })
    }
    if(i == 7){
      $('.gbox'+i)
      .css({
        backgroundColor: $color8,
      })
      .on('click', function(){
        $colorx = $color8
      })
    }
    if(i == 8){
      $('.gbox'+i)
      .css({
        backgroundColor: $color9,
      })
      .on('click', function(){
        $colorx = $color9
      })
    }
    if(i == 9){
      $('.gbox'+i)
      .css({
        backgroundColor: $color0,
      })
      .on('click', function(){
        $colorx = $color0
      })
    }
  }
  $('.btn')
  .css({
    maxWidth: '100px',
    maxHeight: '25px',
    margin: '0 auto',
    padding: '0',
    justifyContent: 'center',
    backgroundColor: 'black',
  })
  $('.btn #reset')
  .css({
    visibility: 'visible',
    backgroundColor: '#d3a445', /* Adjust this to your preferred background color */
    color: 'white', /* Adjust this to your preferred text color */
    border: 'none', /* Adjust border properties as desired */
    padding: '10px 24px', /* Adjust padding as desired */
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px', /* Adjust font-size as desired */
    margin: '4px 0px',
    marginLeft: '5px',
    transitionDuration: '0.4s',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Lato', sans-serif", /* Adjust to your preferred font */

  })
  .on('click', function(){
    $('.gabox').css({backgroundColor: 'white'})
  })

  $('#reset') // Use only the ID
  .hover(
    function() {
      // Mouseover event
      $(this).css({
        backgroundColor: 'white',
        color: 'black',
      });
    },
    function() {
      // Mouseout event
      $(this).css({
        backgroundColor: '#d3a445', // change back to original color
        color: 'white', // change back to original color
      });
    }
  );
  

})

});




$(function() {
  $('.gbox').hover(function() {
    $(this)
    .css(
      'filter', 'brightness(85%)',
      );
  }, function() {
    // on mouseout, reset the background colour
    $(this)
    .css(
      'filter', 'brightness(100%)',
      );
  });
});


function hideLoader() {
  $('#loader').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 10 * 1000);  