console.log('hello');
console.error('error');
 window.print();
 let name = 'anas';
 // convert number to string
let x =102;

 
console.log('convert number to string '+typeof x.toString());
console.log('convert number to string '+typeof (190).toString());
console.log('convert number to string '+typeof 90..toString());

 console.log('convert number to string '+typeof String(100));
 console.log(name);
 name = 10;
 console.log(' my name is '+name);
 console.log(name**2 );
 console.log('5' /'2'); 
 console.log(+'5' + +'2'); 
 console.log(-'5');
 console.log(-'-5');
 
 console.log(+false ) ;
 console.log(+true ) ;
 console.log(Number('4') ) ;
 console.log(+'ahm' ) ; 
 console.log(parseInt('1 anas') ) ;
 console.log(parseFloat('1.9 anas') ) ;

 // class number
 
 console.log(Number.MAX_VALUE);// MAX NUMNER IN JS
 console.log(Number.MAX_VALUE + 13242515436432261);// does not increase more becouse this is the max number
 console.log(Number.MAX_SAFE_INTEGER); // max number is safe to use
 console.log(Number.MIN_SAFE_INTEGER);// min number is safe to use
 console.log(Number.isSafeInteger(9007199254740991)); // it use to know if this number is safe or not
 console.log(Number.isSafeInteger(9007199254740992)); 
 console.log(Number.isInteger(9007199254740992)); 
 console.log(Number.isInteger('3'));
 console.log('isNaN '+Number.isNaN(4));
 console.log('isNaN '+Number.isNaN('g'));
 console.log('isNaN '+Number.isNaN('g'-4));
 console.log('isNaN '+Number.isNaN('g'+4));

 // class Math 

 console.log( ' eular const = '+Math.E);
 console.log(" pi = "+Math.PI);
 console.log(Math.abs(-4));
 console.log(Math.sqrt(4));
 console.log('4 power 3 = '+Math.pow(4,3));
 console.log("round "+Math.round(4.5));//  بتقرب لاقرب عدد صحيح  
 console.log("round "+Math.round(4.2));//  بتقرب لاقرب عدد صحيح  
 console.log("round "+Math.round(4.8));//  بتقرب لاقرب عدد صحيح  
 console.log("ceil "+Math.ceil(4.2));//  بتقرب ل اكبر عدد صحيح 
 console.log("ceil "+Math.ceil(4.5));//  بتقرب ل اكبر عدد صحيح 
 console.log("ceil "+Math.ceil(4.8));//  بتقرب ل اكبر عدد صحيح 
 console.log("floor "+Math.floor(4.8));//  بتقرب ل اصغر عدد صحيح 
 console.log("floor "+Math.floor(4.2));//  بتقرب ل اصغر عدد صحيح 
 console.log("floor "+Math.floor(4.5));//  بتقرب ل اصغر عدد صحيح 
 console.log("min "+Math.min(4,5,6,19,1));// بختار اصغر رقم 
 console.log("max "+Math.max(4,5,6,19,1));// بختار اكبر رقم 

 // user insert value

//let num = window.prompt();
//console.log('num = '+ num);

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

// function ******************************************************************************


// decleration function
function hello(){
    console.log('hello world');
}

// exprition function
let hello1 = function(){
    console.log('hello world');
}
hello1();// must call it 
(function (){
    console.log('function call it self');
})();

function calc (...numb){
    console.log(numb);

}// how to make array parameter 

calc(1,4,6,7,9,'h',7);

function calcu(...numb){
    let result = 0;
    for(let i =0 ; i<numb.length;i++)
    {
        result += numb[i];
        
    }
    console.log(result);

}
calcu(5,3,6,8,8,9,2,4);

let xac= ()=> 3;
let xacq= _=> 2;
let xach= num=> num*2;
let xact= (num,x)=> num*x;
console.log(xac());
console.log(xacq());
console.log(xach(3));
console.log(xact(4,6));

// ****************** object *********************************************************
let car ={
    brand : 'bmw',
    price : 500000,
    color: ['white', 'red', 'black'],
    model : 2020,
    // nested object
    number_car:{
        first:1242564,
        second:232535,
    },
    one_color : function(){
        return this.color[0];
    },
    old:function(){
        return 2022-car.model;
    },
   speed(){
    
   }  
};
console.log(car.brand);
console.log(car['price']);
console.log(car);
console.log(car.one_color());
console.log(car.number_car.first);
console.log(car['number_car']['first']);

let user = {};
user.name='ahmad'; // create proparity
user['age']=24;
console.log(user.name);
console.log(user.age);
user.hello=function(){
    return 'hello';
}
console.log(user.hello());
 
let users = new String();
console.log(users);
let users1 = new Object();


//******************* * this***************** 
let nymar= {
    name:'jr',
    priunt_name(){
        return this.name;// this = ynmar
    }
}
console.log(nymar.priunt_name());
let qwe= this;
console.log(qwe);// this point to the global object which is window
console.log(this== window); // return true
//this.alert();// this = window
function helloo()
{
    return this;
}
console.log(helloo());// print window 

// create object 2
let user1={
    name : 'ahmad',
     get_name(){
      return user1.name;  
    },
    get_name1(){
        return this.name;  
      }
}
let user2 = Object.create(user1);
user2.name ='anas';
user2.age = 32;
console.log(user2.name);
console.log(user1.name);
console.log(user2.get_name());
console.log(user2.get_name1());

let user3 =Object.create(user2,{
    number:{ value : 10}
});

console.log(user3.number);

// ------------------- object assign -----------------------
// دمج بين الاوبجيكت
let a1 = {
    num:231,
    hello(){
        return 'hello';
    }
}
let a2 = {
    num1:21,
}
let a3 = {
    num2:31,
}
let a4 = Object.assign(a1,a2,a3,{num4:4});
console.log(a4);
console.log(a1); // ليش خزن القيم فيها برضه
 
