// ****************** object *********************************************************
let car ={
    brand : 'bmw',
    price : 500000,
    color: ['white', 'red', 'black'],
    model : 2020,
    // nested object
    number_car:{
        first:1242564,
        second:232535,
    },
    one_color : function(){
        return this.color[0];
    },
    old:function(){
        return 2022-car.model;
    },
   speed(){
    
   }  
};
console.log(car.brand);
console.log(car['price']);
console.log(car);
console.log(car.one_color());
console.log(car.number_car.first);
console.log(car['number_car']['first']);

let user = {};
user.name='ahmad'; // create proparity
user['age']=24;
console.log(user.name);
console.log(user.age);
user.hello=function(){
    return 'hello';
}
console.log(user.hello());
 
let users = new String();
console.log(users);
let users1 = new Object();


//******************* * this***************** 
let nymar= {
    name:'jr',
    priunt_name(){
        return this.name;// this = ynmar
    }
}
console.log(nymar.priunt_name());
let qwe= this;
console.log(qwe);// this point to the global object which is window
console.log(this== window); // return true
//this.alert();// this = window
function helloo()
{
    return this;
}
console.log(helloo());// print window 

// create object 2
let user1={
    name : 'ahmad',
     get_name(){
      return user1.name;  
    },
    get_name1(){
        return this.name;  
      }
}
let user2 = Object.create(user1);
user2.name ='anas';
user2.age = 32;
console.log(user2.name);
console.log(user1.name);
console.log(user2.get_name());
console.log(user2.get_name1());

let user3 =Object.create(user2,{
    number:{ value : 10}
});

console.log(user3.number);

// ------------------- object assign -----------------------
// دمج بين الاوبجيكت
let a1 = {
    num:231,
    hello(){
        return 'hello';
    }
}
let a2 = {
    num1:21,
}
let a3 = {
    num2:31,
}
let a4 = Object.assign(a1,a2,a3,{num4:4});
console.log(a4);
console.log(a1); // ليش خزن القيم فيها برضه
 