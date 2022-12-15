function hello(){
    console.log('hello');
}// this function is member in window

window.hello();

var x = 10;
// x is member in window
console.log(window.x);

let hello1=function(){
    console.log('hello1');

}// hello1 is not member in window
//window.hello1(); error
let x1 = 10;
//  x is not member in window
//window.x1 error

const PI = 3.141592653589793; // is not member in window
//window.PI error