//GET CURRENT TIME
var currentDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);

console.log(typeof currentHour);
//APPEND THE TIME
newDiv = $('#time');
newDiv.text(currentDate);
$('#time').append(newDiv);

//COLOR CHANGE BASED ON TIME OF DAY
var timeContent = $('.time-block');

timeContent.each(function() {
    var currentHour = moment().hours();

    var time = $(this).data('time');
    console.log(time);

    var taskColor = $('#task-' + time);
    //console.log(taskColor);

    var blockHour = parseInt($(this).attr('id').split('-')[1]);
    console.log(blockHour);

    if (blockHour < currentHour) {
        //ADD CLASS ATTR TO PAST TIME
        taskColor.css('back-ground-color','lightcoral');


    }
    else if (blockHour > currentHour){
        //PRESENT TIME
        taskColor.css('background-color','lightseagreen');
    }
    else {
        //FUTURE TIME
        taskColor.css("background-color","lightslategray");
    }
});

//BUTTONS
var saveButtons = $('.saveBtn');
tasks = {

}

var storedTasks = JSON.parse(localStorage.getItem('tasks'));
console.log(storedTasks);

if(storedTasks){
    tasks = storedTasks
}
else {
    {}
}
console.log(tasks);

saveButtons.each(function(){
    //
    var myClickedButton = $(this).data('hour');

    var taskInput = $('#task-' + myClickedButton);

    taskInput.val(tasks ['task' + myClickedButton]);
})

//SAVE BUTTON CLICKS
saveButtons.on('click',function(){
    alert('Saved');



//
var myClickedButton = $(this).data('hour');

var taskInput = $('#task-' + myClickedButton);

console.log(taskInput.val());

var taskValue = taskInput.val();

tasks ['task' + myClickedButton] = taskValue;

JSON.stringify(tasks);
localStorage.setItem('tasks', JSON.stringify(tasks));

});