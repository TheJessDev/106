console.log("hi");

// initial states of the variable (ie regular or solid, false or true)
var notImportantIcon = "fa-regular fa-star";
var importantIcon = "fa-solid fa-star";
var isImportant = false;  // starting with non important
var isVisible = true;

function toggleImportant() {
     if(isImportant) {
         // change it to Not Important
         isImportant = false;
         $("#formIcon")  // single line instruction
             .removeClass(importantIcon)
             .addClass(notImportantIcon);
     }
     else {
         // change it to Important
         isImportant = true;
         $("#formIcon")
             .removeClass(notImportantIcon)
             .addClass(importantIcon);
     }
}

function toggleView() {
    if(isVisible) {
        // hide it
        isVisible = false;
        $("#form").hide();
    }
    else {
        isVisible = true;
        $("#form").show();
    }
}

function saveTask(){
    console.log("Save");
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val();
    let dueDate = $("#selDate").val();
    let category = $("#selCategory").val();
    let priority = $("#selPriority").val();
    let color = $("#selColor").val();
    console.log(title, desc, dueDate, category, priority, color);

    let task = new Task(isImportant, title, desc, dueDate, category, priority, color);

    console.log(task);

    // ajax logic goes here
    // try to POST the response to the server
    // the server name is http://fsdiapi.azurewebsites.net/api/task/

    
    // $.ajax({
    //     type: "POST",
    //     url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    //     data: JSON.stringify(task),  // <----- only used for POST
    //     contentType: "application/jason",  // <----- only used for POST
    //     success: function (response) { //respone in the JSON string
    //         console.log(response);
    //         displayTask(task);

    //     },
    //     error: function (error) {
    //         console.log(error);

    //     }
    // })
    

   displayTask(task);  // **!!comment this line when connecting to server. called on line 64!!**

   // clear form
   toggleImportant(false);
   $("input").val("");
   $("textarea").val("");
   $("select").val("");
}


function displayTask(task){
let icon = "";
if(task.isImportant){
    icon = `<i class='${importantIcon}'></i>`;
}
else{
    icon = `<i class='${notImportantIcon}'></i>`;
}


let syntax = `<div class='task' style="border:3px solid ${task.color}">
    
        ${icon}
    
    <div class='info'>
        <h4>${task.title}</h4>
        <p>${task.desc}</p>
    </div>

    <label class='category'>${task.category}</label>

    <div class='details'>
        <label>${task.priority}</label>
        <label>${task.dueDate}</label>
    </div>
    </div>`;

$("#pending-task").append(syntax);
}

// fetch
// function testRequest(){
//     $.ajax({
//         type: "delete",
//         url: "http://fsdiapi.azurewebsites.net/",
//         success: function (response) {
//             console.log(response);

//         },
//         error: function (error) {
//             console.log(error);

//         }
//     });
// }

// function loadTasks() {
//     $.ajax({
//         type: "GET",
//         url: "http://fsdiapi.azurewebsites.net/api/tasks",
//         success: function (response) { //respone in the JSON string
//             let data = JSON.parse(response);
//             console.log(response);
//             console.log(data);
//             displayTask(task);
//         },
//         error: function (error) {
//             console.log(error);

//             alert("Unexpected error");
//         }
//     })
// };

function init(){
    //console.log("task manager");

    // hook events
    $("#formIcon").click(toggleImportant);
    $("#toggleView").click(toggleView);
    $("#btnSave").click(saveTask);

    // load data
    //loadTasks();
}

window.onload = init;

