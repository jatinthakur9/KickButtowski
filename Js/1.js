//decalre variable using var

// var namee = "jatin";

// console.log(namee);


// important array methods 
// 56
// for each aray method 
// this was for each on simple aray 
// const arr = [5 , 3  , 87 , 3 , 7];

 

// function jtt(  num ,  index ){
  

       
//             console.log(`The value is ${num*2}  and index is   ${index} `)
        
    
        
     

// }


//  arr.forEach(jtt);

//  this will be foreach for array with obj inside 

// const arrobj = [

// {firstname:"jatin"  , age: 22},
// {firstname:"j"  , age: 2},
// {firstname:"jat"  , age: 252},
// {firstname:"jain"  , age: 282},



// ]



// arrobj.forEach(function(user){
//     console.log(user.firstname);
//     console.log(user.age);
// })


// map method

//map method for simple array
// const numberr = [ 2, 4 ,5 ,3 ,5 ,2];



// function ind(number){
//  return number*number;
// }


// const hll = numberr.map(ind);

// console.log(hll);

// map method for obj in array

// const arrobj = [

// {firstname:"jatin"  , age: 22},
// {firstname:"j"  , age: 2},
// {firstname:"jat"  , age: 252},
// {firstname:"jain"  , age: 282},



// ]


// function india(numberr){
//     return numberr.firstname;
// }


// const maparr = arrobj.map(india);

// console.log(maparr); 


// filter method 


// const arr = [1,3,5,6,8,4,12];


// function iseven(number){

//     return number%2==0;
// }

// function isodd(number){

//     return number%2!==0;
// }

// const jrr = arr.filter(iseven);
// const trr = arr.filter(isodd);
// console.log(jrr);
// console.log(trr);

//reduce method 
//reduce used in simple array
// const numbers = [2,4,87,4,6,8,4,3];

// function hello(a,b){
    
//     return a+b;

// }


// const summ = numbers.reduce(hello, 100);

// console.log(summ);

// recduce used in array with obj inside

// const arrobj = [

// {firstname:"jatin"  , age: 22},
// {firstname:"j"  , age: 1},
// {firstname:"jat"  , age: 252},
// {firstname:"jain"  , age: 282},



// ]



// function tage( a , b   ){
//    return  a + b.age
// }



// const sum = arrobj.reduce(tage , 0 );

// console.log(sum);


// sort method 
//simple array
// const num = [353,343,565,2123,575689,56,9,3,1 ,2224];


// num.sort( ( a, b)=>{
//   return b-a;
// });

// console.log(num);


//sort method obj array

// const arrobj = [

// {firstname:"jatin"  , age: 22},
// {firstname:"j"  , age: 1},
// {firstname:"jat"  , age: 252},
// {firstname:"jain"  , age: 282},



// ];


// arrobj.sort( (a , b )=>{
//     return a.age -b.age
// }

// );

// console.log(arrobj);


//find method 

// const pets  = [ "gdf" ,"gof","dog ","gof" ]


// function l3(string){
//     return string.length ==3;

// }


// const j = pets.find(l3);

// console.log(j);

// // in array with obj find method

// const arrobj = [

// {firstname:"jatin"  , age: 22  , uiid:5951},
// {firstname:"j"  , age: 1, uiid:5952    },
// {firstname:"jat"  , age: 252   , uiid:5953 },
// {firstname:"jain"  , age: 282    , uiid:5954 },



// ];


// function id(u){
//   return u.uiid==5951;
// } 



// const s = arrobj.find(id);

// console.log(s);


//every method 

// const num = [2,6,8,5,10];


// function ideven(number){

//     return number%2==0;


// }



// const ans = num.every(ideven);

// console.log(ans);


// every method with array obj


// const arrobj = [

// {firstname:"jatin"  , age: 22  , uiid:5951},
// {firstname:"j"  , age: 1, uiid:5952    },
// {firstname:"jat"  , age: 252   , uiid:5953 },
// {firstname:"jain"  , age: 282    , uiid:5954 },



// ];


// function idcheck(id){
//     return id.uiid>=5951;
// }



// const ans = arrobj.every(idcheck);

// console.log(ans);


// some  method  


// if even single conditon is matched it will return true

// const num = [2,6,8,8,10];


// function ideven(number){

//     return number%2!==0;


// }



// const ans = num.some(ideven);

// console.log(ans);


// some method with array obj


// const arrobj = [

// {firstname:"jatin"  , age: 22  , uiid:5951},
// {firstname:"j"  , age: 1, uiid:5952    },
// {firstname:"jat"  , age: 252   , uiid:5953 },
// {firstname:"jain"  , age: 282    , uiid:5954 },



// ];


// function idcheck(id){
//     return id.uiid<5951;
// }



// const anss = arrobj.some(idcheck);

// console.log(anss);


// fill method
 


// const arr = new Array(10).fill(5 , 0 , 10);

// console.log(arr)


//splice method 
// start  , delete  , insert


const item = ["item1","item2","item3","item3"];


item.splice(1, 2 , "jatin" ,"is great");

console.log(item);