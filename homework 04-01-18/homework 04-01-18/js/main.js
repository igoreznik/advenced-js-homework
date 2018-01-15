<<<<<<< HEAD
/**
 * Created by igor.reznik on 11/01/2018.
 */

//exercise num2
let myColor = document.querySelector('.myColor');

let colorPicker = {
    totalTimes: 0,
    eventIndex: 0,
    currentColor: "",
    eventColor: "",
    alertFunc: function(totalTimes, eventIndex, currentColor, eventColor) {
        alert(`
                total times: ${totalTimes}
                event index: ${eventIndex}
                current color: ${currentColor}
                event color: ${eventColor}
        `);
    }
};
myColor.addEventListener("change", function(e) {
    colorPicker.totalTimes++;
    let eventColor = e.target.value;
    colorPicker.currentColor = eventColor;
        setTimeout(function() {

            colorPicker.eventIndex++;
            colorPicker.eventColor = eventColor;
        colorPicker.alertFunc(colorPicker.totalTimes, colorPicker.eventIndex, colorPicker.currentColor, colorPicker.eventColor);
    },5000);
});


// exercise for handing over

function Shape(x,y,color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.distance = function() {
        return `this is the distance: ${Math.sqrt(Math.pow(x,2) + Math.pow(y,2))}`;
    };

}
Shape.prototype.toString = function () {
    return `x = ${this.x}, y = ${this.y}, Color = ${this.color}`;
};
let shape = new Shape(5,10, '#000000');
console.log(shape.toString());
console.log(shape.distance());
=======
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


    
>>>>>>> eaa5a90e0a2ac225c2a4fe33ca0a9c4452a67042
