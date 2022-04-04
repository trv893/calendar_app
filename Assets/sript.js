/// <reference path="jquery-3.6.0.js" />
// renders current day in jumbotron header
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// appends html for rows representing each working hour
for (i=9; i<=17;i++){
    // creates variable for the 9am start time
    var time = moment().startOf('day').add(i, "hours");
    // var for creating row element
    var rowDiv = $('<div class="row rowCss" id="rowDiv">');
    // var for html for time column + time iterated hourly by for loop
    var timeBlockDiv = $('<div class="col-2 hour time-block">'+time.format("h a")+'</div>');
    // var for html for text area and its container
    var textFieldDiv = $('<div class=" container col-8 rowCss"><textarea class="w-100" name="" id=""></textarea></div>').addClass(getColor(i));
    // var for html for save btn and container including icon
    var saveButtonDiv = $('<div class="col-2 saveBtn text-center"><button class="btn "><i class="fa-solid fa-floppy-disk fa-3x"></i></div>');
    // appends above html variables
    $(rowDiv).append(timeBlockDiv);
    $(rowDiv).append(textFieldDiv);
    $(rowDiv).append(saveButtonDiv);
    $("#scheduleSection").append(rowDiv);
};
// returns past present or future to be used as a class to generate background styling for each text area
function getColor(hour){
    var currentHour = moment().hour();
    if (hour < currentHour){
        return "past";
    };
    if (hour == currentHour){
        return "present";
    };
    if (hour > currentHour){
        return "future";
    }
};

var todos = ["","","","","","","","",""];

// to setup localstorage / global variables (todos)
// sets up the initial display of todos
function init() {
    // JSON.parse will turn a JSON string from storage into my array.
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    // if localstorage has a valid array, we will replace our todos with this stored array
    if (storedTodos !== null) {
      todos = storedTodos;
    }
    // calls the render to show the Todos
    renderTodos();
  };
  
  function storeTodos() {
    // put a JSON string representation of my array into localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  };


  function renderTodos(){
    // renders todos value(e) from local storage onto the correct indexed (i) row
      $("textarea").each(function(i, e){
        $(e).val(todos[i]);
        $(e).parents(".row").find("button").on("click", function(){
            todos[i]=$(e).val();
            storeTodos();
        })
      })
  };
  
  init();