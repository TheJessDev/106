console.log("hi");

var notImportantIcon = "fa-regular fa-star";
var importantIcon = "fa-solid fa-star";
var isImportant = false;
var isVisible = true;

 function toggleImportant() {
     if(isImportant) {
         // change it to Not Important
         isImportant = false;
         $("#formIcon")
             .removeClass(importantIcon)
             .addClass(notImportantIcon);
     }
     else {
         // change it to Important
         isImportant = true;
         $("formIcon")
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


function init(){
    console.log("task manager");

    // hook events
    $("#formIcon").click(toggleImportant);
    $("#toggleView").click(toggleView);

    // load data
}

window.onload = init;

