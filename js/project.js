$(document).ready(function (){
  for(let i = 0; i < 5000; i++){
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
      gridTempalteRows: 'repeat(100, 1fr)'
    })
    .append(
      $('<div>')
      .attr({
        class: 'gbox',
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
        $(this).css({
          backgroundColor: 'rgb(100, 155, 220)',
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
})

