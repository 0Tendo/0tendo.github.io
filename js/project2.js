
$(document).ready(function (){
    $('.btn').on('click', function calcPi(){
        let pi = 4;
    for (let i = 0; i < 50000; i++)
    {
        
      let denom = i*2 +3;
      if (i % 2 == 0)
      {
          pi -= (4/denom);
      }else{
          pi += (4/denom);
      }
      console.log(pi);
      $('.input').text(pi);
    }
    // hideLoader();
    })
})


  function hideLoader() {
    $('#loader').hide();
  }
  $(window).ready(hideLoader);
  setTimeout(hideLoader, 10 * 1000);  


  