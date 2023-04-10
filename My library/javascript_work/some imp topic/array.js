// array 

let object = [1,2,3,[4,5,6,[10,11,12]],[7,8,9]];
// important
console.log(object[3][2]);// المربع الاول بعبر عن رقم العنصر في الاريي وج انه هذا العنصر هو اريي 
// المربع الثاني بعبر عن رقم العنصر في الاري الداخلية 
console.log(object[3][1]);

console.log(object[3][0]);
console.log(object[3][3][2]);// هون هو دخل ل الريي الي جوا جوا اريي
console.log(object[3][3][1]);
console.log(object[3][3][0]);

console.log(object[4][0]);
console.log(object[4][1]);
console.log(object[4][2]);

let names= ['ahmad','zaid','emran'];
console.log(names);
names.push('gamal');// insert at end of array 
console.log(names);
names.push('saif', 'morad');
console.log(names);
names.unshift('yazan', 'momen');// insert item at the first of array 
console.log(names);
names.shift();// remove in the first of array
console.log(names);
console.log(names.shift());// اذا عملتها بهذا الشكل بالاول هو رح يطبع العنصر الي نحذف
console.log(names);
names.pop();//remove from the end of array
console.log(names);
console.log(names.pop());
console.log(names);

let names1= ['real madrid', 'barcelona','leeds','manU','manC'];
names1.splice(0,1);// اول فراغ بمثل رقم العنصر الي من عنده رح ابلش الحذف و بالحالة هاي فهو العنصر رقم 0
// هنا بكتب عدد العناصر الي بدي احذفها
console.log( names1);
names1.push('de','re','see');
console.log( names1);
names1.splice(2,3);
console.log( names1);
names1.splice(2,3,'re','me');
// in this setuation it is remove 3 item start from item 2 then it add the items that i put in the same place that i make th remove
// splice (start , count , add , add ,.....)
console.log( names1);
names1.splice(4,0,'nee','see');
console.log( names1)

console.log(names1.slice(0,2));
// لا تقطع الاريي انما تاخذ نسخه منها
// slice (start element, end element)
console.log(names1);
console.log(names1.slice(-4));
console.log(names1.slice(-3,-1));
console.log(names1.lastIndexOf('nee',-1));// start search from the last index

console.log(names1.reverse);// show items in reversal way
console.log(names1.sort());// sort string in Alphabetical order 
let nnnum=[4,5,1,5,8,9.2];
console.log(nnnum.sort());

let adde=['assdf','saf','ersj','whR'];
let adder = ['gfj','ty','yhkf','rduth','gfdj'];
//adde = adder + adde;

//console.log(adde);// add two array but final type is string 

console.log(adde.concat(adder,'gsfgtg'));// dont save the final value in adde 
// can add array with string 
console.log(names1.join());// convert array to string 
console.log(names1.join(' '));
console.log(names1.join(''));
console.log(names1.join('#'));

let xxx = 'ahmad';
let yyy = 'AHMAD';
let zzz = '               AHMAD seeeee           ';

console.log(xxx.toUpperCase());
console.log(yyy.toLowerCase());
console.log(zzz);
console.log(zzz.toLowerCase().trim());

console.log(5=='5');// لا تنضر الى نوع البايانات غقط الى قيمتها
console.log(5==='5'); // تقارن القيمة و النوع ايضا

console.log(12222>22 && 7=='7'); 
console.log(12222<22 || 7=='7'); 

// && => and 
// || => or

//**************************************************************************************** */
let age = 14;
age>10?console.log('you can play '):console.log('you can not play ');
