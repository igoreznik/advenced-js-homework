var doc = {
    ready: function(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    } 
};
doc.ready(function() {
    var inputName = document.querySelector('input[name="name"]');
    var inputAge = document.querySelector('input[name="age"]');
    var inputDate = document.querySelector('input[name="date"]');
    var inputColor = document.querySelector('input[name="favcolor"]');
    var saveBtn = document.querySelector('.saveBtn');
    var historyList = document.querySelector('.historyList');
    
    var infoArr = [];
    var storedInfo;
    var li_Item = "";
    var dd = "";
    // for(var i = 0; i < inputs.length; i++) {
    //    // inputs[i].addEventListener("change", infoFromInput)
    //    console.log(inputs[i].value)
       
    // }
    //function infoFromInput(e) {
       // infoArr.push(e.target.value)
      //  console.log(infoArr);
    //}
    
    saveBtn.addEventListener("click", function() {
        var nameValue = inputName.value;
        var ageValue = inputAge.value;
        var dateValue = inputDate.value;
        var colorValue = inputColor.value;
        if(nameValue === "" || ageValue === "" || dateValue === "") {
            alert("You must fill all the inputs");
        }
        else {
            var li = document.createElement('li');
            infoArr.push({name: nameValue, age: ageValue, date: dateValue, color:colorValue});
            li.innerHTML = nameValue + "<br/>" + ageValue + "<br/>" + dateValue + "<br/>";
            li.style.color = colorValue;
            historyList.appendChild(li);
            localStorage.setItem("info", JSON.stringify(infoArr));
        }
        
        
    })
    
    storedInfo = JSON.parse(localStorage.getItem("info"));
    for(var i = 0; i < storedInfo.length; i++) {
        // var infoItem = `${storedInfo[i].name}
        // ${storedInfo[i].age}
        // ${storedInfo[i].date}`;
         li_Item += '<li class="historyItem" style="color:'+ storedInfo[i].color +'">' +
          storedInfo[i].name + '<br/>' +
          storedInfo[i].age + '<br/>' +
          storedInfo[i].date + '<br/>' +
          '</li>';
        
    }
    historyList.innerHTML = li_Item;
    console.log(storedInfo);
});


    