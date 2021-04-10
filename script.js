var today = moment().format('MMMM Do, YYYY');
$('#currentDay').text(today);
console.log('now');

var textArea = document.querySelectorAll('.textArea');
$('textArea').attr('enabled', 'enabled');

renderLocalStorage();
getHour();

var savedContent9 = $('#9task').val();
var savedContent10 = $('#10task').val();
var savedContent11 = $('#11task').val();
var savedContent12 = $('#12task').val();
var savedContent13 = $('#13task').val();
var savedContent14 = $('#14task').val();
var savedContent15 = $('#15task').val();
var savedContent16 = $('#16task').val();
var savedContent17 = $('#17task').val();

function renderLocalStorage(){
    $('#9AM .textArea').val(localStorage.getItem('9AM'));
    $('#10AM .textArea').val(localStorage.getItem('10AM'));
    $('#11AM .textArea').val(localStorage.getItem('11AM'));
    $('#12PM .textArea').val(localStorage.getItem('12PM'));
    $('#1PM .textArea').val(localStorage.getItem('1PM'));
    $('#2PM .textArea').val(localStorage.getItem('2PM'));
    $('#3PM .textArea').val(localStorage.getItem('3PM'));
    $('#4PM .textArea').val(localStorage.getItem('4PM'));
    $('#5PM .textArea').val(localStorage.getItem('5PM'));
}


$('.saveBtn').on('click', function(){
    var savedContent9 = $('#9task').val();
    console.log(savedContent9);
    localStorage.setItem('9AM', savedContent9);
});

$('.saveBtn').on('click', function(){
    var savedContent10 = $('#10task').val();
    console.log(savedContent10);
    localStorage.setItem('10AM', savedContent10);
});

$('.saveBtn').on('click', function(){
    var savedContent11 = $('#11task').val();
    console.log(savedContent11);
    localStorage.setItem('11AM', savedContent11);
});

$('.saveBtn').on('click', function(){
    var savedContent12 = $('#12task').val();
    console.log(savedContent12);
    localStorage.setItem('12PM', savedContent12);
});

$('.saveBtn').on('click', function(){
    var savedContent13 = $('#13task').val();
    console.log(savedContent13);
    localStorage.setItem('1PM', savedContent13);
});

$('.saveBtn').on('click', function(){
    var savedContent14 = $('#14task').val();
    console.log(savedContent14);
    localStorage.setItem('2PM', savedContent14);
});

$('.saveBtn').on('click', function(){
    var savedContent15 = $('#15task').val();
    console.log(savedContent15);
    localStorage.setItem('3PM', savedContent15);
});

$('.saveBtn').on('click', function(){
    var savedContent16 = $('#16task').val();
    console.log(savedContent16);
    localStorage.setItem('4PM', savedContent16);
});

$('.saveBtn').on('click', function(){
    var savedContent17 = $('#17task').val();
    console.log(savedContent17);
    localStorage.setItem('5PM', savedContent17);
});

function getHour(){
$('.row2').each(function () {
  var hour = moment().hours();
  var myHour = parseInt($(this).attr('data-hour'));
  console.log(myHour);
  console.log(hour);
  if (myHour < hour) {
    $(this).addClass('past');
    console.log('hour');
  } else if (myHour === hour) {
    $(this).addClass('present');
    $(this).removeClass('past');
  } else {
    $(this).addClass('future');
    $(this).removeClass('present');
    $(this).removeClass('past');
  }
})
}; 