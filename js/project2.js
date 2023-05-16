$(document).ready(function (){
  Decimal.set({ precision: 5000 });
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

$('#calculate3').on('click', function(){
  let iterations = $('#iterations3').val();

  let sum = new Decimal(0);
  let i = 0;

  let intervalId = setInterval(function() {
      if(i < iterations) {
          sum = sum.plus(calculatePiChudnovskySingleIteration(i));
          let pi = new Decimal(426880).times(new Decimal(10005).sqrt()).div(sum); // Calculate pi here
          $('#result3').text(pi.toString());
          i++;
      } else {
          clearInterval(intervalId);
      }
  }, 100);
});

function factorial(n) {
  let fact = new Decimal(1);
  for(let i = 1; i <= n; i++) {
      fact = fact.times(i);
  }
  return fact;
}

function calculatePiChudnovskySingleIteration(k) {
  let minusOne = new Decimal(-1);
  let sixK = new Decimal(6).times(k);
  let threeK = new Decimal(3).times(k);
  let multiplier = new Decimal(545140134);
  let constant = new Decimal(13591409);
  let factor = new Decimal(640320).toPower(3);

  let numerator = factorial(sixK).times(constant.plus(multiplier.times(k)));
  let denominator = factorial(threeK).times(factorial(k).toPower(3)).times(factor.toPower(k));
  let sum = minusOne.toPower(k).times(numerator).div(denominator);

  return sum;
}
});



function hideLoader() {
$('#loader').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 10 * 1000);