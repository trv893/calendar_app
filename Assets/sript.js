
// renders current day in jumbotron header
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// appends html for rows representing each working hour
for (i=9; i<=17;i++){
    // variable for index of row
    var index = i - 9;
    // creates variable for the 9am start time
    var time = moment().startOf('day').add(i, "hours");
    // var for creating row element
    var rowDiv = $(`<div class="row rowCss" id="hour${i}" data-i="${index}">`);
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

// list of user inputs generated on btn click below
var todos = [];

// to setup localstorage / global variables (todos)
// sets up the initial display of todos
function init() {
    // JSON.parse will turn a JSON string from storage into my array.
    var storedTodos = JSON.parse(localStorage.getItem("todos"));
    // if localstorage has a valid array, we will replace our todos with this stored array
    if (storedTodos !== null) {
      todos = storedTodos;
    }
    // calls the render function to display content in local storage
    renderTodos();
  };
  
  function storeTodos() {
    // put a JSON string representation of array todos into localstorage
    localStorage.setItem("todos", JSON.stringify(todos));
  };

// renders content from local storage in html
  function renderTodos(i){
    // renders todos value(e) from local storage onto the correct indexed (i) row
      $("textarea").each(function(i, e){
        $(e).val(todos[i]);
      })
  };
  
init();



$("main").on("click",".saveBtn",  function(event){
  event.preventDefault();
  // selects value of user input in text area
  var val = $(event.currentTarget).parent().find("textarea").val();
  // selects that data-i attr value from parent row of save btn for indexing in todo list
  var todoIndex = ($(event.currentTarget).parent().attr("data-i"));
  // updates todos list with current value 
  todos[todoIndex] = val;
  // console.log(todos)
  storeTodos();
  // storeTodos
});