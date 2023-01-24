//setting the currentday
var currentDay = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(currentDay);
// save button click function/event listener
$(".saveBtn").on("click", function () {
  var userInput = $(this).siblings(".description").val();
  var timeBlock = $(this).parent().attr("id");

  // Save items in the local storage
  localStorage.setItem(timeBlock, userInput);
});

function timeTracker() {
  //get current  time.
  var currentTime = moment().hour();

  // loop over the time blocks and check the time to add the classes for background colors
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

// Get the items from the local storage if they are saved
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//call time tracker function
timeTracker();
