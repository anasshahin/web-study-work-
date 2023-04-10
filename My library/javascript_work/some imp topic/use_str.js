// how to use srting
let name1 = 'ahmad';
console.log(name1.repeat(4)); // make repeate to string

console.log(name1.length);
console.log(name1[1]);
console.log(name1[2]);
console.log(name1.charAt(3));// name1.charAt(3) = name1[3]
console.log(name1.charAt(198));// the deferent between charAt() and name1[]
console.log(name1[198]);// is the outbut of this tow statement

let text= 'i like real madrid';
console.log(text.indexOf('m')); // print the index of char
console.log(text.indexOf('m',5)); // start search from index 5 and return the index of m 
console.log('index of a '+text.indexOf('a'));
console.log('index of a '+text.indexOf('a',11));// becouse they start search at index 11 they dont see the first a of indes 10 they see the a with index 14
console.log('index of real '+text.indexOf('real')); // write the first index of the text
console.log('index of i '+text.lastIndexOf('i')); // start search from the last index 
console.log('index of i '+text.lastIndexOf('i',12)); 
console.log('slice the string '+text.slice(0)); 
console.log('slice the string '+text.slice(4)); 
console.log('slice the string '+text.slice(0,6)); 
console.log('to make concatinate '+text.split(' ')); 
console.log(text.split(' '));//  sclice string in array
console.log(text.split(' ', 2)); // detecte number of item in array
console.log(text.slice(-9,-1)); // accept negative number 
// بتبلش تعد من اليمين اول عنصر من اليمين قيمته 0 و الثاني -1 و هكذا 
// (رقم البداية في الحالة السالبة , رقم النهاية في الحالة  السالبة  )
// مثلا بدي اخذ اخر ثلاث ارقام بحط 
// ( -4,-1) 
// بتعبر -1 عن اخر عنصر 
// بتعبر -4 عن العنصر رقم 4 من نهاية النص 

console.log(text.substring(2,6));// نفس ال slice 
// لكنها لا تدعم الطريقة السالبة
console.log(text.substr(2,6));//هاي بتبلش العد من 2 و من بعدها بتعد 6 حروف 

// -----------------------------------------------------------------------------------------//
// string search 

console.log(text.includes('a'));// its return true or false if char is in string return true if not in string return false
console.log(text.includes('z'));
console.log(text.includes('a',15));
console.log(text.startsWith('i'));// return true if the char is the first item  in string
console.log(text.startsWith('i',2));// return true if the char is the 2 item  in string
console.log(text.startsWith('l',2));// return true if the char is the 2 item  in string
console.log(text.startsWith('like',2));// can put string and need the same idex with first char of this string to put true
console.log(text.startsWith('like',2));
console.log(text.endsWith('d'));// return true if last element is same wuth char
console.log(text.endsWith('d',6)); //  بشوف اخر حرف من اول 6 حروف اذا طابق الحرف برجع ترو 
 