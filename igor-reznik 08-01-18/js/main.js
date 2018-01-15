//--------------------exercise number 1----------------------------------------//

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
// console.log(shape.toString());
// console.log(shape.distance());


function Circle(x,y,color,radius) {
    Shape.call(this,x,y,color);
    this.radius = radius; 
}
Circle.prototype.toString = function () {
    return `x = ${this.x}, y = ${this.y}, Color = ${this.color}, radius = ${this.radius}`;
};
Circle.prototype.PI = Math.PI;
Circle.prototype.getArea = function() {

    return Circle.prototype.PI*(Math.pow(this.radius,2));
}
Circle.prototype.getPerimeter  = function() {
    return 2*Math.PI*this.radius;
}

let circle = new Circle(3,6,'#ffffff',8);
console.log("circle.toString()",circle.toString());
console.log("circle.distance()",circle.distance());
console.log("circle.getArea()",circle.getArea());
console.log("circle.getPerimeter()",circle.getPerimeter());
console.log("circle.PI",circle.PI);

//------------------exercise number 2 -------------------------------------------//

class Computer {
    constructor(cpuMemory, discMemory, cpuModel, price, warranty) {
        this.cpuMemory = cpuMemory;
        this.discMemory = discMemory;
        this.cpuModel = cpuModel;
        this.price = price;
        this.warranty = warranty;
    }
    set cpuMemory(val) {
        if(val >= 4 && val <=16)
        this._cpuMemory = val
        else
        console.log("out of range");
    }
    get cpuMemory() {
        return this._cpuMemory;
    }
    set discMemory(val) {
        if(val >= 200 && val <= 3000)
        this._discMemory = val
        else
        console.log("out of range");
    }
    get discMemory() {
        return this._discMemory;
    }
    set cpuModel(val) {
        this._cpuModel = val;
    }
    get cpuModel() {
        return this._cpuModel;
    }
    set price(val) {
        if(val >= 800 && val <= 20000)
        this._price = val
        else
        console.log("out of range");
    }
    get price() {
        return this._price;
    }
    set warranty(val) {
        if(val >= 0 && val <= 5)
        this._warranty = val;
        else
        console.log("out of range");
    }
    get warranty() {
        return this._warranty;
    }
    accessories(val) {
        console.log(`this is an earphone offer`);
    }
    toString() {
        console.log(`
        cpu Memory: ${this.cpuMemory}
        disk Memory: ${this.discMemory}
        cpu type: ${this.cpuModel}
        price: ${this.price}
        warranty: ${this.warranty}
        `);
    }
}
class StandAloneComp extends Computer {
    constructor(cpuMemory, discMemory, cpuModel, price, warranty,wireless,screenSize) {
        super(cpuMemory, discMemory, cpuModel, price, warranty);
        this.wireless = wireless;
        this.screenSize = screenSize;
    }
    set wireless(val) {
        if(val)
        this._wireless = val;
        else
        this._wireless = "not wireless";
        console.log("not wireless");
    }
    get wireless() {
        return this._wireless;
    }
    set screenSize(val) {
        if(val >= 11 && val <= 18)
        this._screenSize = val;
        else
        console.log("out of range");
    }
    get screenSize() {
        return this._screenSize;
    }
    accessories(val) {
        console.log(`this is an computer table offer`);
    }
    toString() {
        console.log(`
        cpu Memory: ${this.cpuMemory}
        disk Memory: ${this.discMemory}
        cpu type: ${this.cpuModel}
        price: ${this.price}
        warranty: ${this.warranty}
        wireless: ${this.wireless}
        screenSize: ${this.screenSize}
        `);
    }
}
class Laptop extends Computer {
    constructor(cpuMemory, discMemory, cpuModel, price, warranty,chargeHours,batteryPracentage,touchScreen) {
        super(cpuMemory, discMemory, cpuModel, price, warranty);
        this.chargeHours = chargeHours;
        this.batteryPracentage = batteryPracentage;
        this.touchScreen = touchScreen;
    }
    set chargeHours(val) {
        if(val >= 1 && val <= 9)
        this._chargeHours = val;
        else
        console.log("out of range");
    }
    get chargeHours() {
        return this._chargeHours;
    }
    set batteryPracentage(val) {
        if(val >= 0 && val <= 100)
        this._batteryPracentage = val;
        else
        console.log("out of range");
    }
    get batteryPracentage() {
        return this._batteryPracentage;
    }
    set touchScreen(val) {
        if(val)
        this._touchScreen = val;
        else
        this._touchScreen = "not touch";
        console.log("not touch");
        
    }
    get touchScreen() {
        return this._touchScreen;
    }
    accessories(val) {
        console.log(`this is an laptop case offer`);
    }
    batteryCharged() {
        if(this._batteryPracentage === 100)
        console.log("battery is full");
        else
        console.log("battery is not full");
    }
    toString() {
        console.log(`
        cpu Memory: ${this.cpuMemory}
        disk Memory: ${this.discMemory}
        cpu type: ${this.cpuModel}
        price: ${this.price}
        warranty: ${this.warranty}
        chargeHours: ${this.chargeHours}
        batteryPracentage: ${this.batteryPracentage}
        touchScreen: ${this.touchScreen}
        `);
    }
}
let computer = new Computer(8,2000,"Asus", 15000, 1);
let standAloneComp = new StandAloneComp(12,1500,"Intel", 10000, 3,true,13);
let laptop = new Laptop(8,1000,"Gigabyte", 5000, 1,9,100,false);

let computerProto = Object.getOwnPropertyNames(Computer.prototype);
let standAloneCompProto = Object.getOwnPropertyNames(StandAloneComp.prototype);
let laptopProto = Object.getOwnPropertyNames(Laptop.prototype);
        function executeActions(arr, proto){
            for(let i in proto){ 
            let temp = proto[i]
            if(typeof arr[temp] === 'function' && temp != 'constructor')
                arr[temp]();
            }
        }
        let arrFunc = function() {
            let array = [];
            for (let i=0; i<10; i++){
                let prototype;
                if(i%2 === 0){
                    array.push(laptop);
                    prototype = laptopProto;
                    
                }
                else{
                    array.push(standAloneComp);
                    prototype = standAloneCompProto;
                }
                executeActions(array[i], prototype)
            }
            console.log(array)
        }
        arrFunc();



