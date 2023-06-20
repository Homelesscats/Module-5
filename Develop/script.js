// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
// Listens for click events on any elements with class ".saveBtn".
$(".saveBtn").on("click", function () {
  // Selects the sibling element using 'this' with class "description" of the current element textarea. 
  // Gets the input value of that element and trims it, and stores it in a variable.
  let textArea = $(this).siblings(".description").val().trim();
  let timeSlot = $(this).parent().attr("id");

  localStorage.setItem(timeSlot, textArea);
});





});




function hourTracker () {
 //Need to pull current hour and time from dayjs:
 let currentHour = day().hour()
console.log(currentHour)
$(".time-block").each(function() {
// Uses parseInt and split on the block's id to get the number part of the string and store it in a variable.
let blockTime = parseInt($(this).attr("id").split("-")[1]);





}


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.





    

});
