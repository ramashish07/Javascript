// 1. Ways to Print Javascript  
// console.log ("Hello World");
//  alert("me");
// document.write ("this is document write");


// // 2. Javascript Console API
// console.log("Hellow world", 4 + 6, "Another log ");
// console.warn("This is warning");
// console.error(" This is an error");
// //   console.clear();
// //console.assert(4 == 6);

// // 3. Javascript Variables

// // What are variables ?
// //  Containers to stored data values  

// // multi 
// // line 
// // comment 

// /* multi
//   line 
//   oomment 
// */
// var number1 = 34;
// var number2 = 56;
// // console.log(number1 + number2);

// //4. Data Types in Javascript

// // Numbers 
// var num1 = 455;
// var num2 = 155.63;

// // strings 
// var str1 = "This is a string";
// var str2 = 'This is a string two';

// // Objects :- It stores Key value pairs 

// var marks = {
//     ravi: 34,
//     shubham: 56,
//     ramashish: 100
// }

// // console.log(marks);// semicolon nhi v lgaoge tou it's ok ;

// // Booleans 
// var a = true;
// var b = false;
// // console.log(a, b)


// // var und undefined 
// var und;
// //console.log(und);

// var n = null;
// //console.log(n);

// /*
//  At a very high level , there are  tow types of datatypes 
//   in Javascript
//     1. Primitive Data types : undefined , null, number ,string, boolean , symbol
//     2. Reference Data types : Arrays , Objects ;


//  */

// var arr = [1, 2, "string", 4, 5];  // index in javascript starts from 0
// // console.log(arr);   
// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);

// // 5. Operators iN Javscript 

// // Arithmetic Operators 
// var a = 100;
// var b = 10;
// //   console.log (" The value of a+ b is " ,  a+ b );
// //   console.log (" The value of a+ b is " ,  a- b );
// //   console.log (" The value of a+ b is " ,  a/b );
// //   console.log (" The value of a+ b is " ,  a% b );

// // Assignment Operator 
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// // console.log ( c );

// // Comparison Operator  Gives value in true or false 
// var x = 34;
// var y = 56;
// //  console.log ( x ==y);
// //  console.log ( x>=y );   
// //  console.log ( x<=y);
// //  console.log ( x >y);
// //  console.log ( x<y );


// // Logical Operators 

// // Logial AND
// //   console.log ( true && true  );
// //   console.log ( true && false );
// //   console.log ( false && true );
// //   console.log( false && false );

// // logical OR 
// //   console.log ( true || true  );
// //   console.log ( true || false );
// //   console.log ( false|| true );
// //   console.log( false || false );  // alt +click krne p 

// // logical NOT

// //    console.log (! false );
// //    console.log ( !true );


// Functions 
// DRY -Do not repeat yourself 
function avg(a, b) {
    return (a + b) / 2;

}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// // if in console log numbers is represented in  blue or black 
// // but string number is represented in black


// // Conditionals in Javascript 

// var age = 8;
// // Single if statement 
// if (age > 8) {
//     // console.log(" You are a kid ");
// }
// else {
//     // console.log(" You are not a kid ");
// }

// // If else statement 
// /*
// if (age > 8) {
//     console.log(" You are a kid ");
// }
// else {
//     console.log(" You are not a kid ");
// }


// // If else ladder 

// if (age > 2) {
//     console.log("You are not a kid");
// }

// else if (age > 26) {
//     console.log("Bacche nhi rhe ");
// }

// else if (age > 18) {
//     console.log(" Bhai kya kr rha hai");
// }

// else0 {
//     console.log(" Dekho bhai ye bakchodi ho rha hai ");
// }
// */


// var arr = [1, 2, 3, 4, 5];

// // console.log(arr);

// // for (var i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // arr.forEach(function (element) {
// //     console.log(arr[i]);
// // })

// //   let  j  = 0 ;  // Block level scope 
// //   const ac = 0 ;
// //   a++;  // will through error
// //    while ( j <arr.length)
// //    {
// //      console.log ( arr[j]);
// //      j++;
// //    }                                

// let j = 0;
// do {
//     //   console.log ( arr[j]);
//     j++;

// } while (j < arr.length);





// let myArr = ["Fan", "Camera", "34", null, true];

// // Array methods 
// //  console.log (myArr);

// //   myArr.pop();  //  deletes the last element
// //   myArr.push("Ramashish");
// //   myArr.shift(); // deleted the first element 
// //   myArr.unshift("hARRY") // insert element at begining 
// //   console.log ( myArr) ;

// //   let newlen = myArr.unshift("Harry");
// //   console.log ( newlen);

// //   myArr.toString();
// //   myArr.sort();  // first converts into string then sort 


// // String methods 

// let mylovestring = "Harry is a good boy";
// // console.log(mylovestring.length);
// // console.log(mylovestring.indexOf("Harry")) // returns index of first occurence
// // console.log(mylovestring.lastIndexOf("Harry")) // returns last index of harry
// // console.log (mylovestring.slice( 0  , 4));  // SUBSTRING just like array

// // mylovestring.repeat("Harry" , "Rohan")  // Replaces  only first occurence of Harry to Rohan
 

// // Dates in Javascript 
//  // let myDate = new Date(); // new is a ke
// //  console.log ( myDate);
// //  console.log ( myDate.getTime());
// //  console.log ( myDate.getFullYear());
// //  console.log (myDate.getDay());
   

// // DOM manipulation

// //   let elem =document.getElementById('Click');
// //    console.log (elem);

// //    let elems=document.getElementsByClassName("container")
// //    console.log(elems);
// //    elems[0].style.background="yellow"


// // consolo.log (" ")