/*let con = document.getElementById('1234');
console.log(con.outerHTML);// بتجيب كامل العنصر بالي جواه بكل اشي 
console.log(con.innerHTML);

con.innerHTML= '<p> hello </p>';


console.log(con.innerHTML);

//con.outerHTML = '<div> see my frind</div>';
con.innerText = '<p> see my frind</p>';
con.textContent = '<p> see my235 frind</p>';// same like innertext
con.outerText = '<p> see my21213 frind</p>';

*/

let ele = document.getElementById('2');
ele.nextElementSibling.innerHTML='text';
ele.previousElementSibling.remove();
//console.log(ele.previousElementSibling.textContent);
console.log(ele.nextElementSibling.textContent);
console.log(ele.nextSibling.textContent);// give me any thing after the element like hello

console.log(ele.parentElement.textContent);

let container = document.getElementById('container');
container.innerText = 'hello ';
console.log(container.textContent);
// element.style.property = value
container.style.backgroundColor= '#444';
container.style.color= '#fa0';
container.style.padding= '10px';
container.style.borderLeft= '4px solid #faf';
// element.style.cssText=
/*container.style.cssText= 
'color:red ; background:#444'*/// write here  css code like css file
// it is remove all previous property form element

container.style.removeProperty('background');// remove property

container.style.setProperty('background','#444','important');