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