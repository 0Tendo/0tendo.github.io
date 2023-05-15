$(document).ready(function (){
  $('#calculate').on('click', function(){
      let pi = 4;
      let i = 0;
      let intervalId = setInterval(function() {
        let denom = i*2 +3;
        if (i % 2 == 0)
        {
            pi -= (4/denom);
        }else{
            pi += (4/denom);
        }
        console.log(pi);
        $('#result').text(pi);
        i++;
        if(i >= $('#iterations').val()) {
          clearInterval(intervalId);
        }
      }, 100);
  });
});

function hideLoader() {
$('#loader').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 10 * 1000);