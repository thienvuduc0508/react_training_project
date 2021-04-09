/*
ES6 cung cấp 2 loại export là Named Export và default export
+ Named export: named export được sử dụng để xuất nhiều thứ từ một module bằng cách thêm keyword export vào khai báo của chúng.
 Những thứ được export sẽ được phân biệt bằng tên. 
 Sau đó import những thứ chúng ta cần sử dụng bằng cách bao quanh chúng cặp dấu ngoặc nhọn { }. 
 Tên của module đã nhập phải giống với tên của module đã xuất.

*/

//1. Named export:

// trong file func1.js

//exporting a function
export function squareNumber(x) {
  return x * x; 
}
//exporting a variable 
export const pi = 3.14; 
//Cách khác để export:
export {squareNumber, pi} ;

//import trong file main.js

import {squareNumber, pi} from "func1.js"; 
const radius = 7; 
console.log("Area of a circle is", pi * squareNumber(7)); 

//Cách khác để import
import * as mathFuncs from "func1.js"; 
console.log("Area of circle is ", mathFuncs.pi * mathFuncs.squareNumber(7)); 

//2. Export default
// Default Export trong Javascript ES6 chỉ cho phép xuất một mặc định cho mỗi file.
//  Default Export có thể cho một function, class hoặc một object.

// export MyComponent.js
const MyComponent = () => {}
export default MyComponent;

// import
import MyDefaultComponent from "MyComponent.js"; //Việc đặt tên import hoàn toàn độc lập trong export default và chúng ta có thể sử dụng bất kỳ tên nào mà mình muốn.

