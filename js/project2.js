$(document).ready(function (){
  Decimal.set({ precision: 600 });
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
  
  if(iterations > 50) {
    alert("Maximum iterations for the Chudnovsky formula is 50.");
    return;
  }
  
  let pi = calculatePiChudnovsky(iterations);
  $('#result3').text(pi.toString());
});

function factorial(n) {
  let fact = new Decimal(1);
  for(let i = 1; i <= n; i++) {
      fact = fact.times(i);
  }
  return fact;
}

function calculatePiChudnovsky(iterations) {
  let pi = new Decimal(0);
  let twelve = new Decimal(12);
  let one = new Decimal(1);
  let minusOne = new Decimal(-1);
  let two = new Decimal(2);
  let three = new Decimal(3);
  let six = new Decimal(6);
  let constant = new Decimal(13591409);
  let multiplier = new Decimal(545140134);
  let divisor = new Decimal(640320);

  for (let k = 0; k < iterations; k++) {
      let firstTerm = factorial(6 * k).times(multiplier.times(k).plus(constant));
      let secondTerm = factorial(3 * k).times(factorial(k).toPower(3)).times(divisor.toPower(3 * k + 1.5)); // Notice the 3*k+1.5 in the toPower()
      let thirdTerm = minusOne.toPower(k);
      pi = pi.plus(firstTerm.div(secondTerm).times(thirdTerm));
  }

  pi = one.div(pi.times(twelve));
  return pi;
}
});


function hideLoader() {
$('#loader').hide();
}
$(window).ready(hideLoader);
setTimeout(hideLoader, 10 * 1000);