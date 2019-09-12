/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: It is when this is called at the top level, or in other words when the only object above it is the thing that is running javascript.
* 2. Implicit Binding: When this is called within an object. this refers to the object itself when called inside the object.
* 3. New Binding: this will refer to the new object created with a constructor function. this will refer to the new object and not the original object that it was created from.
* 4. Explicit Binding: anytime you use .call .bind or .apply, you will change what this will refer to. It will refer to a different object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBind (){
    console.log(this);
}
windowBind();
// Principle 2

// code example for Implicit Binding
function Person(name){
    this.name = name;
    this.type = "Person";
    this.greet = function(){
        console.log(this.name);  
    }
}

// Principle 3

// code example for New Binding
const jerry = new Person("jerry");
jerry.greet();

// Principle 4

// code example for Explicit Binding
const john = new Person("john");
john.greet.apply(jerry);
john.greet();