$(function () {
  // establishing variable for current day/time
  var now = dayjs();
  // establishing variable specifying all time blocks
  var timeBlockEl = $('.time-block');
  // initializing element for save button
  var saveBtn = $('.saveBtn');

  // when button is clicked
  saveBtn.on("click", function() {
    // take the parent div element as a key and save user input as the value in local storage
    localStorage.setItem($(this).parent().attr("id"), $(this).parent().children('textarea').val());
  })

  // getting number variable for the current hour
  var currentHour = now.format('H');
  // variable to test if the hour has passed yet (initially set to false)
  var passedHour = false;

  $(timeBlockEl).each(function() {
    if (("hour-" + currentHour) === $(this).attr("id")) {
      console.log("present");
      $(this).addClass("present");
      passedHour = true;
    } else if (passedHour) {
      console.log("future");
      $(this).addClass("future");
    } else if (!passedHour) {
      console.log("present");
      $(this).addClass("past");
    }
  })

  // setting the text area based on what is stored in the local storage for all time blocks
  $('#hour-8 textarea').val(localStorage.getItem('hour-8'));
  $('#hour-9 textarea').val(localStorage.getItem('hour-9'));
  $('#hour-10 textarea').val(localStorage.getItem('hour-10'));
  $('#hour-11 textarea').val(localStorage.getItem('hour-11'));
  $('#hour-12 textarea').val(localStorage.getItem('hour-12'));
  $('#hour-13 textarea').val(localStorage.getItem('hour-13'));
  $('#hour-14 textarea').val(localStorage.getItem('hour-14'));
  $('#hour-15 textarea').val(localStorage.getItem('hour-15'));
  $('#hour-16 textarea').val(localStorage.getItem('hour-16'));
  $('#hour-17 textarea').val(localStorage.getItem('hour-17'));
  $('#hour-18 textarea').val(localStorage.getItem('hour-18'));
  $('#hour-19 textarea').val(localStorage.getItem('hour-19'));
  $('#hour-20 textarea').val(localStorage.getItem('hour-20'));

  // displaying the current date
  $('#currentDay').text(now.format('MMMM D, YYYY'));
});
