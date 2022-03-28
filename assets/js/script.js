// GIVEN I am using a daily planner to create a schedule

// 1. WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// 2. WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// 3. WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// 4. WHEN I click into a time block
// THEN I can enter an event

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist


var rightNow = moment().format('MMMM Do YYYY');
console.log(rightNow);

var currentTime = parseInt(moment().format("H"));
    console.log(currentTime);

$("#currentDay").append(rightNow);

// 2. create divs for each time block from 9 - 5. create them as rows with children elements to add the actual tasks too.

// 3. make past, present, and future times a different colour

var timeColour = function(){

    // var currentTime = parseInt(moment().format("H"));
    // console.log(currentTime);

    $(".row").each(function() {

        var timeById = parseInt($(this).attr("id"))
        console.log(timeById);

        if(timeById < currentTime){
            $(this).addClass("past-time");
        }
        else if(timeById === currentTime) {
            $(this).addClass("current-time");
        }
        else if(timeById > currentTime) {
            $(this).addClass("future-time");
        }

    })

        // if(timeById < currentTime){
        //     $(".textBox").addClass("past-time");
        // }
};

timeColour();

// 4. enter event into a time block. let'psuedo code

// get the thing you want to click into.

// what are the steps to get you to enter text to the p element

$(".text-box").on("click", "p", function() {
    console.log("clicked");
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
    console.log("also checking this", this);
    // replace p element with a new textarea
    var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
});
// $("p").click(function() {
//     var value = $(this).val();
//     $("p").text( value );
// });

// $("p").click(function() {
//     var p = $("p").val();
//     console.log(p);
// })

// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist

var taskInput = $("p").val
console.log(taskInput);

var saveTask = function(taskInput) {
    console.log(taskInput);
    // get existing highschore list
    var savedTasks = localStorage.getItem("finalTasks");
    savedTasks = JSON.parse(savedTasks);
    if(savedTasks === null) {
        savedTasks = [];
    }
    console.log(savedTasks);
    savedTasks.push(taskInput);
    console.log(savedTasks);

    
    // convert existing highscore string using json.parse
    // create new array with old scores
    // push new scores into array, may need an object somewhere
    // set array and stringify (these comments are to save multiple initials, again for future reference)
    localStorage.setItem("finalTasks", JSON.stringify(savedTasks));

};

