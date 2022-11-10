let txt = document.getElementById('txt');
let myBtn = document.getElementById('btn');

window.onload = function(){
    txt.focus();
    myBtn.onclick();
    txt.placeholder = 'test';
}
myBtn.onclick = function(){
    myBtn.style.background = '#ffa'; 
}
txt.oncontextmenu = function(){
    txt.blur();
}
