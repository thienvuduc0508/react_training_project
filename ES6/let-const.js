//var

// Trừ trường hợp được khai báo bên trong 1 function (khi đó biến var sẽ có scope là function/locally scoped),
// biến var sẽ có scope là globally scoped, có tính chất hoisting: dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope với giá trị khởi tạo là underfined

var greeting = "hi";
var times = 4;

if (times > 3) {
    var greeting = "Hello"; 
}

console.log(greeting); // Hello
// Vì thỏa điều kiện if nên greeting khi này sẽ có giá trị là "Hello" và sẽ vẫn giữ nguyên giá trị này sau khi thoát ra khỏi block if


//let

// Giống với var, let cũng có tính hoisting tuy nhiên lại khác nhau ở chỗ thay vì var được khởi tạo với giá trị là undefined thì let sẽ không có bất kỳ giá trị khởi tạo nào.
// Điều này dẫn đến việc nếu chúng ta sử dụng biến let trước khi khai báo thì sẽ gặp lỗi Reference Error
//let có thể thay thế var để xử lý ví dụ nêu trên là vì biến let được khai báo sẽ có scope là block scoped chứ không phải globally hay locally scoped.
let greeting1 = "say Hi";
let time = 4;

if (time > 3) {
     let hello = "say Hello";
     let greeting1 = 'say Hi again';
     console.log(hello); // "say Hello"
     console.log(greeting1); // 'say Hi again'
 }
 console.log(greeting1); // 'say Hi'
console.log(hello); // hello is not defined

// const 

// Tương tự với let, const cũng có scope là block scoped, và hoisting
//  Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined)
//  thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến
const number5 = 5;
number5 = 6; // error : Assignment to constant variable
const number5 = 7; // error : Identifier 'greeting' has already been declared

// Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) 
// thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó

const greeting5 = {
    message : "Hello",
    number : "five"
}

greeting5.message = "say Hello";
console.log(greeting5); // {message:"say Hello",number:"five"}