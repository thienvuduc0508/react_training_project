/* 
trong JS có 5 kiểu dữ liệu nguyên thủy
- boolean
- undefined
- string
- null
- number
5 kiểu dữ liệu này được lưu trữ dưới dạng value, khi sao chép giá trị của biến này cho biến khác thì giá trị của 2 biến này hoàn toàn độc lập
ví dụ

*/

var a = 'ab';
var b = a;
b = 'cd';

console.log(a);
console.log(b);


/*
trong JS có 3 kiểu dữ liệu tham chiếu
- Function
- Array
- Object

Gọi chung là kiểu dữ liệu Object Type vì nó không mang giá trị,
mà chỉ tham chiếu đến vùng lưu trữ của obj đó trong bộ nhớ
vdu:
*/

const arr1 = ['ab', 'cd']
const arr2 = arr1
arr2[0] = 'ef'

// console.log(arr1);
// console.log(arr2);

var personObj1 = {
    name: 'Alex',
    age: 30
};

var person = personObj1;
person.age = 25;

person = {
    name: 'John',
    age: 50
};

var personObj2 = person;

console.log(personObj1);
console.log(personObj2);



