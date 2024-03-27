
function generateColorLegend(backgroundColors) {
  let legendHtml = '<div class="color-legend">';
  backgroundColors.forEach((color, index) => {
      legendHtml += `<div class="color-item" style="background-color: ${color};">${index}</div>`;
  });
  legendHtml += '</div>';
  return legendHtml;
}

$(document).ready(function (){
  let backgroundColors = [
    'rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)',
    'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)',
    'rgba(153, 102, 255, 0.8)', 'rgba(255, 159, 64, 0.8)',
    'rgba(199, 199, 199, 0.8)', 'rgba(83, 102, 255, 0.8)',
    'rgba(40, 159, 64, 0.8)', 'rgba(255,99,132,0.8)'
  ];

  // Call generateColorLegend function and insert the HTML
  let colorLegendHtml = generateColorLegend(backgroundColors);
  $('#colorLegend').html(colorLegendHtml);

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

$(document).ready(function (){
  let digitOccurrences = Array(10).fill(0);

  // Initialize the pie chart
  let ctx = document.getElementById('piChart').getContext('2d');
  let piChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
          datasets: [{
              label: 'Digit Occurrences',
              data: digitOccurrences,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)',
                  'rgba(199, 199, 199, 0.2)', 'rgba(83, 102, 255, 0.2)',
                  'rgba(40, 159, 64, 0.2)', 'rgba(255,99,132,0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)',
                  'rgba(199, 199, 199, 1)', 'rgba(83, 102, 255, 1)',
                  'rgba(40, 159, 64, 1)', 'rgba(255,99,132,1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          maintainAspectRatio: false,
      }
  });

  $('#calculate3').on('click', function(){
      let iterations = $('#iterations3').val();
      let sum = new Decimal(0);
      let i = 0;
      let previousPi = ""; // Store the previous pi value for comparison
      let stabilityBuffer = []; // Initialize the stability buffer
      digitOccurrences.fill(0); // Reset digit occurrences for a new calculation

      let intervalId = setInterval(function() {
        if(i < iterations) {
            sum = sum.plus(calculatePiChudnovskySingleIteration(i));
            let pi = new Decimal(426880).times(new Decimal(10005).sqrt()).div(sum);
            let piString = pi.toString();
    
            // Update and generate HTML with stability check
            let displayHtml = "";
            for (let j = 0; j < piString.length; j++) {
                if (stabilityBuffer[j] === undefined) {
                    // Initialize buffer entry with counted flag
                    stabilityBuffer[j] = {digit: piString[j], count: 1, counted: false};
                } else if (stabilityBuffer[j].digit === piString[j]) {
                    stabilityBuffer[j].count++; // Increment count if digit is unchanged
                } else {
                    // Reset if digit has changed and reinitialize counted flag
                    stabilityBuffer[j] = {digit: piString[j], count: 1, counted: false};
                }
    
                let colorStyle = '';
                if (stabilityBuffer[j].count > 5 && !stabilityBuffer[j].counted) { // Threshold for stability
                    let digit = parseInt(piString[j], 10);
                    if (!isNaN(digit)) { // Ensure it's a digit
                        colorStyle = ` style="color: ${backgroundColors[digit]};"`;
                        if (!stabilityBuffer[j].counted) {
                            digitOccurrences[digit]++;
                            stabilityBuffer[j].counted = true; // Mark as counted to prevent recounting
                        }
                    }
                }
                displayHtml += `<span${colorStyle}>${piString[j]}</span>`;
            }
    
            $('#result3').html(displayHtml);
            // Update pie chart
            piChart.data.datasets[0].data = digitOccurrences;
            piChart.update();
    
            previousPi = piString; // Update the previous pi value for the next iteration
            i++;
        } else {
            clearInterval(intervalId);
        }
    }, 100);
  });
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
