
$("#currentDay").text(moment().format("dddd, MMMM Do"));

for (i=9; i<=17;i++){
    var time = moment().startOf('day').add(i, "hours");
    var rowDiv = $('<div class="row rowCss" id="rowDiv">');
    var timeBlockDiv = $('<div class="col-2 hour time-block">'+time.format("h a")+'</div>');
    var textFieldDiv = $('<div class=" container col-8 rowCss"><textarea class="w-100" name="" id=""></textarea></div>').addClass(getColor(i));
    var saveButtonDiv = $('<div class="col-2 saveBtn text-center"><button class="btn "><i class="fa-solid fa-floppy-disk fa-3x"></i></div>');
    $("#scheduleSection").append(rowDiv);
    $("#rowDiv").append(timeBlockDiv);
    $("#rowDiv").append(textFieldDiv);
    $("#rowDiv").append(saveButtonDiv);
    };

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
