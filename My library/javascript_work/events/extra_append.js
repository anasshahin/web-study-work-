let hello = document.getElementById('hello');

hello.onclick = function(){
    hello.classList.add("name","hide");// insert many value of class 
}
console.log(hello.classList);
hello.oncontextmenu = function(){
    hello.classList.remove("name");
}// بتشتغل لما اعمل كلك يمين