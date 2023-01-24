var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        });
    }

    // Get item from local storage if any
    $("#nineAm .description").val(localStorage.getItem("nineAm"));
    $("#tenAm .description").val(localStorage.getItem("tenAm"));
    $("#elevenAm .description").val(localStorage.getItem("elevenAm"));
    $("#twelvePm .description").val(localStorage.getItem("twelvePm"));
    $("#thirTeen .description").val(localStorage.getItem("thirTeen"));
    $("#fourteen .description").val(localStorage.getItem("fourteen"));
    $("#fifteen .description").val(localStorage.getItem("fifteen"));
    $("#sixteen .description").val(localStorage.getItem("sixteen"));
    $("#seventeen .description").val(localStorage.getItem("seventeen"));

    timeTracker();
});



