let savebtn9am = document.getElementById("save9")

savebtn9am.addEventListener('click', function(){

   document.getElementById("Nine")   
        var id = $(this).attr('Nine');
        var value = $(this).val();
       localStorage.setItem(id, value);
       return console.log("Saved")

    });   
