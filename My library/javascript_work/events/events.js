function hello (){
    console.log('hello');
}
let btn = document.getElementById('btn');
btn.onclick = function (){
    console.log('hala madrid');
}
let btn1 = document.getElementById('btn1');
function back (){
document.body.style.background = 'red';
}
btn1.onclick = back;

let btn2 = document.getElementById('btn2');

btn2.addEventListener ('click',function (){
    console.log('clicked');
});

let btn3 = document.getElementById('btn3');
btn3.addEventListener ('click', function (){
    document.body.style.background = 'red';
});
btn3.addEventListener ('click', function (){
    btn3.style.color = 'green';
})
btn3.addEventListener ('click', function (){
    btn3.style.background = 'blue';
})
let btn4 = document.getElementById('btn4');
btn4.onmouseup= function(){console.log('hello hell')};
//  بس اشيل الماوس عن الكبسه بشتغل بغض النظر انا وين كبست المهم اني بس انهي الكبسة لازم تكون جوه الكبسة
btn4.onmousedown= function(){console.log('hello hel')};// بس لازم اضغط على العنصر بغض النظر وين لازم اطلع

//btn4.onmouseover= function(){console.log('hello hel')};
//btn4.onmouseout= function(){console.log('hello hel')};
//btn4.onmousemove= function(){console.log('hello hel')};

let inp = document.getElementById('input');
inp.onkeyup = function (){
    console.log('click');
}
/*inp.onkeydown = function (){
    console.log('click');
}*/
let inp2 = document.getElementById('input1');
let inp3 = document.getElementById('input2');

inp2.onfocus = function (){
    this.style.border = '4px solid #f00';
}// when you insert
inp3.onblur = function (){
    this.style.border = '4px solid #f00';
}// when you out 
onload = function(){
    this.document.body.style.background = 'green';
}
onresize = function(){
    this.document.body.style.background = 'yellow';
}