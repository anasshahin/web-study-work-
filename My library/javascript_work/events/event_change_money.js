let dollar = document.getElementById('dollar');
let jd = document.getElementById('jd');
dollar.onclick= function(){};
jd.onclick= function(){};
dollar.onkeyup = function(){
    jd.value= dollar.value * .7;
}
jd.onkeyup = function(){
    dollar.value= jd.value * 1.4;
}