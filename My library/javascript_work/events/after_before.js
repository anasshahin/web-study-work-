let after = document.getElementById('after');
let before = document.getElementById('before');
let apppend = document.getElementById('apppend');
let content = document.getElementById('content');
let contanier = document.getElementById('contanier');

contanier.style.height='50px';
contanier.style.background='#ffa';

after.onclick = function(){
    contanier.after(content);
}
before.onclick = function(){
    contanier.before(content);
}
apppend.onclick = function(){
    contanier.append(content);
}
