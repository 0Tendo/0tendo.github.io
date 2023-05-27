$(function() {
    $('#ethan').hover(function() {
      $('#mepic').attr('src','../images/me-color6.png');
    }, function() {
      // on mouseout, reset the background colour
      $('#mepic').attr('src', '../images/me.png');
    });
  });


  /*
  $(function() {
    $('#plang').hover(function() {
      $('.lang').css('color','#d3a445');
      $('.bar').css('color','#C0C0C0');
    }, function() {
      $('.lang').css('color', '#C0C0C0');
      $('.bar').css('color', '#C0C0C0');
    });
  });
  */


  $(function() {
    $('#psu').click(function() {
        $(this).find('p').toggle();
    }).append(
        $('<p>').text('2019-Present').css({fontSize: '18px', color: 'black'}),
        $('<p>').text('Computer Science (B.S)').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').text('Expected Graduation: December 2023').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('AI <span class="bar">|</span> Machine Learning <span class="bar">|</span> Networking <span class="bar">|</span> Databases').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('Python <span class="bar">|</span> C/C++ <span class="bar">|</span> HTML/CSS/JS <span class="bar">|</span> Typescipt <span class="bar">|</span> SQL <span class="bar">|</span> VBA <span class="bar">|</span> Latex').css({fontSize: '18px', color: '#C0C0C0'})
    );

    $('#lam').click(function() {
        $(this).find('p').toggle();
    }).append(
        $('<p>').text('2018-Present').css({fontSize: '18px', color: 'black'}),
        $('<p>').text('Lead Engineering Technician').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').text('Department: Pilot Manufactuing').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('Quality Inspections <span class="bar">|</span> Electrical & Mechanical Troubleshooting').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('Communication <span class="bar">|</span> Team Management <span class="bar">|</span> Excel <span class="bar">|</span> Quickbase <span class="bar">|</span> Root Cause Analysis ').css({fontSize: '18px', color: '#C0C0C0'})
    );

    $('#navy').click(function() {
        $(this).find('p').toggle();
    }).append(
        $('<p>').text('2010-2016').css({fontSize: '18px', color: 'black'}),
        $('<p>').text('US Navy Nuke').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').text('Engineering Laboratory Technician').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('Radiation Safety <span class="bar">|</span> Reactor Operation <span class="bar">|</span> Water Chemistry Analysis <span class="bar">|</span> Work Center Supervisor').css({fontSize: '18px', color: '#C0C0C0'}),
        $('<p>').html('Teamwork <span class="bar">|</span> Leadership <span class="bar">|</span> Data Analysis <span class="bar">|</span> Nuclear Chemistry and Physics <span class="bar">|</span> Lab Skills').css({fontSize: '18px', color: '#C0C0C0'})
    );
});
