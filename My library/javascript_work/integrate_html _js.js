// طالما بدي اوصل لعناصر ب 
// html 
// فبسرعه بحط 
 // document
  
 let head = document.getElementById('32');
 head.style.color = 'red';
 console.log(head);
 let subhead = document.getElementsByClassName('subhead');
 let subhead0 = document.getElementsByClassName('subhead')[0];
 subhead0.style.color='yellow';
 //subhead.style.color='yellow';error
 console.log(subhead);
 console.log(subhead0);

 let tag_element = document.getElementsByTagName('h3');
 let tag_element0 = document.getElementsByTagName('h3')[0];
 console.log(tag_element);
 console.log(tag_element0);
 tag_element0.style.color='red';
 let query_get = document.querySelector('#see');// it is like in css
 // it is access only the first element 
 // .class_name   #id    tag_name
query_get.style.color='green';

let query_get_all = document.querySelectorAll('h4')[0];// it is like in css
query_get_all.style.color='green';

let body = document.body;
body.style.backgroundColor = '#f8f0b2';
let title = document.title;
console.log(title);

title = 'anas sh';
console.log(title);

let image = document.images;
let image0 = document.images[0];
image0.alt = 'test';
console.log(image);
console.log(image0);
console.log(image0.alt);

let links = document.links;
let link0 = document.links[0];
console.log(links);
console.log(link0);


let form = document.forms;
let form0 = document.forms[0];

console.log(form);
console.log(form0);
let img =document.getElementById('img');
console.log(img);
console.log(img.alt);
console.log(img.src);
console.log(img.className);
console.log(img.id);
img.src='../../DATA TYPE.png';
img.className='img in js';
img.title=' this image in js';

console.log(img.src);
console.log(img.className);
console.log(img.title);
console.log(img.hasAttributes());// see if this element has Attribute
console.log(img.hasAttribute('src'));// insert Attribute in () and then till us if this Attribute is Existing
console.log(img.hasAttribute('accesskey'));
console.log(img.attributes);// show all attributes
console.log(img.attributes[2]);
img.setAttribute('alt','ahmed'); // it is change value 
img.setAttribute('accesskey','1234');// بعطي قيمة ل اتريبيوت جديد 
img.removeAttribute('class');
img.removeAttribute('id');// it is remove Attribute