let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');
btnClose.onclick = function(){
    container.classList.add('hide');
    this.classList.add('hide');// this = btnClose
    btnOpen.classList.remove("hide");
}
btnOpen.onclick = function(){
    this.classList.add('hide');
    btnClose.classList.remove('hide');
    container.classList.remove('hide');

}