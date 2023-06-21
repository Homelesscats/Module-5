
$(document).ready(function () {


$(".saveBtn").on("click", function () {

  var textArea = $(this).siblings(".description").val().trim();
  var timeSlot = $(this).parent().attr("id");

  localStorage.setItem(timeSlot, textArea);
});




function hourTracker () {
 //Need to pull current hour and time from dayjs:
 var currentHour = dayjs().hour()
console.log(currentHour)
$(".time-block").each(function() {
// Uses parseInt and split on the block's id to get the number part of the string and store it in a variable.
var blockTime = parseInt($(this).attr("id").split("-")[1]);

   if (blockTime < currentHour) {
     $(this).addClass("past");
    } else if (blockTime === currentHour) {

     $(this).removeClass("past");

     $(this).addClass("present");

    } else if (blockTime > currentHour) {
     
      $(this).removeClass("past");

     $(this).removeClass("present");

     $(this).addClass("future");
    
    } else {
       console.log("error")


}

});


}
 
 // Run the hour tracker portion of this app:
 hourTracker();
 // pull local storage using the ID of each block 

$('#hour-09 .description').val(localStorage.getItem('hour-09'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));


function displayTime() {

  var currentTime = dayjs().format("dddd - MM-DD-YY - hh:mm:dd a");
  $("#currentDay").text(currentTime)

}
displayTime()
setInterval(displayTime, 1000)


    

});

