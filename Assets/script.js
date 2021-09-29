let saveBtns = $("button")

saveBtns.on('click', function(event){
// console.log(event.target.previousSibling.previousSibling);
   // document.getElementById("Nine")   
        var id = $(this).siblings("input").attr("id");
        var value = $(this).siblings("input").val();
       localStorage.setItem(id, value);
       return console.log(id, value)

    });   
