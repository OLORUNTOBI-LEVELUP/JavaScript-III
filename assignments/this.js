/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. window binding refers to just console logging the this keyword. the this keyword alone refers to the window object since its not being attached to anything
 * 2. In this case, The object that is standing before the dot is what this keyword will be bound to.
 * 3. So this when the function has been called with new refers to the new instance created.
 *    When a function is called with new, it does not care about implicit, explicit, or hard binding, it just creates the new context—which is the new instance.
 * 
 * 4. Explicit binding is when we explicitly bind a context to the function. This is done with call() or apply()
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function greetMe(name) {
  console.log("Hello " + name);
  console.log(this);
}

greetMe("John");

// Principle 2

// code example for Implicit Binding
const MyObject = function() {
  this.name = "MyObjectName";
  this.myProperty = "property";
};
MyObject.prototype.doStuff = function(action) {
  console.log(this.name + " is " + action + "!");
};

let obj = new MyObject();

obj.doStuff("awesome");

// Principle 3

// code example for New Binding
function property(name, age, height) {
  this.name = name;
  this.age = age;
  this.height = height;
}

const tobyProperty = new property("tobi", 22, 12);
// Principle 4

// code example for Explicit Binding
const runner = { 
    name: "John", 
    myFavoriteActivity: "running" 
            };
MyObject.prototype.doStuff.call(runner, runner.myFavoriteActivity);
