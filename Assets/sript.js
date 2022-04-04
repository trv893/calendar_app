// variable for current hour
var hour = moment().format("HH");
console.log(hour);
$("#currentDay").text(moment().format("dddd, MMMM Do"));

// var scheduleHtml = 
// '<div class="row ">
// <div class="col-2 hour time-block ">time</div>
// <div class="col-8 past"><textarea name="" id=""></textarea></div>
// <div class="col-2 saveBtn text-center"><button class="btn "><i class="fa-solid fa-floppy-disk fa-3x"></i></div>
// </div>';

for (i=9; i<=17; i++){
    $("#scheduleSection").append('<div class="row ">\
    <div class="col-2 hour time-block ">time</div>\
    <div class="col-8 past"><textarea name="" id=""></textarea></div>\
    <div class="col-2 saveBtn text-center"><button class="btn "><i class="fa-solid fa-floppy-disk fa-3x"></i></div>\
  </div>')
}