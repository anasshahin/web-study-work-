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
