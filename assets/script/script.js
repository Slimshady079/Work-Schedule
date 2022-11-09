
$(document).ready(function () {
  
  var time = [
    $("#9").attr("id"),
    $("#10").attr("id"),
    $("#11").attr("id"),
    $("#12").attr("id"),
    $("#13").attr("id"),
    $("#14").attr("id"),
    $("#15").attr("id"),
    $("#16").attr("id"),
    $("#17").attr("id"),
  ];

  var timeContainer = [
    $("#9"),
    $("#10"),
    $("#11"),
    $("#12"),
    $("#13"),
    $("#14"),
    $("#15"),
    $("#16"),
    $("#17"),
  ];
  var today = dayjs().format('dddd MMMM d');
  var currentTime = dayjs().hour();
  console.log(currentTime);

  $("#currentDay").text(today);


$("button").click(function () {
  var textInput = $(this).siblings("textarea").val();
  var hour = $(this).parent().attr("id");
  localStorage.setItem(hour, textInput);
  //console.log("test");
})
// currentTime = 9;

for (i = 0; i < time.length; i++) {
  if (time[i] == currentTime) {
    $(timeContainer[i]).addClass("present");
    console.log('test1');
  } else if (time[i] > currentTime) {
    $(timeContainer[i]).addClass("future");
    console.log('test2');
  } else {
    $(timeContainer[i]).addClass("past");
    console.log('test3');
  }
}

for (let i = 0; i <time.length; i++) {
  $(timeContainer[i]).children().eq(1).val(localStorage.getItem(time[i]));
}

$("#currentDay").text(today);
})

