// GIVEN I am using a daily planner to create a schedule

// 1. WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// 2. WHEN I scroll down
// THEN I am presented with time blocks for standard business hours

// 3. WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future

// WHEN I click into a time block
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
    if(id < currentTime){
        $(".textBox").addClass("past-time");
    }
};

