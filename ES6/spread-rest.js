/*

Spread operator là ba dấu chấm ( ...), một bổ sung hữu ích cho JavaScript để làm việc với các Arrays, Objects
- Sao chép một mảng, obj
- Sử dụng mảng như danh sách các argument
- Thêm một item vào một list
- kết hợp mảng, obj

*/

// sao chép mảng, obj
const fruit = ['banana', 'apple', 'lemon']
const fruit1 = [...fruit]
console.log(fruit1); // ['banana', 'apple', 'lemon']
// sao chép obj
const person = {
    name: 'thien',
    age: 29,
    nation: 'Viet Nam'
}
const newPerson = {...person}
console.log(newPerson); // { name: 'thien', age: 29, nation: 'Viet Nam' }

//  sử dụng mảng như 1 danh sách các tham số
const numbers = [20, -17, 7, 0]
console.log(Math.min(numbers)) // output là NaN do hàm này không nhận array là tham số

//Sử dụng spread operator
console.log(Math.min(...numbers)) //  -17 
console.log(Math.max(...numbers)) // 20

// thêm 1 phần tử vào mảng
const numbers2 = [1, 2, 3, 4, 5]
const newNumber = [...numbers2, 6, 7]
console.log(newNumber); // [1,2,3,4,5,6,7]
//obj
const human = {
    name: 'alex',
    age: 20,
}
const boy = {
    ...human,
    age: 21,
    nation: 'France'
}
console.log(boy); // { name: 'alex', age: 21, nation: 'France' }

// kết hợp mảng
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1, ...arr2, 7, 8]
console.log(arr3) // [1,2,3,4,5,6,7,8]

// kết hợp obj
const hobbies = {
    sport: 'football',
    game: 'LOL'
}
const people = {...boy, ...hobbies}
console.log(people);


//Rest Parameters dịch theo tiếng Anh CNTT là tham số còn lại, có nghĩa là có thể khai báo một hàm với số lượng tham số không xác định
// Ngược lại với Spread Operator, Rest gom những phần tử thành array. Rest operator được dùng trong parameter của function và destructuring

function sumNumber(...args) { 
    console.log(args)
    let sum = 0;
    args.forEach(args => sum += args)
    return sum;
 }
 console.log(sumNumber(1,3,5,6));  // 15

 //..rest với Destructuring
 const VNTeam = ['Park', 'Dũng', 'Hải', 'Hậu', 'Hoàng']
 const [coach, captain, ...players] = VNTeam;
 console.log(coach);
 console.log(captain);
 console.log(players); // ['Hải', 'Hậu', 'Hoàng']
