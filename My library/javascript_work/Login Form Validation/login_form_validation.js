let container = document.getElementsByClassName('container')[0];
let label = document.getElementsByClassName('label')[0];
let login_form = document.getElementsByClassName('login_form')[0];
let input = document.getElementsByTagName('input')[0];
let input1 = document.getElementsByTagName('input')[1];
let font2 = document.getElementsByClassName('font2')[0];
let button = document.getElementsByTagName('button')[0];
let pass_error = document.getElementById('pass_error');
let email_error = document.getElementById('email_error');
input.addEventListener('textInput',email_Verify);
input1.addEventListener('textInput',pass_Verify);
/*********************************************************************** */

document.body.style.background = "url('back_img.png') no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.justifyContent = "center";
document.body.style.display = "flex";

/********************************************************************** */

container.style.position="relative";
container.style.marginTop="100px";
container.style.width="450px";
container.style.height="auto";
container.style.background="#dedede";
container.style.borderRadius="5px";

/*********************************************************************** */

label.style.padding = "20px 130px";
label.style.fontSize = "35px";
label.style.fontWeight = "bold";
label.style.color = "#130f40";

/***************************************************************** *****/

login_form.style.padding =  "20px 40px";
login_form.style.fontSize =  "18px";
login_form.style.font.color =  "#130f40";
login_form.style.font.margin =  "5px 0";

input.style.height = "40px";
input.style.width = "350px";
input.style.padding = "0 5px";
input.style.fontSize = "18px";
input.style.outline = "none";
input.style.border = "1px solid silver";

/*********************************************************************** */


input1.style.height = "40px";
input1.style.width = "350px";
input1.style.padding = "5px 5px";
input1.style.fontSize = "18px";
input1.style.outline = "none";
input1.style.border = "1px solid silver";

/********************************************************************** */

font2.style.marginTop="30px";
pass_error.style.marginBlockEnd="40px";

/********************************************************************* */

button.style.margin ="45 px 0 30px 0 ";
button.style.height ="45px";
button.style.width ="365px";
button.style.fontSize ="20px";
button.style.color ="white";
button.style.outline ="non";
button.style.cursor ="pointer";
button.style.fontWeight ="bold";
button.style.background ="#1A237E";
button.style.borderRadius ="3px";
button.style.border ="1px soild #3949AB";
button.style.background ="#151c6a";
button.style.tranition =".5s";

/************************************************************************/

pass_error.style.margintop = "5px";
pass_error.style.width = "345px";
pass_error.style.fontsize = "18px";
pass_error.style.color = "#C62828";
pass_error.style.background = "rgba(255,0,0,0.1)";
pass_error.style.textAlign = "center";
pass_error.style.padding = "5px 8px";
pass_error.style.borderRadius = "3px";
pass_error.style.border = "1px solid #EF9A9A";
pass_error.style.display = "none";

email_error.style.margintop = "5px";
email_error.style.width = "345px";
email_error.style.fontsize = "18px";
email_error.style.color = "#C62828";
email_error.style.background = "rgba(255,0,0,0.1)";
email_error.style.textAlign = "center";
email_error.style.padding = "5px 8px";
email_error.style.borderRadius = "3px";
email_error.style.border = "1px solid #EF9A9A";
email_error.style.display = "none";

/****************************************************************** */

function validated(){
    if(input.value.length<9){
        input.style.border ="1px solid red";
        email_error.style.display = "block"
        input.focus();
        return false;
    }
    if(input1.value.length<9){
        input1.style.border ="1px solid red";
        pass_error.style.display = "block";
        input1.focus();
        return false;
    }
}
function email_Verify(){
    if(input.value.length >=8 ){
        input.style.border = "1px solid silver";
        email_error.style.display="none";
        return true;
    }
    
}
function pass_Verify(){
    if(input1.value.length >=5 ){
        input1.style.border = "1px solid silver";
        pass_error.style.display="none";
        return true;
    }}