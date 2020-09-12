class Car {//name of class and constructor is same is java
    constructor(name, speed , price) {
         this.name = name;
         this.speed = speed;
         this.price = price;
    }
    //methods
    getDetails(){
         console.log(`Car is ${this.name} with speed ${this.speed} and price ${this.price}`);
    }
    setDetails(prop, value) {
         this[prop] = value;
         console.log(`${prop} of ${this.name} changed to ${value}`);
    }
}
let swift = new Car("Swift", 200, "5L");
let Mustang = new Car("Mustang", 200, "5L");
swift.getDetails();
swift.setDetails("price", "7L");
Mustang.getDetails();

class ManualCar extends Car {
    constructor(noOfGears, name, speed, price) {
          super(name, speed, price);
          this.noOfGears = noOfGears;
     }
    getDetails() {
        console.log(`Car is ${this.name} with speed ${this.speed} and price ${this.price} with gears ${this.noOfGears}`);
    }

}
let beat = new ManualCar(10, "beat", 170, "6L");
//beta.getDetails();
console.log(beat);
//we can print ln 34 even if we define constructor since it is called in the default constructor definition.
//but if we define the constructor we have to call the super();