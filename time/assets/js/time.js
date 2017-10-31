$(document).ready(function() {

// Global Vars
  var oddSecond = ' ';
  var oddMinute = ' ';
  var halfSecond = ' ';
  var halfMinute = ' ';
  var oddDay = ' ';
  var evenDay = ' ';
  var oddY = ' ';
  var evenY = ' ';
  // var monthNum = moment().format('M');

// Update time
  function update() {
    var quarter = moment().quarter();
    var momentSecond = moment().second();
    var momentMinute = moment().minute();
    var momentHour= moment().format('h').toLowerCase();
    var momentDate = moment().format('D').toLowerCase();
    var momentDay = moment().format('dddd').toLowerCase();
    var momentMonth = moment().format('MMMM').toLowerCase();
    var momentYear = moment().format('YYYY').toLowerCase();
    var momentAMPM = moment().format('A').toLowerCase();

    function oddOrEvenS(momentSecond){
      if(momentSecond % 2 === 0) {oddSecond = 'oddS';}
      else {oddSecond = 'evenS';}
    }

    function oddOrEvenM(momentMinute){
      if(momentMinute % 2 === 0) {oddMinute = 'evenM';}
      else {oddMinute = 'oddM';}
    }

    function checkHalfSecond(momentSecond){
      if(momentSecond < 30) {halfSecond = 'halfM';}
      else {halfSecond = 'fullM';}
    }

    function checkHalfMinute(momentMinute){
      if(momentMinute < 15) {halfMinute = 'quarterH';}
      else if(momentMinute < 30){halfMinute = 'halfH';}
      else if(momentMinute < 45){halfMinute = 'threequarterH';}
      else {halfMinute = 'fullH';}
    }

    function oddOrEvenD(momentDate) {
      if(momentDate % 2 === 0) {oddDay = 'evenD';}
      else {oddDay = 'oddD';}
    }

    function oddOrEvenYear(momentYear) {
      if(momentYear % 2 === 0) {oddYear = 'evenY';}
      else {oddYear = 'oddY';}
    }

    // Check if odd, even, quaterpast
    oddOrEvenS(momentSecond);
    checkHalfSecond(momentSecond);
    oddOrEvenM(momentMinute);
    checkHalfMinute(momentMinute);
    oddOrEvenD(momentDate);
    oddOrEvenYear(momentYear);

    var timeAll = ['s' + momentSecond, 'm' + momentMinute, 'h' + momentHour, momentAMPM, momentDay, momentMonth, 'y' + momentYear, oddSecond, oddMinute, halfSecond, halfMinute, oddDay, oddYear];
    var timeClass = timeAll.join(' ');

    // Add classes
    $('body').attr('class', timeClass);

    // Add forma_t
    // $('.time').html_(moment().format('dddd D MMMM YYYY <br> h:mm:ss:SS A'));
    $('.time_A').html(moment().format('A'));
    $('.time_ss').html(moment().format('ss'));
    $('.time_mm').html(moment().format('mm'));
    $('.time_h').html(moment().format('h'));
    $('.time_YYYY').html(moment().format('YYYY'));
    $('.time_MMMM').html(moment().format('MMMM'));
    $('.time_D').html(moment().format('D'));
  };

  var intervalId = setInterval(update, 100);
  intervalId

// Add pause
  $('button#pause').click(function(){
    clearInterval(intervalId);
    $('textarea#timeClasses').show();
  });

});
