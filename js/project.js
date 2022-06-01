// let gamebox = document.querySelector('gamebox');
// let pagebox = docuemnt.querySelector('pagebox');
// let colors = document.querySelector('colors')

// function handleSubmit(event) {
//   console.log("********* Form Submission *********")
//   console.log("Username:", form.name.value);
//   console.log("Email:", form.email.value);
//   console.log("Newsletter:", form.signup.value);
//   console.log("Date:", form.date.value);
//   event.preventDefault();
// }


$(document).ready(function (){
  // $('pagebox')
  // .css({
  //   display: 'grid',
  //   gridTemplateRows: '1fr 1fr',
  //   gridTemplateColumns: '1fr',
  //   maxWidth: '1400px',
  //   maxHeight: '1400px',
  // })
  for(let i = 0; i < 200; i++){
    $('.pagebox')
    .css({
      display: 'inline-block',
      backgroundColor: 'rgb(200, 155, 100)'
    })
    .append(
      $('<div>')
      .attr({
        class: 'gbox',
      })
      .css({
        width: '.5em',
        height: '.5em',
        backgroundColor: 'rgb(0, 125, 200)',
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
        console.log('left', $(this).date('item'));
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
