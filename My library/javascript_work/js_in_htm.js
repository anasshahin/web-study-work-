// first way to write html in js is 
// 1- 
document.body.innerHTML = '<h1> hala madrid </h1>';
// 2-
// A- انشاء العناصر
let container = document.createElement('div');
let head = document.createElement('h1');
let img = document.createElement('img');

// B- اضافة العناصر

let cotant = document.createTextNode('Hello world ');
console.log(cotant.textContent);
head.appendChild(cotant);
img.src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5yFZhxhotOzFfKsnl_6ZOc80l4rrvZyi6w&usqp=CAU';
img.style.width= '200px';

// C- اضافة العناصر في المكان المراد 

container.appendChild(head);
container.appendChild(img);
console.log(container.textContent);
document.getElementById('1').appendChild(container);
console.log(container);
container.style.background='#666';
container.style.color = '#fff';
container.style.padding = '10px';
container.style.textAlign = 'center';
