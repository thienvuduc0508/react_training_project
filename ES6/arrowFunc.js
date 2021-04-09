/*
arrow function là một trong những tính năng của ES6, 
sử dụng đúng cách sẽ giúp code trở nên ngắn gọn và dễ hiểu hơn,
tuy nhiên nó ko thay thế hoàn toàn func thường được

Arrow function thường ngắn gọn hơn function
Arrow function không bind this
Arrow function không bind arguments
Arrow function không phù hợp làm method cho object
Arrow function không thể sử dụng làm hàm constructor
Arrow function không có thuộc tính prototype
Arrow function không được hoisted
*/

// cu phap
hello = () => {
    console.log('hello');
}
hello();

// co 1 tham so
hi = name => console.log('hello', name);
hi('thien');

// co nhieu tham so
const sum = (a, b) => {
    return console.log(a + b);
}
sum(3, 5);

//sd voi ham map
const numbers = [1,2, 3, 4];
const newArr = numbers.map(number => number*2);
console.log(newArr);

// Arrow func khong bind this
// Arrow func khong dinh nghĩa giá trị this của riêng nó giống như Func thường
var x = 0;
function DelayPrint(x, timeout) {
  this.x = x;
  setTimeout(function print() {
    console.log('Func thường',this.x);
  }, timeout);
}

let p = new DelayPrint(2, 1000); // 0

// su dung arrow fucnc
var z = 0;
function DelayPrint2(z, timeout) {
  this.z = z;

  setTimeout(() =>  {
    console.log('dùng arrow function',this.z);
  }, timeout);
}

let p2 = new DelayPrint2(1, 1000); // 1

// Arrow func không bind argument
//voi Func thường
function sum1() {
  return Array.from(arguments).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
console.log(sum1(1, 2));         //  3
console.log(sum1(1, 2, 3));      //  6

//Đối với arrow function, sử dụng arguments sẽ lỗi vì biến này không được định nghĩa ở arrow function
let sum2 = () => {
  return Array.from(arguments).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

// console.log(sum2(1, 2)); //Uncaught ReferenceError: arguments is not defined

// sử dụng rest parameters thay thế cho argument
let sum3 = (...args) => {
  return Array.from(args).reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}

console.log(sum3(1, 8));

// Arrow func không phù hợp làm method cho obj
let obj = {
  a: 1,
  b: () => console.log(this.a, this),
  c: function() {
    console.log(this.a, this);
  }
}

obj.b(); // undefined, {}
obj.c(); // 1, Object {...}

// Arrow func không thể sử dụng làm hàm constructor
let Dog = (name, color) => {
  this.name = name;
  this.color = color;
}

let myDog = new Dog("Nick", "White");
console.log(myDog.name, myDog.color);
// => TypeError: Dog is not a constructor

// Arow func không có thuộc tính prototype
let Foo = () => {};
console.log( 'prototype',Foo.prototype); // undefined

// Arrow func không được hoisted
myFunc2(); // => ReferenceError: Cannot access 'myFunc2' before initialization
let myFunc2 = () => {}