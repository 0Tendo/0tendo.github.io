$(document).ready(function (){
  $('#calculate1').on('click', function(){
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
        $('#result1').text(pi);
        i++;
        if(i >= $('#iterations1').val()) {
          clearInterval(intervalId);
        }
      }, 100);
  });
  
  $('#calculate2').on('click', function(){
    let pi = 3;
    let i = 0;
    let intervalId = setInterval(function() {
        let sign = (i % 2 === 0) ? 1 : -1;
        let denom = 2 * i + 2;
        pi += sign * 4 / (denom * (denom + 1) * (denom + 2));
        console.log(pi);
        $('#result2').text(pi);
        i++;
        if(i >= $('#iterations2').val()) {
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