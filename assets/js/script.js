// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var times = ["hour-9", "hour-10", "hour-11", "hour-12", "hour 13", "hour-14", "hour-15", "hour-16", "hour-17"];
  // establishing variable for current day/time
  var now = dayjs();
  // establishing variable returning to all time blocks
  var timeBlockEl = $('.container-fluid px-5').children();
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // assigning variable to save button
  var saveBtn = $('.saveBtn');
  // when button is clicked
  saveBtn.on("click", function() {
    // take the parent div element as a key and save user input as the value in local storage
    // console.log($(this).parent().attr("id"));
    // console.log($(this).parent().children('textarea').val());
    localStorage.setItem($(this).parent().attr("id"), $(this).parent().children('textarea').val());
  })

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    // compare the Unix timestamps
  var currentHour = "hour-" + now.format('H');
  console.log(currentHour);
  // console.log(currentTimeStamp);
  // for each time block
    // calculate the unix timestamp
    // if timestamp happened before
      // apply past class
    // else if timestamp is current
      // apply present class
    // else (if timestamp has not yet passed)
      // apply future class
  // for each time block

  // $.each(timeBlockEl, function() {
  //   //
  // })

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  // for each time-block element (with time-block class)
    // time-block.children('textarea').text(localStorage.getItem($(this).id))

  $.each(timeBlockEl, function() {
    console.log("hello");
    console.log($(this).attr("id"));
    console.log(localStorage.getItem($(this).attr("id")));
    $(this).children('textarea').val() = "hello";
  })

  for (var i = 0; i < times.length; i++) {
    var currentBlock = $('.container-fluid').eq(i);
    console.log(currentBlock);
    console.log(localStorage.getItem(currentBlock.attr("id")));
    currentBlock.children('textarea').val = localStorage.getItem(currentBlock.attr("id"));
  }

  //
  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(now.format('MMMM D, YYYY'));
});
