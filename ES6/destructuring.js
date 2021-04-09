/*
Destructuring là cú pháp cho phép gán các thuộc tính của 1 obj hoặc 1 array, rút gọn code khi thao tác với dữ liệu trog các cấu trúc này

*/

//vi du 1
const [a, b, c] = [1, 2, 3, 4, 5]
console.log(a, b, c); // 1 2 3

// vi du 2
const [d, e, ...f] = [1, 2, 3, 4, 5]
console.log(d, e, f); // 1 2 [3, 4, 5]

//vi du 3
const res = () => [1, 2, 3]
const [e1, ,e2] = res()
console.log(e1, e2) ;//1,3

// vi du 4
const res1 = {blog: 'anonystick.com', type: 'javascript'}
const {blog: nameBlog, type: newType} = res1;
console.log(nameBlog, newType);//anonystick.com, javascript


// vi du 5
const blogs = {
	anonystick: [
  	{
    	pageFacebook: 'Tip javascript Viet Nam',
      likes: 4789,
      daily: 1323
    }
  ]
}

const {
  anonystick: [
  	{
  		pageFacebook: namePage,
      likes: numLikes,
      daily: numDaily
    }
  ]
} = blogs;

console.log(namePage, numLikes, numDaily );//Tip javascript Viet Nam, 4789, 1323