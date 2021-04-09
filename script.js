//Display current day
var today = moment().format('MMMM Do, YYYY');
$('#currentDay').text(today);
console.log('now');

//Colorcode timeblocks to indicate past, present, or future
// if past a certain Time, change color?

//Enable entering an event upon clicking timeblock
var textArea = document.querySelectorAll('.textArea');
$('textArea').attr('enabled', 'enabled');

//Save button saves to local storage

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

// event.target 
// .attr("data-hour")

function renderLocalStorage(){
    $('#9AM .textArea').val(localStorage.getItem('9AM'));
}

$('.saveBtn').on('click', function(){
    var savedContent9 = $('#9task').val();
    console.log(savedContent9);
    localStorage.setItem('9AM', savedContent9);
});

// renderLocalStorage();


// loop for setting color based on time

// var list = $('#tableBody').children()

// for (i=0; i < list.length; i++) {
//     if (
//     $("#tableBody").children().eq(i).children().eq(0).attr("data-hour") < hour) {
//         $("#tableBody").children().eq(i).children().eq(1).addClass("past")
//         $("#tableBody").children().eq(i).children().eq(1).removeClass("future")
//     } else if (
//     $("#tableBody").children().eq(i).children().eq(0).attr("data-hour") > hour) {
//         $("#tableBody").children().eq(i).children().eq(1).addClass("future")
//     } else {
//         $("#tableBody").children().eq(i).children().eq(1).addClass("present")
//     }
function getHour(){
$('.row2').each(function() {
    var hour = moment().hours();
    var myHour = parseInt($(".hour").attr("data-hour"));
if (myHour < hour) {
        $(this).addClass("past")
        console.log('hour');
        // $(this).children().removeClass("future")
        // $(this).children().removeClass("present")
    } else if (myHour === hour) {
        console.log('hour');
        $(this).addClass("present")
        $(this).removeClass("past")
        // $(this).children().removeClass("present")
    } else {
        console.log('hour');
        $(this).addClass("future")
        // $(this).children().removeClass("future")
        $(this).removeClass("past")
    }
})
}
