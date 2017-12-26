function sayHello() {
  console.log("Hello, world");
}

sayHello();

function sayHello(name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

function isEven(num) {
  return num % 2 === 0;
}

var tenIsEven = isEven(10);
var elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);
