$(function() {
    $('#ethan').hover(function() {
      $('#mepic').attr('src','../images/me-color6.png');
    }, function() {
      // on mouseout, reset the background colour
      $('#mepic').attr('src', '../images/me.png');
    });
  });


  $(function() {
    $('#plang').hover(function() {
      $('.lang').css('color','#d3a445');
      $('.bar').css('color','white');
    }, function() {
      $('.lang').css('color', 'black');
      $('.bar').css('color', 'black');
    });
  });


$(function() {
  $('#psu')
    .css({
    })
    .append(
        $('<p>')
        .text('Field: Computer Science (Undergraduate Bachelors)')
        .css({
            fontSize: '16px',
            color: 'white',
        }))
        .append(
            $('<p>')
            .text('Years: 2019-Present')
            .css({
                fontSize: '16px',
                color: 'white',
            }))
            .append(
                $('<p>')
                .text('Expected Graduation: Spring 2023')
                .css({
                    fontSize: '16px',
                    color: 'white',
                }))
        
  })
  
$(function() {
    $('#lam')
      .css({
      })
      .append(
          $('<p>')
          .text('Job: Lead Engineering Technician')
          .css({
              fontSize: '16px',
              color: 'white',
          }))
          .append(
              $('<p>')
              .text('Department: Pilot Development and Manufactuing')
              .css({
                  fontSize: '16px',
                  color: 'white',
              }))
              .append(
                  $('<p>')
                  .text('Years: 2018-Present')
                  .css({
                      fontSize: '16px',
                      color: 'white',
                  }))
                  .append(
                    $('<p>')
                    .text('Skills: Team Management | Excel | Root Cause Analysis | Quality Inspections | Networking | Electrical and Mechanical Troubleshooting')
                    .css({
                        fontSize: '16px',
                        color: 'white',
                    }))
          
    })


  $(function() {
    $('#navy')
      .css({
      })
      .append(
          $('<p>')
          .text('Rate: Engineering Laboratory Technician (Nuclear) | Workcenter Supervisor')
          .css({
              fontSize: '16px',
              color: 'white',
          }))
          .append(
              $('<p>')
              .text('Boat: USS Oklahoma City (Fast Attack Submarine)')
              .css({
                  fontSize: '16px',
                  color: 'white',
              }))
              .append(
                  $('<p>')
                  .text('Years: 2010-2016')
                  .css({
                      fontSize: '16px',
                      color: 'white',
                  }))
                  .append(
                    $('<p>')
                    .text('Skills: Critical Maintenance Planning | Data Analysis | Water Chemistry Analysis | Radiation Controls | Mechanical and Electrical System Operations and Maintenance')
                    .css({
                        fontSize: '16px',
                        color: 'white',
                    }))
          
    })