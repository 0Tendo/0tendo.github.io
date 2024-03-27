
function generateColorLegend(backgroundColors) {
  let legendHtml = '<div class="color-legend">';
  backgroundColors.forEach((color, index) => {
      // Place the number in a separate div above the color box
      legendHtml += `<div class="color-item"><div class="number">${index}</div><div class="color-box" style="background-color: ${color};"></div></div>`;
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
  $('#calculate1').on('click', function() {
    let pi = 4;
    let i = 0;
    let stabilityBuffer = {}; // Track stability for each digit
    let intervalId = setInterval(function() {
        let denom = i * 2 + 3;
        if (i % 2 == 0) {
            pi -= (4 / denom);
        } else {
            pi += (4 / denom);
        }
        
        // Convert Pi to string and process each digit for stability
        let piString = pi.toString();
        let displayHtml = "";
        for (let j = 0; j < piString.length; j++) {
            let digit = piString[j];
            
            // Initialize stability tracking
            if (!stabilityBuffer[j]) stabilityBuffer[j] = { value: digit, count: 1 };
            else if (stabilityBuffer[j].value === digit) stabilityBuffer[j].count++;
            else stabilityBuffer[j] = { value: digit, count: 1 };
            
            let colorStyle = '';
            if (stabilityBuffer[j].count >= 10) {
                colorStyle = ` style="color: ${backgroundColors[parseInt(digit)]};"`;
            }
            
            displayHtml += `<span${colorStyle}>${digit}</span>`;
        }
        
        $('#result1').html(displayHtml);
        
        i++;
        if (i == 1000) {
            clearInterval(intervalId);
        }
    }, 100);
});
  
$('#calculate2').on('click', function() {
  let pi = 3;
  let i = 0;
  let stabilityBuffer = {}; // Track stability for each digit
  let intervalId = setInterval(function() {
      let sign = (i % 2 === 0) ? 1 : -1;
      let denom = 2 * i + 2;
      pi += sign * 4 / (denom * (denom + 1) * (denom + 2));
      
      // Convert Pi to string and process each digit for stability
      let piString = pi.toString();
      let displayHtml = "";
      for (let j = 0; j < piString.length; j++) {
          let digit = piString[j];
          
          // Initialize stability tracking
          if (!stabilityBuffer[j]) stabilityBuffer[j] = { value: digit, count: 1 };
          else if (stabilityBuffer[j].value === digit) stabilityBuffer[j].count++;
          else stabilityBuffer[j] = { value: digit, count: 1 };
          
          let colorStyle = '';
          if (stabilityBuffer[j].count >= 10) {
              colorStyle = ` style="color: ${backgroundColors[parseInt(digit)]};"`;
          }
          
          displayHtml += `<span${colorStyle}>${digit}</span>`;
      }
      
      $('#result2').html(displayHtml);
      
      i++;
      if (i >= 1000) {
          clearInterval(intervalId);
      }
  }, 100);
});

$(document).ready(function (){
  let digitOccurrences = Array(10).fill(0);

  // Initialize the pie chart
  Chart.register(ChartDataLabels);
  let ctx = document.getElementById('piChart').getContext('2d');
  let piChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        datasets: [{
            label: 'Digit Occurrences',
            data: digitOccurrences,
            backgroundColor: backgroundColors, // Ensure this matches the colors you want
            borderColor: 'rgba(255, 255, 255, 1)', // Example border color
            borderWidth: 1
        }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Digit Frequency - Pi', // This text will appear above your chart
          padding: {
            top: 10,
            bottom: 30
          },
          font: {
            size: 14
          },
          color: '#ffffff' // Adjust the color to fit your design
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'white',
        },
      },
        datalabels: {
          color: '#fff',
          anchor: 'end',
          align: 'start',
          offset: -10,
          font: {
              weight: 'bold',
              size: 16,
          },
          formatter: (value, ctx) => {
              return ctx.chart.data.labels[ctx.dataIndex] + ': ' + value;
          },
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });

$('#calculate3').on('click', function() {
  // Retrieve desired accuracy from the user input
  let desiredAccuracyLevel = parseInt($('#iterations3').val(), 10);
  if (isNaN(desiredAccuracyLevel) || desiredAccuracyLevel <= 0) {
      alert("Please enter a valid number for accuracy level.");
      return;
  }

  // Set Decimal precision dynamically based on the input
  Decimal.set({ precision: Math.ceil(desiredAccuracyLevel * 1.2) });

  let sum = new Decimal(0);
  let i = 0;
  let stabilityBuffer = []; // Initialize the stabilityBuffer here
  let totalDigitsCalculated = 0;
  let digitOccurrences = Array(10).fill(0); // Reset digit occurrences for a new calculation

  let intervalId = setInterval(function() {
      sum = sum.plus(calculatePiChudnovskySingleIteration(i));
      let pi = new Decimal(426880).times(new Decimal(10005).sqrt()).div(sum);
      let piString = pi.toString();

      let displayHtml = "";
      for (let j = 0; j < piString.length; j++) {
          let digit = parseInt(piString[j], 10);
          if (!isNaN(digit)) {
              if (stabilityBuffer[j] === undefined) {
                  stabilityBuffer[j] = { digit: piString[j], count: 1, stable: false, counted: false };
              } else if (stabilityBuffer[j].digit === piString[j]) {
                  stabilityBuffer[j].count++;
                  if (stabilityBuffer[j].count > 10 && !stabilityBuffer[j].counted) {
                      stabilityBuffer[j].stable = true;
                      digitOccurrences[digit]++;
                      stabilityBuffer[j].counted = true;
                      totalDigitsCalculated++;
                  }
              } else {
                  stabilityBuffer[j] = { digit: piString[j], count: 1, stable: false, counted: false };
              }

              let style = stabilityBuffer[j].stable ? ` style="color: ${backgroundColors[digit]};"` : '';
              displayHtml += `<span${style}>${piString[j]}</span>`;
          }
      }

      $('#result3').html(displayHtml);
      piChart.data.datasets[0].data = digitOccurrences;
      piChart.update();

      $('#totalDigitsCalculated').html(`Total Digits Calculated: ${totalDigitsCalculated}`);

      if (totalDigitsCalculated >= desiredAccuracyLevel) {
          clearInterval(intervalId);
      }

      i++;
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
