$().ready(function todaysDate(){
    let currentDay = $("#currentDay");
    currentDay.text(moment().format("MMM Do, YYYY"));
});







let saveBtns = $("button")

saveBtns.on('click', function(event){
// console.log(event.target.previousSibling.previousSibling);

        var id = $(this).siblings("input").attr("id");
        var value = $(this).siblings("input").val();
       localStorage.setItem(id, value);
       return console.log(id, value)

    });   

 
$("form-control").ready(function(event){
        // pulling events from local storage
        
        var id = $(this).siblings("input").attr("id");
        var savedEvent = localStorage.getItem(id)
        $(this).val(savedEvent);
        
    });   
        



